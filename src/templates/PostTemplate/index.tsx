import { Container } from 'components/Container'
import Post from 'components/Post'
import PostTags from 'components/PostTags'
import { PostStrapi } from 'shared-typed/postStrapi'
import { SettingsStrapi } from 'shared-typed/settings'
import BaseTemplate from 'templates/Base'
import * as S from './styles'

export type PostTemplateProps = {
  settings: SettingsStrapi
  post: PostStrapi
}

const PostTemplate = ({ settings, post }: PostTemplateProps) => (
  <BaseTemplate settings={settings}>
    <S.Wrapper>
      <Container>
        <Post {...post} />
        <PostTags tags={post.tags} />
      </Container>
    </S.Wrapper>
  </BaseTemplate>
)

export default PostTemplate
