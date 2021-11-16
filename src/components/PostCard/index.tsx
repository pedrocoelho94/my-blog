import Heading from 'components/Heading'
import Link from 'next/link'
import { formatDate } from 'utils/format-date'

import { AccountCircle, CalendarToday } from '@styled-icons/material-outlined'
import * as S from './styles'
import { Author } from 'shared-typed/author'
import { StrapiImage } from 'shared-typed/cover'

export type PostCardProps = {
  id: string
  title: string
  cover: StrapiImage
  slug: string
  createdAt: string
  excerpt: string
  author?: Author
}

const PostCard = ({
  title,
  cover,
  excerpt,
  slug,
  author = undefined,
  createdAt
}: PostCardProps) => (
  <S.Wrapper>
    <S.ContainerCover>
      <Link href={`/post/${slug}`} passHref>
        <a>
          <S.Cover src={cover.url} alt={cover.alternativeText} />
        </a>
      </Link>
    </S.ContainerCover>

    <S.Content>
      <S.Info>
        {author && typeof author !== 'undefined' && (
          <span>
            <AccountCircle size={18} />
            <Link href={`/author/${author.slug}`}>
              <a>{author.displayName}</a>
            </Link>
          </span>
        )}
        <span>
          <CalendarToday size={16} />
          {formatDate(createdAt)}
        </span>
      </S.Info>

      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`} passHref>
          <a>{title}</a>
        </Link>
      </Heading>

      <S.Excerpt>{excerpt}</S.Excerpt>
    </S.Content>
  </S.Wrapper>
)

export default PostCard
