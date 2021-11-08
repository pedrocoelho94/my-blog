import * as S from './styles'

export type HtmlContentProps = {
  html: string
}

const TextComponent = ({ html }: HtmlContentProps) => {
  return <S.Container dangerouslySetInnerHTML={{ __html: html }} />
}

export default TextComponent
