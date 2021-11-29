import Link from 'next/link'
import { Category } from 'shared-typed/category'
import { StrapiImage } from 'shared-typed/cover'
import * as S from './styles'

export type BannerProps = {
  slug: string
  cover: StrapiImage
  title: string
  excerpt: string
  categories: Category[]
}

const Banner = ({ cover, slug, title, excerpt, categories }: BannerProps) => (
  <S.Wrapper>
    <Link href={`/${categories?.[0].slug}/${slug}`} passHref>
      <a>
        <S.Content>
          <S.Image src={cover.url} role="img" aria-label={title} />

          <S.Caption>
            <S.Title>{title}</S.Title>
            <S.Subtitle>{excerpt}</S.Subtitle>
          </S.Caption>
        </S.Content>
      </a>
    </Link>
  </S.Wrapper>
)

export default Banner
