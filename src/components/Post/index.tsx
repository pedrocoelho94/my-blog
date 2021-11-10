import ArticleHeader, { ArticleHeaderProps } from 'components/ArticleHeader'
import HtmlContent from 'components/HtmlContent'
import { PostContainer } from 'components/PostContainer'
import * as S from './styles'

export type PostsProps = {
  content: string
} & ArticleHeaderProps

const Post = ({
  id,
  title,
  excerpt,
  cover,
  author,
  createdAt,
  categories,
  content
}: PostsProps) => (
  <S.Wrapper>
    <PostContainer size="max">
      <ArticleHeader
        id={id}
        title={title}
        excerpt={excerpt}
        cover={cover}
        author={author}
        categories={categories}
        createdAt={createdAt}
      />
    </PostContainer>
    <PostContainer size="content">
      <HtmlContent html={content} />
    </PostContainer>
  </S.Wrapper>
)

export default Post
