import * as S from './styles'
import Link from 'next/link'
import { Category } from 'shared-typed/category'

export type AsidePostsProps = {
  title: string
  cover: string
  slug: string
  categories: Category[]
}

const AsidePosts = ({ title, cover, slug, categories }: AsidePostsProps) => (
  <S.Wrapper>
    <Link href={`/${categories?.[0].slug}/${slug}`} passHref>
      <S.Content>
        <S.Cover src={cover} alt={title} />
        <S.Title>{title}</S.Title>
      </S.Content>
    </Link>
  </S.Wrapper>
)

export default AsidePosts
