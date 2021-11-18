import { Container } from 'components/Container'
import Footer from 'components/Footer'
import GoTop from 'components/GoTop'
import Header from 'components/Header'
import Menu from 'components/Menu'
import ToggleTheme from 'components/ToggleTheme'
import { useRouter } from 'next/dist/client/router'
import { SettingsStrapi } from 'shared-typed/settings'
import * as S from './styles'

export type BaseTemplateProps = {
  settings: SettingsStrapi
  children: React.ReactNode
}

const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <ToggleTheme />

      <Menu links={settings.menuLink} />

      <S.Header>
        <Container>
          <Header
            blogName={settings.blogName}
            blogDescription={settings.blogDescription}
            logo={settings.logo.url}
          />
        </Container>

        <S.SearchContainer>
          <form action="/search/" method="GET">
            <S.SearchInput
              type="search"
              placeholder="O que você procura?"
              name="q"
              defaultValue={router?.query.q}
            />
          </form>
        </S.SearchContainer>
      </S.Header>

      <S.Content>{children}</S.Content>

      <S.Footer>
        <Footer footerHtml={settings.footer} />
      </S.Footer>

      <GoTop />
    </S.Wrapper>
  )
}

export default BaseTemplate
