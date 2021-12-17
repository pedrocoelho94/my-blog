import * as S from './styles'
import { DiscussionEmbed } from 'disqus-react'

export type CommentsProps = {
  id: string
  slug: string
  category: string
  title: string
  allowComments: boolean
}

const Comments = ({
  id,
  slug,
  title,
  allowComments,
  category
}: CommentsProps) => {
  if (!allowComments) return null

  const config = {
    url: `https://claquete.vercel.app/${category}/${slug}`,
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
