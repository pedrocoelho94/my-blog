import TextComponent from 'components/TextComponent'
import * as S from './styles'

export type FooterProps = {
  footerHtml: string
}

const Footer = ({ footerHtml }: FooterProps) => (
  <S.Footer>
    <TextComponent>{footerHtml}</TextComponent>
  </S.Footer>
)

export default Footer
