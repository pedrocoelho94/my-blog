import * as S from './styles'
import { PostCardProps } from 'components/PostCard'
import BannerReview from 'components/BannerReview'

export type GridReviewsProps = {
  posts: PostCardProps[]
}

const GridReviews = ({ posts }: GridReviewsProps) => (
  <S.Wrapper>
    {posts.map((post) => (
      <BannerReview key={post.id} {...post} />
    ))}
  </S.Wrapper>
)

export default GridReviews
