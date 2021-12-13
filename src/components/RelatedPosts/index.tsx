import HeadingBar from 'components/HeadingBar'
import { PostStrapi } from 'shared-typed/postStrapi'
import { ListAlt } from '@styled-icons/material-outlined/ListAlt'
import Link from 'next/link'

import * as S from './styles'

export type RelatedPostsProps = {
  posts: PostStrapi[]
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => (
  <S.Wrapper>
    <HeadingBar icon={<ListAlt />}>Notícias Relacionadas</HeadingBar>

    <S.Content>
      {posts.slice(0, 4).map((post) => (
        <S.ContentItem key={post.id} aria-label="related">
          <Link href={`/${post.categories[0].slug}/${post.slug}`}>
            <a>
              <S.Image src={post.cover.url} alt={post.cover.alternativeText} />
              <S.Title>{post.title}</S.Title>
            </a>
          </Link>
        </S.ContentItem>
      ))}
    </S.Content>
  </S.Wrapper>
)

export default RelatedPosts
