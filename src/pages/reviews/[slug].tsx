import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { loadPosts, StrapiPostAndSettings } from 'api/loadPosts'
import PostTemplate, { PostTemplateProps } from 'templates/PostTemplate'

export default function PostPage({
  post,
  settings,
  recentsPostsByAuthor,
  recentsPostsByCategory
}: PostTemplateProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Head>
        <title>
          {post.title} - {settings.blogName}
        </title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostTemplate
        post={post}
        settings={settings}
        recentsPostsByAuthor={recentsPostsByAuthor}
        recentsPostsByCategory={recentsPostsByCategory}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data: StrapiPostAndSettings | null = null
  const variables = { categorySlug: 'reviews' }

  data = await loadPosts(variables)
  // cria as páginas de acordo com o slug
  const paths = data.posts.map((post) => ({ params: { slug: post.slug } }))
  console.log('PATHS REVIEWS', paths)
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<PostTemplateProps> = async (
  ctx
) => {
  let data: StrapiPostAndSettings | null = null
  let postsByAuthor: StrapiPostAndSettings | null = null
  let postsByCategory: StrapiPostAndSettings | null = null

  data = await loadPosts({ postSlug: ctx.params?.slug as string })

  postsByAuthor = await loadPosts({
    authorSlug: data.posts[0].author?.slug,
    limit: 5
  })
  postsByCategory = await loadPosts({
    categorySlug: data.posts[0].categories?.[0].slug,
    limit: 5
  })

  // exclui o post atual do array de ultimos posts do author
  const newPostsByAuthor = postsByAuthor.posts.filter(
    (post) => post.slug != ctx.params?.slug
  )

  if (!data?.posts.length) {
    return { notFound: true }
  }

  return {
    props: {
      post: data.posts[0],
      settings: data.setting,
      recentsPostsByAuthor: newPostsByAuthor,
      recentsPostsByCategory: postsByCategory.posts
    },
    revalidate: 24 * 60 * 60
  }
}
