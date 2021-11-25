import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostAndSettings
} from 'api/loadPosts'
import PostsTemplate from 'templates/PostsTemplate'
import BaseTemplate from 'templates/Base'

export default function SearchPage({
  posts,
  setting,
  variables
}: StrapiPostAndSettings) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>
          Você pesquisou por: {router.query.slug} - {setting.blogName}
        </title>
      </Head>

      <BaseTemplate settings={setting}>
        <PostsTemplate
          posts={posts}
          variables={variables}
          searchTerm={router.query.slug}
        />
      </BaseTemplate>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<
  StrapiPostAndSettings
> = async (ctx) => {
  let data: StrapiPostAndSettings | null = null
  //const query = ctx.query.q || ''
  const searchTerm = ctx.params?.slug

  if (!searchTerm) {
    return { notFound: true }
  }

  const variables = { postSearch: searchTerm as string }

  data = await loadPosts(variables)

  if (!data || !data.posts) {
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
    }
  }
}
