import * as S from './styles'
import Link from 'next/link'
import { Category } from 'shared-typed/category'
import { formatDate } from 'utils/format-date'

export type AsidePostsProps = {
  title: string
  cover: string
  slug: string
  categories: Category[]
  createdAt: string
}

const AsidePosts = ({
  title,
  cover,
  slug,
  categories,
  createdAt
}: AsidePostsProps) => (
  <S.Wrapper>
    <Link href={`/${categories?.[0].slug}/${slug}`} passHref>
      <S.Content>
        <S.Cover src={cover} alt={title} />

        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Date>
            <time dateTime={createdAt}>{formatDate(createdAt)}</time>
          </S.Date>
        </S.Info>
      </S.Content>
    </Link>
  </S.Wrapper>
)

export default AsidePosts
