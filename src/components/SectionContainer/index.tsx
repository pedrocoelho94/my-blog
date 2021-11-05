import * as S from './styles'

export type SectionContainerProps = {
  children: React.ReactNode
}

const SectionContainer = ({ children }: SectionContainerProps) => {
  return <S.Container>{children}</S.Container>
}

export default SectionContainer
