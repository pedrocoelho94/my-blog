import { gqlClient } from 'graphql/client'
import { GQL_QUERY_GET_GUESTREVIEWS } from 'graphql/queries/guestReview'
import { GQL_MUTATION_DELETE_GUESTREVIEW } from 'graphql/mutations/guestReview'
import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import { frontEndRedirect } from 'utils/front-end-redirect'
import { serverSideRedirect } from 'utils/server-side-redirect'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export type PostsTemp = {
  id?: string
  title: string
  excerpt: string
}

export type MyPostsPageProps = {
  guestreviews?: PostsTemp[]
}

export default function MyPostsPage({ guestreviews = [] }: MyPostsPageProps) {
  const { data: session, status } = useSession()
  const [stateGuestReviews, setStateGuestReviews] = useState(guestreviews)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setStateGuestReviews(guestreviews)
  }, [guestreviews])

  if (!session && status !== 'loading') {
    return frontEndRedirect()
  }

  if (typeof window !== 'undefined' && status === 'loading') {
    return null
  }

  if (!session) {
    return <p>você não está autenticado</p>
  }

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
    <>
      <h1>Olá, {session?.user?.name || 'visitante'}!</h1>
      {stateGuestReviews.map((review) => (
        <div key={review.id}>
          <div style={{ display: 'flex' }}>
            <h2>{review.title}</h2>
            <Link href={`/profile/post/${review.id}`}>
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
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
        guestreviews
      }
    }
  } catch (e) {
    return serverSideRedirect(ctx)
  }
}
