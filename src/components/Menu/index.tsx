import { useRouter } from 'next/router'
import Link from 'next/link'

import * as S from './styles'
import MenuLink from 'components/MenuLink'
import { useState } from 'react'

import { Search } from '@styled-icons/material-outlined'

export type MenuPropsLinks = {
  id: string
  link: string
  newTab?: boolean
  text: string
}

export type MenuProps = {
  links: MenuPropsLinks[]
}

const Menu = ({ links = [] }: MenuProps) => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const [toggle, setToggleNav] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const url = encodeURI(searchValue)
    console.log(url)
    router.push(`/search/${url}`)
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.LogoContainer>
          <Link href="/" passHref>
            <a>
              <S.Logo src="/assets/images/claquete.png" />
            </a>
          </Link>
        </S.LogoContainer>

        <S.Menu role="navigation">
          {links.map((link) => (
            <S.Item key={`web-${link.id}`}>
              <MenuLink newTab={link.newTab} link={link.link}>
                {link.text}
              </MenuLink>
            </S.Item>
          ))}

          <S.SearchBox onSubmit={handleSearch}>
            <S.SearchInput
              type="search"
              placeholder="Buscar"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="search box"
            />
            <S.SearchButton>
              <Search size={16} />
            </S.SearchButton>
          </S.SearchBox>
        </S.Menu>

        <S.NavIcon
          onClick={() => setToggleNav(!toggle)}
          aria-hidden={!toggle}
          aria-label="open or close menu"
          title={toggle ? 'Fechar menu' : 'Abrir menu'}
        >
          <S.Line open={toggle} />
          <S.Line open={toggle} />
          <S.Line open={toggle} />
        </S.NavIcon>
      </S.Content>

      <S.Overlay open={toggle} aria-label="menu mobile" aria-hidden={!toggle}>
        <S.OverlayMenu open={toggle}>
          {links.map((link) => (
            <S.Item key={`mobile-${link.id}`}>
              <MenuLink newTab={link.newTab} link={link.link}>
                {link.text}
              </MenuLink>
            </S.Item>
          ))}
        </S.OverlayMenu>
      </S.Overlay>
    </S.Wrapper>
  )
}

export default Menu
