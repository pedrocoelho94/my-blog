import { loadPosts, LoadPostsVariables } from 'api/loadPosts'
import { Container } from 'components/Container'
import { PostCardProps } from 'components/PostCard'
import PostGrid from 'components/PostGrid'
import { useState } from 'react'
import { SettingsStrapi } from 'shared-typed/settings'
import BaseTemplate from 'templates/Base'
import * as S from './styles'

export type PostsTemplateProps = {
  settings: SettingsStrapi
  posts?: PostCardProps[]
  variables?: LoadPostsVariables
}

const PostsTemplate = ({
  settings,
  posts = [],
  variables
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts)
  const [stateVariables, setStateVariables] = useState(variables)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [noMorePosts, setNoMorePosts] = useState(false)

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
    <BaseTemplate settings={settings}>
      <S.Wrapper>
        <Container>
          <PostGrid posts={statePosts} />

          <S.ButtonContainer>
            <S.Button onClick={handleLoadMorePosts} disabled={buttonDisabled}>
              {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
            </S.Button>
          </S.ButtonContainer>
        </Container>
      </S.Wrapper>
    </BaseTemplate>
  )
}

export default PostsTemplate
