import { Author } from 'shared-typed/author'
import { Category } from 'shared-typed/category'
import { formatDate } from 'utils/format-date'
import * as S from './styles'

export type ArticleMetaProps = {
  createdAt: string
  author: Author
  categories: Category[]
}

const ArticleMeta = ({ author, categories, createdAt }: ArticleMetaProps) => (
  <S.Wrapper>
    <p>
      <span>Por </span>
      <a href={`/author/${author.slug}`}>{author.displayName}</a>
      <span className="separator"> em </span>
      <time dateTime={createdAt}>{formatDate(createdAt)}</time>
      <span className="separator"> - </span>

      <span className="categories">
        {categories.map((category) => (
          <span key={`article-meta-cat-${category.id}`}>
            <a href={`/category/${category.slug}`}>{category.displayName}</a>
          </span>
        ))}
      </span>
    </p>
  </S.Wrapper>
)

export default ArticleMeta
