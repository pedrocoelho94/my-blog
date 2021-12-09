import Link from 'next/link'

import { PostTag } from 'shared-typed/tag'
import * as S from './styles'

export type PostTagsProps = {
  tags?: PostTag[]
}

const PostTags = ({ tags = [] }: PostTagsProps) => {
  if (tags.length === 0) return null

  // organiza as tags em ordem alfabetica
  tags.sort((a, b) =>
    a.displayName > b.displayName ? 1 : b.displayName > a.displayName ? -1 : 0
  )

  return (
    <S.Wrapper>
      Saiba mais:{' '}
      {tags?.map((tag) => (
        <span key={tag.id}>
          <Link href={`/tag/${tag.slug}`} passHref>
            <a>{tag.displayName}</a>
          </Link>
        </span>
      ))}
    </S.Wrapper>
  )
}

export default PostTags
