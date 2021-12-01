import { loadPosts, LoadPostsVariables } from 'api/loadPosts'
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
}

const PostsTemplate = ({
  posts = [],
  variables,
  category = [],
  author = '',
  searchTerm = '',
  tag = ''
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts)
  const [stateVariables, setStateVariables] = useState(variables)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [noMorePosts, setNoMorePosts] = useState(false)

  //atualizar a página quando for feita uma pesquisa
  useEffect(() => {
    setStatePosts(posts)
    setNoMorePosts(false)
    setButtonDisabled(false)
    setStateVariables(variables)
  }, [posts, variables])

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true)

    const newVariables = {
      ...stateVariables,
      start: Number(stateVariables?.start) + Number(stateVariables?.limit),
      limit: stateVariables?.limit
    }

    const morePosts = await loadPosts(newVariables)

    if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
      setNoMorePosts(true)
      return
    }

    setButtonDisabled(false)
    setStateVariables(newVariables)
    setStatePosts((p) => [...p, ...morePosts.posts])
  }

  return (
    <S.Wrapper>
      <div>
        {!!author && <S.Title>Autor: {author}</S.Title>}
        {!!category && <S.Title>Categoria: {category[0]}</S.Title>}
        {!!tag && <S.Title>Tag: {tag}</S.Title>}

        {!!searchTerm && (
          <S.Title>
            Você pesquisou por <S.HighlightText>{searchTerm}</S.HighlightText> e{' '}
            {statePosts.length}{' '}
            {statePosts.length === 1
              ? 'resultado foi encontrado.'
              : 'resultados foram encontrados.'}
          </S.Title>
        )}

        {/* category[displayName, slug] */}
        {category[1] === 'reviews' ? (
          <GridReviews posts={statePosts} />
        ) : (
          <PostGrid posts={statePosts} />
        )}

        {statePosts.length > 0 && (
          <S.ButtonContainer>
            <S.Button onClick={handleLoadMorePosts} disabled={buttonDisabled}>
              {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
            </S.Button>
          </S.ButtonContainer>
        )}
      </div>
    </S.Wrapper>
  )
}

export default PostsTemplate
