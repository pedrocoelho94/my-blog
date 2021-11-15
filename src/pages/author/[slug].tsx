import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { loadPosts, StrapiPostAndSettings } from 'api/loadPosts'
import PostsTemplate from 'templates/PostsTemplate'

export default function AuthorPage({ posts, setting }: StrapiPostAndSettings) {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Head>
        <title>
          Author: {posts[0].author?.displayName} - {setting.blogName}
        </title>
      </Head>
      <PostsTemplate settings={setting} posts={posts} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (
  ctx
) => {
  let data: StrapiPostAndSettings | null = null

  data = await loadPosts({ authorSlug: ctx.params?.slug as string })

  if (!data?.posts.length) {
    return { notFound: true }
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting
    },
    revalidate: 24 * 60 * 60
  }
}
