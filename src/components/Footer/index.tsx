import HtmlContent from 'components/HtmlContent'
import * as S from './styles'

export type FooterProps = {
  footerHtml: string
}

const Footer = ({ footerHtml }: FooterProps) => (
  <S.Footer>
    <HtmlContent html={footerHtml} />
  </S.Footer>
)

export default Footer
