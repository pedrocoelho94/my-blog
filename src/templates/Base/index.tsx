import { Container } from 'components/Container'
import Footer from 'components/Footer'
import GoTop from 'components/GoTop'
import Menu from 'components/Menu'
import ToggleTheme from 'components/ToggleTheme'
// import { useRouter } from 'next/dist/client/router'
// import { useState, useRef, useEffect } from 'react'
import { SettingsStrapi } from 'shared-typed/settings'

import * as S from './styles'

export type BaseTemplateProps = {
  settings: SettingsStrapi
  children: React.ReactNode
}

const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <ToggleTheme />

      <Menu links={settings.menuLink} />

      <Container>
        <S.Content>{children}</S.Content>
      </Container>

      <S.Footer>
        <Footer footerHtml={settings.footer} />
      </S.Footer>

      <GoTop />
    </S.Wrapper>
  )
}

export default BaseTemplate
