import ArticleHeader, { ArticleHeaderProps } from 'components/ArticleHeader'
import { Container } from 'components/Container'
import HtmlContent from 'components/HtmlContent'

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
    <Container>
      <ArticleHeader
        id={id}
        title={title}
        excerpt={excerpt}
        cover={cover}
        author={author}
        categories={categories}
        createdAt={createdAt}
      />

      <HtmlContent html={content} />
    </Container>
  </S.Wrapper>
)

export default Post
