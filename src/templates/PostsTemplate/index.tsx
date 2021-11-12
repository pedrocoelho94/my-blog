import { Container } from 'components/Container'
import { PostCardProps } from 'components/PostCard'
import PostGrid from 'components/PostGrid'
import { SettingsStrapi } from 'shared-typed/settings'
import BaseTemplate from 'templates/Base'
import * as S from './styles'

export type PostsTemplateProps = {
  settings: SettingsStrapi
  posts?: PostCardProps[]
}

const PostsTemplate = ({ settings, posts = [] }: PostsTemplateProps) => (
  <BaseTemplate settings={settings}>
    <S.Wrapper>
      <Container>
        <PostGrid posts={posts} />
      </Container>
    </S.Wrapper>
  </BaseTemplate>
)

export default PostsTemplate
