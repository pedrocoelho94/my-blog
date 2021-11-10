import ArticleMeta, { ArticleMetaProps } from 'components/ArticleMeta'
import Heading from 'components/Heading'
import { StrapiImage } from 'shared-typed/cover'
import * as S from './styles'

export type ArticleHeaderProps = {
  id: string
  title: string
  excerpt: string
  cover: StrapiImage
} & ArticleMetaProps

const ArticleHeader = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt
}: ArticleHeaderProps) => (
  <S.Wrapper>
    <Heading size="big">{title}</Heading>
    <S.Excerpt>{excerpt}</S.Excerpt>
    <S.Cover src={cover.url} alt={cover.alternativeText} />
    <ArticleMeta
      author={author}
      categories={categories}
      createdAt={createdAt}
    />
  </S.Wrapper>
)

export default ArticleHeader
