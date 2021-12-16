import PostCard, { PostCardProps } from 'components/PostCard'
import * as S from './styles'

export type PostGridProps = {
  posts: PostCardProps[]
  twoColumns?: boolean
}

const PostGrid = ({ posts = [], twoColumns = false }: PostGridProps) => (
  <S.Wrapper>
    {posts.length === 0 && <S.NotFound>Nenhum post encontrado aqui</S.NotFound>}

    <S.Grid twoColumns={twoColumns}>
      {posts.length > 0 &&
        posts.map((post) => <PostCard key={`post-${post.id}`} {...post} />)}
    </S.Grid>
  </S.Wrapper>
)

export default PostGrid
