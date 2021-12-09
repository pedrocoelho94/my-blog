import HeadingBar from 'components/HeadingBar'
import { PostStrapi } from 'shared-typed/postStrapi'
import { ListAlt } from '@styled-icons/material-outlined/ListAlt'

import * as S from './styles'

export type RelatedPostsProps = {
  posts: PostStrapi[]
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => (
  <S.Wrapper>
    <HeadingBar icon={<ListAlt />}>Notícias Relacionadas</HeadingBar>

    <S.Content>
      {posts.slice(0, 4).map((post) => (
        <p key={post.id} aria-label="related">
          {post.title}
        </p>
      ))}
    </S.Content>
  </S.Wrapper>
)

export default RelatedPosts
