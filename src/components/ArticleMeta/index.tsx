import Link from 'next/link'

import { Author } from 'shared-typed/author'
import { Category } from 'shared-typed/category'
import { formatDate } from 'utils/format-date'
import * as S from './styles'

export type ArticleMetaProps = {
  createdAt: string
  author?: Author
  categories?: Category[]
}

const ArticleMeta = ({
  author = undefined,
  categories = [],
  createdAt
}: ArticleMetaProps) => (
  <S.Wrapper>
    <p>
      {author && typeof author !== 'undefined' && (
        <>
          <span>Por </span>
          <Link href={`/author/${author?.slug}`} passHref>
            <a>{author?.displayName}</a>
          </Link>
          <span className="separator"> em </span>
        </>
      )}

      <time dateTime={createdAt}>{formatDate(createdAt)}</time>

      {categories && categories.length > 0 && (
        <>
          <span className="separator"> - </span>
          <span className="categories">
            {categories.map((category) => (
              <span key={`article-meta-cat-${category.id}`}>
                <Link href={`/category/${category.slug}`} passHref>
                  <a>{category.displayName}</a>
                </Link>
              </span>
            ))}
          </span>
        </>
      )}
    </p>
  </S.Wrapper>
)

export default ArticleMeta
