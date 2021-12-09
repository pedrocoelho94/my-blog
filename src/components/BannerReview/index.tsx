import Link from 'next/link'

import { PostCardProps } from 'components/PostCard'
import * as S from './styles'

export type BannerReviewProps = PostCardProps

const BannerReview = ({ id, slug, reviewDetails }: BannerReviewProps) => (
  <S.Wrapper>
    <S.Poster key={`poster-${id}`} aria-label="posters">
      <Link href={`/reviews/${slug}`} passHref>
        <a>
          <S.Image
            src={
              reviewDetails?.poster?.url ||
              'https://res.cloudinary.com/rabbitz/image/upload/v1639065853/naodisponivel_51e39f7e5f.jpg'
            }
            alt={reviewDetails?.poster?.alternativeText}
          />
          {!!reviewDetails?.rating && (
            <S.Rating rating={reviewDetails?.rating || 0} aria-label="rated">
              <span>{reviewDetails?.rating}</span>
            </S.Rating>
          )}
        </a>
      </Link>
    </S.Poster>
  </S.Wrapper>
)

export default BannerReview
