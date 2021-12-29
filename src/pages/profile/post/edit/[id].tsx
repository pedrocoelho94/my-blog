import { loadPosts } from 'api/loadPosts'
import { gqlClient } from 'graphql/client'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { serverSideRedirect } from 'utils/server-side-redirect'
import { GQL_QUERY_GET_GUESTREVIEW } from 'graphql/queries/guestReview'
import { GuestPost } from 'pages/profile/posts'
import { SettingsStrapi } from 'shared-typed/settings'
import PrivateComponent from 'components/PrivateComponent'
import UpdateGuestReviewTemplate from 'templates/UpdateGuestReview'

export type PostPageEditProps = {
  setting?: SettingsStrapi
  guestReview: GuestPost
}

export default function PostPageEdit({
  setting,
  guestReview
}: PostPageEditProps) {
  return (
    <PrivateComponent>
      <UpdateGuestReviewTemplate setting={setting} guestReview={guestReview} />
    </PrivateComponent>
  )
}

export const getServerSideProps: GetServerSideProps<PostPageEditProps> = async (
  ctx
) => {
  const { setting } = await loadPosts()
  const session = await getSession(ctx)

  if (!session) {
    return serverSideRedirect(ctx)
  }

  try {
    const { id } = ctx.params
    const { guestreview } = await gqlClient.request(
      GQL_QUERY_GET_GUESTREVIEW,
      { id },
      { Authorization: `Bearer ${session.accessToken}` }
    )

    return {
      props: {
        session,
        guestReview: guestreview,
        setting
      }
    }
  } catch (e) {
    return serverSideRedirect(ctx)
  }
}
