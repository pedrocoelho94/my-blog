import { useRouter } from 'next/router'
import Link from 'next/link'

import * as S from './styles'
import MenuLink from 'components/MenuLink'
import { useEffect, useRef, useState } from 'react'

import { Search } from '@styled-icons/material-outlined'

import { signOut, useSession } from 'next-auth/react'

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
  const { data: session } = useSession()

  const router = useRouter()
  const [isAtTop, setIsAtTop] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [toggle, setToggleNav] = useState(false)
  const searchBarRef = useRef<HTMLInputElement>(null)

  // Diminui o tamanho do menu depois de descer 300px
  const changeHeightBar = () => {
    if (window.pageYOffset > 300) {
      setIsAtTop(false)
    } else {
      setIsAtTop(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeHeightBar)

    return () => {
      window.removeEventListener('scroll', changeHeightBar)
    }
  }, [])

  useEffect(() => {
    setSearchValue('')
    setToggleNav(false)
    searchBarRef.current?.blur()
  }, [router?.query.slug])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (router.query.slug === searchValue) {
      setSearchValue('')
      setToggleNav(false)
    }
    router.push(`/search/${encodeURI(searchValue)}`)
  }

  const handleClick = () => {
    setToggleNav(false)
  }

  const handleClickLogin = (event: React.MouseEvent) => {
    event.preventDefault()
    signOut({ redirect: false })
  }

  return (
    <S.Wrapper isAtTop={isAtTop} aria-label="navbar">
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

          {session ? (
            <S.Dropdown>
              <S.Dropbtn>
                <MenuLink link="#">{session.user.name}</MenuLink>
              </S.Dropbtn>
              <S.DropdownContent>
                <MenuLink link="/profile">Perfil</MenuLink>
                <MenuLink link="/profile/posts">Meus Posts</MenuLink>
                <MenuLink link="/profile/create-post">Novo Post</MenuLink>
                <div onClick={handleClickLogin}>
                  <MenuLink link="#">Sair</MenuLink>
                </div>
              </S.DropdownContent>
            </S.Dropdown>
          ) : (
            <MenuLink link="/login">Login</MenuLink>
          )}

          <S.SearchBox onSubmit={handleSearch} role="search">
            <S.SearchLabel htmlFor="search">Buscar</S.SearchLabel>
            <S.SearchInput
              id="search"
              placeholder="Buscar..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="search box"
              ref={searchBarRef}
            />
            <S.SearchButton type="submit">
              <Search size={22} />
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
              <div onClick={handleClick} aria-label="closeMenuDiv">
                <MenuLink newTab={link.newTab} link={link.link}>
                  {link.text}
                </MenuLink>
              </div>
            </S.Item>
          ))}

          <S.SearchBoxMobile onSubmit={handleSearch} open={toggle}>
            <S.SearchLabel htmlFor="searchMobile">Buscar</S.SearchLabel>
            <S.SearchInput
              id="searchMobile"
              placeholder="Buscar"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="search box"
            />
            <S.SearchButton type="submit">
              <Search size={24} />
            </S.SearchButton>
          </S.SearchBoxMobile>
        </S.OverlayMenu>
      </S.Overlay>
    </S.Wrapper>
  )
}

export default Menu
