import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import * as MenuLinkStyles from 'components/MenuLink/styles'
import { Container } from 'components/Container'

type OpenProps = {
  open: boolean
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    z-index: 9;
    width: 100%;
    height: 8rem;
    background: ${theme.colors.primary};
    position: fixed;

    ${media.lessThan('medium')`
      height: 7rem;
    `}
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
  border: none;

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
    transition: height 0.4s ease-in-out;
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
      transition: opacity 0.4s ease-in-out;
    }
  `}
`

export const SearchBox = styled.form`
  display: flex;

  &:focus {
    -webkit-box-shadow: 0px 0px 15px 8px rgba(220, 20, 60, 0.67);
    box-shadow: 0px 0px 15px 8px rgba(220, 20, 60, 0.67);
  }
`

export const SearchInput = styled.input`
  ${({ theme }) => css`
    border: none;
    border-radius: 5px 0 0 5px;
    height: 3rem;
    width: 12rem;
    padding: ${theme.spacings.xsmall};
    transition: width 0.2s ease-in-out;
    outline: none;

    &:focus {
      width: 20rem;
      -webkit-box-shadow: 0px 0px 15px 8px rgba(220, 20, 60, 0.67);
      box-shadow: 0px 0px 15px 8px rgba(220, 20, 60, 0.67);
    }
  `}
`
export const SearchButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    border: none;
    border-radius: 0 5px 5px 0;
    outline: none;
    height: 3rem;
    padding: ${theme.spacings.xsmall};
    transition: all 0.2s ease-in-out;
    background-color: ${theme.colors.white};
    border-left: 1px solid ${theme.colors.mediumGray};

    &:hover {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.white};
    }

    &:focus {
      -webkit-box-shadow: 0px 0px 15px 8px rgba(220, 20, 60, 0.67);
      box-shadow: 0px 0px 15px 8px rgba(220, 20, 60, 0.67);
    }
  `}
`
