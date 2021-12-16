import { loadPosts, LoadPostsVariables } from 'api/loadPosts'
import { Container } from 'components/Container'
import GridReviews from 'components/GridReviews'
import { PostCardProps } from 'components/PostCard'
import PostGrid from 'components/PostGrid'
import { useEffect, useState } from 'react'
import * as S from './styles'

export type PostsTemplateProps = {
  posts?: PostCardProps[]
  variables?: LoadPostsVariables
  category?: string[] //pagina category
  author?: string //pagina author
  searchTerm?: string | string[] | undefined //pagina searchTerm
  tag?: string
  twoColumns?: boolean
}

const PostsTemplate = ({
  posts = [],
  variables,
  category = [],
  author = '',
  searchTerm = '',
  tag = '',
  twoColumns = false
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts)
  const [stateVariables, setStateVariables] = useState(variables)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [noMorePosts, setNoMorePosts] = useState(false)

  useEffect(() => {
    setStatePosts(posts)

    if (posts.length < Number(variables?.limit)) {
      setButtonDisabled(true)
      setNoMorePosts(true)
    }
  }, [posts, variables])

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true)

    const newVariables = {
      ...stateVariables,
      start: Number(stateVariables?.start) + Number(stateVariables?.limit),
      limit: stateVariables?.limit
    }

    const morePosts = await loadPosts(newVariables)

    // if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
    //   setNoMorePosts(true)
    //   return
    // }

    setButtonDisabled(false)
    setStateVariables(newVariables)
    setStatePosts((p) => [...p, ...morePosts.posts])

    if (morePosts.posts.length < Number(variables?.limit)) {
      setButtonDisabled(true)
      setNoMorePosts(true)
    }
  }

  return (
    <S.Wrapper>
      <S.TitleCategory>
        {!!author && <S.Title>{author}</S.Title>}
        {category.length > 0 && <S.Title>{category[0]}</S.Title>}
        {!!tag && <S.Title>{tag}</S.Title>}
      </S.TitleCategory>

      <S.PostsContent>
        {!!searchTerm && (
          <S.SearchTerm>
            Resultados para{' '}
            <S.HighlightText>{`"${searchTerm}"`}</S.HighlightText>
          </S.SearchTerm>
        )}

        {/* Coloca o componente container apenas nas páginas de categorias, author ou tags */}
        {!!author || category.length > 0 || !!tag || !!searchTerm ? (
          <Container>
            {/* category[displayName, slug] */}
            {category[1] === 'reviews' ? (
              <GridReviews posts={statePosts} />
            ) : (
              <PostGrid posts={statePosts} twoColumns={twoColumns} />
            )}
          </Container>
        ) : (
          <>
            {/* category[displayName, slug] */}
            {category[1] === 'reviews' ? (
              <GridReviews posts={statePosts} />
            ) : (
              <PostGrid posts={statePosts} twoColumns={twoColumns} />
            )}
          </>
        )}

        {statePosts.length > 0 && (
          <S.ButtonContainer>
            <S.Button onClick={handleLoadMorePosts} disabled={buttonDisabled}>
              {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
            </S.Button>
          </S.ButtonContainer>
        )}
      </S.PostsContent>
    </S.Wrapper>
  )
}

export default PostsTemplate
