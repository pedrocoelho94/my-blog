import { loadPosts } from 'api/loadPosts'

import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { serverSideRedirect } from 'utils/server-side-redirect'

import { SettingsStrapi } from 'shared-typed/settings'
import PrivateComponent from 'components/PrivateComponent'
import CreateGuestReviewTemplate from 'templates/CreateGuestReview'

export type CreateGuestReviewProps = {
  setting: SettingsStrapi
}

export default function CreateGuestReview({ setting }: CreateGuestReviewProps) {
  return (
    <PrivateComponent>
      <CreateGuestReviewTemplate setting={setting} />
    </PrivateComponent>
  )
}

export const getServerSideProps: GetServerSideProps<
  CreateGuestReviewProps
> = async (ctx) => {
  const { setting } = await loadPosts()
  const session = await getSession(ctx)

  if (!session) {
    return serverSideRedirect(ctx)
  }

  return {
    props: {
      session,
      setting
    }
  }
}
