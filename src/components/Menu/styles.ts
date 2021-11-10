import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'
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
    max-width: 32rem;
    height: 100vh;
    top: 0;
    transition: all 0.3s ease-in-out;

    left: ${isMenuVisible ? '0' : '-30rem'};
    overflow-y: ${isMenuVisible ? 'auto' : 'hidden'};

    ${media.lessThan('medium')`
      left: ${isMenuVisible ? '0' : '-32rem'};
    `}
  `}
`

export const Nav = styled.nav`
  margin: auto;
  width: 100%;
`

export const Logo = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Title} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.xlarge};

      img {
        border: 0.5rem solid ${theme.colors.secondary};
      }
    }
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
    left: 0;
    color: ${theme.colors.white};

    ${isMenuVisible &&
    css`
      left: 26rem;
      color: ${theme.colors.secondary};
    `};
  `}
`
