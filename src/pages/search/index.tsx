import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostAndSettings
} from 'api/loadPosts'
import PostsTemplate from 'templates/PostsTemplate'

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
          Pesquisa: {router.query.q} - {setting.blogName}
        </title>
      </Head>
      <PostsTemplate settings={setting} posts={posts} variables={variables} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<StrapiPostAndSettings> =
  async (ctx) => {
    let data: StrapiPostAndSettings | null = null
    const query = ctx.query.q || ''

    console.log('WAAAAT', ctx.query)

    if (!query) {
      return { notFound: true }
    }

    const variables = { postSearch: query as string }

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
