import Link from 'next/link'

import { PostTag } from 'shared-typed/tag'
import * as S from './styles'

export type PostTagsProps = {
  tags?: PostTag[]
}

const PostTags = ({ tags = [] }: PostTagsProps) => {
  if (tags.length === 0) return null

  return (
    <S.Wrapper>
      tags:{' '}
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
