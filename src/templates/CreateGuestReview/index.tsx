import { gqlClient } from 'graphql/client'
import { GQL_MUTATION_CREATE_GUESTREVIEW } from 'graphql/mutations/guestReview'
import FormPost from 'components/FormPost'
import { useSession } from 'next-auth/react'
import BaseTemplate from 'templates/Base'

import { Container } from 'components/Container'
import { CreateGuestReviewProps } from 'pages/profile/post/new'
import { useRouter } from 'next/router'
import slugify from 'slugify'

import * as S from './styles'

const CreateGuestReviewTemplate = ({ setting }: CreateGuestReviewProps) => {
  const router = useRouter()
  const { data: session } = useSession()

  const handleSave = async ({ title, cover, excerpt, content }) => {
    try {
      const response = await gqlClient.request(
        GQL_MUTATION_CREATE_GUESTREVIEW,
        {
          title,
          slug: slugify(title, { lower: true, strict: true }),
          cover,
          excerpt,
          content
        },
        { Authorization: `Bearer ${session.accessToken}` }
      )

      const {
        createGuestreview: { guestreview }
      } = response

      if (guestreview) {
        router.push(`/profile/posts`)
      } else {
        throw new Error('Erro ao criar post')
      }
    } catch (e) {
      console.log(e)
      alert('Erro ao criar o post')
    }
  }

  return (
    <BaseTemplate settings={setting}>
      <Container>
        <S.Wrapper>
          <FormPost onSave={handleSave} />
        </S.Wrapper>
      </Container>
    </BaseTemplate>
  )
}

export default CreateGuestReviewTemplate
