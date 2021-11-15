import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'
import MenuLink from 'components/MenuLink'
import { useState } from 'react'

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
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const handleOpenCloseMenu = (event: React.MouseEvent) => {
    event.preventDefault()
    setIsMenuVisible(!isMenuVisible)
  }

  return (
    <S.Wrapper isMenuVisible={isMenuVisible}>
      <S.OpenClose
        isMenuVisible={isMenuVisible}
        href="#"
        aria-label="Open or close menu"
        title={isMenuVisible ? 'Close menu' : 'Open menu'}
        onClick={handleOpenCloseMenu}
      >
        {isMenuVisible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </S.OpenClose>

      <S.Content isMenuVisible={isMenuVisible} aria-hidden={!isMenuVisible}>
        <S.Nav>
          {links.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </S.Nav>
      </S.Content>
    </S.Wrapper>
  )
}

export default Menu
