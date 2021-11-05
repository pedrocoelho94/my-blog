import * as S from './styles'

export type TextComponentProps = {
  children: string
}

const TextComponent = ({ children }: TextComponentProps) => {
  return <S.Container dangerouslySetInnerHTML={{ __html: children }} />
}

export default TextComponent
