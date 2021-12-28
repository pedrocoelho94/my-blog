import Footer from 'components/Footer'
import GoTop from 'components/GoTop'
import Menu from 'components/Menu'
import ToggleTheme from 'components/ToggleTheme'
// import { useRouter } from 'next/dist/client/router'
// import { useState, useRef, useEffect } from 'react'
import { SettingsStrapi } from 'shared-typed/settings'

import * as S from './styles'

//import { useSession } from 'next-auth/react'

export type BaseTemplateProps = {
  settings: SettingsStrapi
  children: React.ReactNode
}

const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  //const { data: session } = useSession()

  //console.log('SESSÃO', session)

  return (
    <S.Wrapper>
      <ToggleTheme />

      <Menu links={settings.menuLink} />

      <S.Content>{children}</S.Content>

      <S.Footer>
        <Footer footerHtml={settings.footer} />
      </S.Footer>

      <GoTop />
    </S.Wrapper>
  )
}

export default BaseTemplate
