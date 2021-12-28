import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import * as MenuLinkStyles from 'components/MenuLink/styles'
import { Container } from 'components/Container'

type OpenProps = {
  open: boolean
}

type SizeBarProps = {
  isAtTop: boolean
}

export const Wrapper = styled.div<SizeBarProps>`
  ${({ theme, isAtTop }) => css`
    z-index: 9;
    width: 100%;
    height: 8rem;
    background: ${theme.colors.primary};
    position: fixed;
    transition: height 0.2s ease-in-out;

    ${!isAtTop &&
    `
    height: 6rem;
    `}
  `}

  ${media.lessThan('medium')`
    height: 7rem;

  `}
`

export const Content = styled(Container)`
  ${({ theme }) => css`
    width: 100%;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
    padding-top: calc(${theme.spacings.xsmall} * 0.8);
    padding-bottom: calc(${theme.spacings.xsmall} * 0.8);

    ${media.lessThan('medium')`
      padding-top: ${theme.spacings.xsmall};
      padding-bottom: ${theme.spacings.xsmall};
    `}
  `}
`

export const LogoContainer = styled.div`
  height: 100%;
`

export const Logo = styled.img`
  height: 100%;
`

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;

  ${media.lessThan('medium')`
      display: none;
    `}
`

export const Item = styled.li``

export const NavIcon = styled.li`
  list-style: none;
  background: none;
  cursor: pointer;

  ${media.greaterThan('medium')`
      display: none;
    `}
`

export const Line = styled.span<OpenProps>`
  ${({ theme, open }) => css`
    display: block;
    border-radius: 50px;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: ${theme.colors.white};
    transition: width 0.2s ease-in-out;

    :nth-child(2) {
      width: ${open ? '35%' : '70%'};
    }

    :nth-child(3) {
      width: ${open ? '55%' : '70%'};
    }
  `}
`

const overlayModifiers = {
  open: (theme: DefaultTheme) => css`
    height: calc(100vh - 7rem);

    ${MenuLinkStyles.Container} {
      ${media.lessThan('medium')`
        border-bottom: 2px solid transparent;
      `}

      &:hover {
        color: ${theme.colors.white};
        border-bottom: 2px solid ${theme.colors.white};
      }
    }
  `
}

export const Overlay = styled.div<OpenProps>`
  ${({ theme, open }) => css`
    position: absolute;
    width: 100vw;
    height: 0;
    background-color: ${theme.colors.secondary};
    transition: height 0.3s ease-in-out;
    z-index: 2;

    ${open && overlayModifiers.open(theme)}

    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`

export const OverlayMenu = styled.ul<OpenProps>`
  ${({ open }) => css`
    list-style: none;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 5rem;

    li {
      pointer-events: ${open ? 'initial' : 'none'};
      opacity: ${open ? 1 : 0};
      transition: opacity 0.3s ease-in-out;

      a {
        font-size: 2.4rem;
      }
    }
  `}
`

export const SearchBox = styled.form`
  display: flex;
  border-radius: 5px;
`

export const SearchLabel = styled.label`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
`

export const SearchInput = styled.input`
  ${({ theme }) => css`
    outline: none;
    border: none;
    height: 3.5rem;
    width: 12rem;
    padding: 0 ${theme.spacings.xsmall};
    z-index: 1;
    position: relative;
    transition: width 0.2s ease-in-out;
    border-radius: 5px 0px 0px 5px;
    font-size: 1.6rem;

    &:focus {
      width: 20rem;
    }
  `}
`
export const SearchButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    height: 3.5rem;
    border: none;
    border-radius: 0px 5px 5px 0px;
    width: 3.5rem;
    padding: ${theme.spacings.xsmall};
    transition: all 0.2s ease-in-out;
    background-color: ${theme.colors.white};
    color: ${theme.colors.secondary};

    &:hover {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.white};
      border: none;
    }
  `}
`

export const SearchBoxMobile = styled.form<OpenProps>`
  ${({ theme, open }) => css`
    display: none;
    opacity: 0;
    transition: opacity 3s ease-in-out;
    border-bottom: 1px solid white;

    ${!!open &&
    `
      opacity: 1;
      display: initial;
    `}

    ${SearchButton},
    ${SearchInput} {
      border: none;
      background: transparent;
      border-radius: 0;
      color: ${theme.colors.white};
      font-size: 1.8rem;
    }

    ${SearchInput} {
      &::placeholder {
        color: ${theme.colors.white};
      }
    }
  `}
`
export const Dropbtn = styled.div`
  padding: 1.4rem 0;
`

export const DropdownContent = styled.div`
  ${({ theme }) => css`
    display: none;
    position: absolute;
    background-color: ${theme.colors.white};
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    a {
      color: ${theme.colors.primary};
      padding: 1.2rem 1.6rem;

      &:hover {
        background-color: ${theme.colors.gray2};
      }
    }
  `}
`
export const Dropdown = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    &:hover {
      color: ${theme.colors.secondary};
    }
    &:hover ${DropdownContent} {
      display: block;
    }
  `}
`
