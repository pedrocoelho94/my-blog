import { Container } from 'components/Container'
import Footer from 'components/Footer'
import GoTop from 'components/GoTop'
import Header from 'components/Header'
import Menu from 'components/Menu'
import { SettingsStrapi } from 'shared-typed/settings'
import * as S from './styles'

export type BaseTemplateProps = {
  settings: SettingsStrapi
  children: React.ReactNode
}

const BaseTemplate = ({ settings, children }: BaseTemplateProps) => (
  <S.Wrapper>
    <Menu
      links={settings.menuLink}
      blogName={settings.blogName}
      logo={settings.logo.url}
    />

    <S.Header>
      <Container>
        <Header
          blogName={settings.blogName}
          blogDescription={settings.blogDescription}
          logo={settings.logo.url}
        />
      </Container>
    </S.Header>

    <S.Content>{children}</S.Content>

    <S.Footer>
      <Footer footerHtml={settings.footer} />
    </S.Footer>

    <GoTop />
  </S.Wrapper>
)

export default BaseTemplate
