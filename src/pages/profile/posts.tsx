import Head from 'next/head'
import { gqlClient } from 'graphql/client'
import { GQL_QUERY_GET_GUESTREVIEWS } from 'graphql/queries/guestReview'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { serverSideRedirect } from 'utils/server-side-redirect'

import PrivateComponent from 'components/PrivateComponent'
import { loadPosts } from 'api/loadPosts'
import { SettingsStrapi } from 'shared-typed/settings'
import MyPostsTemplate from 'templates/MyPosts'

//import { useRouter } from 'next/router'

export type GuestPost = {
  id?: string
  title: string
  slug?: string
  cover: string
  excerpt: string
  content: string
}

export type MyPostsPageProps = {
  guestreviews?: GuestPost[]
  setting: SettingsStrapi
}

export default function MyPostsPage({
  guestreviews,
  setting
}: MyPostsPageProps) {
  //const router = useRouter()
  //const refreshData = () => router.replace(router.asPath)

  return (
    <>
      <Head>
        <title>{setting.blogName} - Meus Posts</title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      {console.log('SERVER QTD', guestreviews.length)}

      <PrivateComponent>
        {guestreviews.length}
        <MyPostsTemplate setting={setting} guestreviews={guestreviews} />
      </PrivateComponent>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<MyPostsPageProps> = async (
  ctx
) => {
  const { setting } = await loadPosts()
  const session = await getSession(ctx)

  if (!session) {
    return serverSideRedirect(ctx)
  }

  try {
    const { guestreviews } = await gqlClient.request(
      GQL_QUERY_GET_GUESTREVIEWS,
      null,
      {
        Authorization: `Bearer ${session.accessToken}`
      }
    )

    return {
      props: {
        session,
        guestreviews,
        setting
      }
    }
  } catch (e) {
    return serverSideRedirect(ctx)
  }
}
