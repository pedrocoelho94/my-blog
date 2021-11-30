import { StrapiImage } from 'shared-typed/cover'
import { ReviewProps } from 'shared-typed/review'
import * as S from './styles'

export type CardReviewProps = {
  cover: StrapiImage
  reviewDetails: ReviewProps
}

const CardReview = ({ cover, reviewDetails }: CardReviewProps) => (
  <S.Wrapper>
    <S.ReviewDetails bgImage={cover.url}></S.ReviewDetails>
    <S.ReviewContent>
      <S.ReviewPoster
        src={reviewDetails?.poster?.url}
        alt={reviewDetails?.poster?.alternativeText}
      />
      <S.ReviewInfo>
        <S.ReviewTitle>
          {reviewDetails?.ptbrTitle} {`(${reviewDetails?.yearRelease})`}
        </S.ReviewTitle>
        <S.ReviewOriginalTitle>
          {reviewDetails?.originalTitle} -{' '}
          {reviewDetails?.director || reviewDetails?.creator}
        </S.ReviewOriginalTitle>

        <S.ReviewSinopse>{reviewDetails?.sinopse}</S.ReviewSinopse>
        <S.ReviewCast>Elenco: {reviewDetails?.cast}</S.ReviewCast>
      </S.ReviewInfo>
    </S.ReviewContent>
  </S.Wrapper>
)

export default CardReview
