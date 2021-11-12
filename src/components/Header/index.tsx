import Heading from 'components/Heading'
import LogoLink from 'components/LogoLink'
import * as S from './styles'

export type HeaderProps = {
  blogName: string
  blogDescription: string
  logo: string
  showText?: boolean
}

const Header = ({
  blogName,
  blogDescription,
  logo,
  showText = true
}: HeaderProps) => (
  <S.Wrapper>
    <LogoLink link="/" srcImg={logo} text={`${blogName} Blog`} />

    {showText && (
      <S.Content>
        <Heading size="small" as="h2" colorDark={true}>
          {blogName}
        </Heading>
        <S.Description>{blogDescription}</S.Description>
      </S.Content>
    )}
  </S.Wrapper>
)

export default Header
