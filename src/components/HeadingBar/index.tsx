import * as S from './styles'

export type HeadingBarProps = {
  children: React.ReactNode
  icon?: React.ReactNode
}

const HeadingBar = ({
  children = 'Insira um texto aqui',
  icon
}: HeadingBarProps) => (
  <S.Wrapper>
    {icon} {children}
  </S.Wrapper>
)

export default HeadingBar
