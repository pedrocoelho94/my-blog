import * as S from './styles'
import { DiscussionEmbed } from 'disqus-react'

export type CommentsProps = {
  id: string
  slug: string
  title: string
  allowComments: boolean
}

const Comments = ({ id, slug, title, allowComments }: CommentsProps) => {
  if (!allowComments) return null

  return (
    <S.Wrapper>
      <DiscussionEmbed
        shortname="pedrocoelho-blog"
        config={{
          url: `/post/${slug}`,
          identifier: id,
          title: title,
          language: 'pt_BR'
        }}
      />
    </S.Wrapper>
  )
}

export default Comments
