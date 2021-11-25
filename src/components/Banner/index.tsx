import Link from 'next/link'
import { StrapiImage } from 'shared-typed/cover'
import * as S from './styles'

export type BannerProps = {
  slug: string
  cover: StrapiImage
  title: string
  excerpt: string
}

const Banner = ({ cover, slug, title, excerpt }: BannerProps) => (
  <S.Wrapper>
    <Link href={`/post/${slug}`} passHref>
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
