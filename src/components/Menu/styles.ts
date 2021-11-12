import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type MenuBehavior = {
  isMenuVisible: boolean
}

export const Wrapper = styled.main<MenuBehavior>`
  ${({ theme, isMenuVisible }) => css`
    background: ${theme.colors.primary};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 26rem;
    height: 100vh;
    top: 0;
    transition: all 0.3s ease-in-out;

    left: ${isMenuVisible ? '0' : '-24rem'};
    overflow-y: ${isMenuVisible ? 'auto' : 'hidden'};

    ${media.lessThan('medium')`
      left: ${isMenuVisible ? '0' : '-26rem'};
    `}
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} auto;
    width: 100%;
  `}
`

export const OpenClose = styled.a<MenuBehavior>`
  ${({ theme, isMenuVisible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    background: ${theme.colors.primary};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    transition: all 0.3s ease-in-out;
    left: 0.5rem;
    top: 2rem;
    color: ${theme.colors.white};

    ${!isMenuVisible &&
    css`
      ${media.lessThan('medium')`
        left: 0rem;
      `}
    `}

    ${isMenuVisible &&
    css`
      left: 21rem;
      color: ${theme.colors.secondary};
    `};
  `}
`
