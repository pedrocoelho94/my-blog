import { gqlClient } from 'graphql/client'
import { GQL_MUTATION_UPDATE_GUESTREVIEW } from 'graphql/mutations/guestReview'
import FormPost from 'components/FormPost'
import { useSession } from 'next-auth/react'
import BaseTemplate from 'templates/Base'

import { GuestPost } from 'pages/profile/posts'
import { SettingsStrapi } from 'shared-typed/settings'
import { Container } from 'components/Container'

import * as S from './styles'
import { useRouter } from 'next/router'

export type UpdateGuestReviewProps = {
  setting?: SettingsStrapi
  guestReview: GuestPost
}

const UpdateGuestReviewTemplate = ({
  setting,
  guestReview
}: UpdateGuestReviewProps) => {
  const router = useRouter()
  const { data: session } = useSession()

  const handleSave = async ({ id, title, cover, excerpt, content }) => {
    try {
      const response = await gqlClient.request(
        GQL_MUTATION_UPDATE_GUESTREVIEW,
        {
          id,
          title,
          cover,
          excerpt,
          content
        },
        { Authorization: `Bearer ${session.accessToken}` }
      )

      console.log('UPDATE', response)

      const {
        updateGuestreview: { guestreview }
      } = response

      if (guestreview) {
        router.push(`/profile/posts`)
      } else {
        throw new Error('Erro ao atualizar post')
      }
    } catch (e) {
      alert('Erro ao atualizar o post')
    }
  }

  return (
    <BaseTemplate settings={setting}>
      <Container>
        <S.Wrapper>
          <FormPost onSave={handleSave} guestReview={guestReview} />
        </S.Wrapper>
      </Container>
    </BaseTemplate>
  )
}

export default UpdateGuestReviewTemplate
