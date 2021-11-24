import Comments from 'components/Comments'
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
      <div>
        <Post {...post} />
        <PostTags tags={post.tags} />
        <Comments
          title={post.title}
          slug={post.slug}
          id={post.id}
          allowComments={post.allowComments}
        />
      </div>
    </S.Wrapper>
  </BaseTemplate>
)

export default PostTemplate
