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

  const config = {
    url: `https://pedrocoelho.vercel.app/post/${slug}`,
    identifier: id,
    title: title,
    language: 'pt_BR'
  }

  return (
    <S.Wrapper>
      <DiscussionEmbed shortname="pedrocoelho-blog" config={config} />
    </S.Wrapper>
  )
}

export default Comments
