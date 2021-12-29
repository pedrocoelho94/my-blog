import { gqlClient } from 'graphql/client'
import { GQL_MUTATION_DELETE_GUESTREVIEW } from 'graphql/mutations/guestReview'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

import { MyPostsPageProps } from 'pages/profile/posts'
import BaseTemplate from 'templates/Base'
import { Container } from 'components/Container'

import * as S from './styles'

const MyPostsTemplate = ({ setting, guestreviews = [] }: MyPostsPageProps) => {
  const { data: session } = useSession()

  const [stateGuestReviews, setStateGuestReviews] = useState(guestreviews)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setStateGuestReviews(guestreviews)
  }, [guestreviews])

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    try {
      await gqlClient.request(
        GQL_MUTATION_DELETE_GUESTREVIEW,
        {
          id
        },
        { Authorization: `Bearer ${session.accessToken}` }
      )

      setStateGuestReviews((s) => s.filter((p) => p.id !== id))
    } catch (e) {
      alert('Não foi possível excluir esse post')
      console.log(e)
    }

    setIsDeleting(false)
  }

  return (
    <BaseTemplate settings={setting}>
      <Container>
        <S.Wrapper>
          <S.Greetings>Olá, {session?.user?.name || 'visitante'}!</S.Greetings>
          {stateGuestReviews.map((review) => (
            <div key={review.id}>
              <div style={{ display: 'flex' }}>
                <h2>{review.title}</h2>
                <Link href={`/profile/post/edit/${review.id}`}>
                  <a>Editar</a>
                </Link>
                <button
                  onClick={() => handleDelete(review.id)}
                  disabled={isDeleting}
                >
                  Excluir
                </button>
              </div>

              <p>{review.excerpt}</p>
            </div>
          ))}
        </S.Wrapper>
      </Container>
    </BaseTemplate>
  )
}

export default MyPostsTemplate
