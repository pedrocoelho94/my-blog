import * as S from './styles'
import { PostCardProps } from 'components/PostCard'
import Link from 'next/link'

export type GridReviewsProps = {
  posts: PostCardProps[]
}

const GridReviews = ({ posts }: GridReviewsProps) => (
  <S.Wrapper>
    {posts.map((post) => (
      <S.Poster key={`poster-${post.id}`} aria-label="posters">
        <Link href={`/reviews/${post.slug}`} passHref>
          <a>
            <S.Image src={post.reviewDetails?.poster?.url} />
            <S.Rating rating={post.reviewDetails?.rating || 0}>
              <span>{post.reviewDetails?.rating}</span>
            </S.Rating>
          </a>
        </Link>
      </S.Poster>
    ))}
  </S.Wrapper>
)

export default GridReviews
