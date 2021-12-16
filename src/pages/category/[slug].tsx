import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostAndSettings
} from 'api/loadPosts'
import PostsTemplate from 'templates/PostsTemplate'
import BaseTemplate from 'templates/Base'

export default function CategoryPage({
  posts,
  setting,
  variables
}: StrapiPostAndSettings) {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  const { displayName, slug } = posts[0].categories[0]

  return (
    <>
      <Head>
        <title>
          {displayName} - {setting.blogName}
        </title>
      </Head>

      <BaseTemplate settings={setting}>
        <PostsTemplate
          posts={posts}
          variables={variables}
          category={[displayName, slug]}
          twoColumns
        />
      </BaseTemplate>
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
  const variables = { categorySlug: ctx.params?.slug as string, limit: 20 }

  data = await loadPosts(variables)

  if (!data?.posts.length) {
    return { notFound: true }
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: {
        ...defaultLoadPostsVariables,
        ...variables
      }
    },
    revalidate: 24 * 60 * 60
  }
}
