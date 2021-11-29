import * as S from './styles'
import Link from 'next/link'

export type AsidePostsProps = {
  title: string
  cover: string
  slug: string
}

const AsidePosts = ({ title, cover, slug }: AsidePostsProps) => (
  <S.Wrapper>
    <Link href={`/post/${slug}`} passHref>
      <S.Content>
        <S.Cover src={cover} alt={title} />
        <S.Title>{title}</S.Title>
      </S.Content>
    </Link>
  </S.Wrapper>
)

export default AsidePosts
