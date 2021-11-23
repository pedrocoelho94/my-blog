import { Container } from 'components/Container'
import Footer from 'components/Footer'
import GoTop from 'components/GoTop'
import Header from 'components/Header'
import Menu from 'components/Menu'
import ToggleTheme from 'components/ToggleTheme'
import { useRouter } from 'next/dist/client/router'
import { useState, useRef, useEffect } from 'react'
import { SettingsStrapi } from 'shared-typed/settings'

import { Cancel, CheckCircleOutline } from '@styled-icons/material-outlined'
import * as S from './styles'

export type BaseTemplateProps = {
  settings: SettingsStrapi
  children: React.ReactNode
}

const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState(router?.query?.q || '')
  const [isSearchDisabled, setIsSearchDisabled] = useState(true)
  const [isReady, setIsReady] = useState(true)
  const inputTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isReady) {
      setIsSearchDisabled(false)
    } else {
      setIsSearchDisabled(true)
    }
  }, [isReady])

  useEffect(() => {
    inputTimeout.current && clearTimeout(inputTimeout.current)

    if (router?.query?.q === searchValue) return

    const q = searchValue

    if (!q || q.length < 3) return

    inputTimeout.current = setTimeout(() => {
      setIsReady(false)
      router
        .push({
          pathname: '/search/',
          query: { q }
        })
        .then(() => setIsReady(true))
    }, 600)

    return () => {
      inputTimeout.current && clearTimeout(inputTimeout.current)
    }
  }, [searchValue, router])

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
          <S.SearchInput
            type="search"
            placeholder="O que você procura?"
            name="q"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            disabled={isSearchDisabled}
          />
          {isSearchDisabled ? (
            <Cancel className="searchCancelIcon" aria-label="input disabled" />
          ) : (
            <CheckCircleOutline
              className="searchOkIcon"
              aria-label="input enabled"
            />
          )}
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
