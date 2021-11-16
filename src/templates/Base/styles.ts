import { Container } from 'components/Container'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    min-height: 100vh;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.white};

    -webkit-box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.1);
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xhuge};
  `}
`

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.large};
    max-width: 120rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
export const SearchInput = styled.input`
  ${({ theme }) => css`
    padding: 0.5rem ${theme.spacings.small};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xhuge};
    flex: 1 0 auto;
  `}
`

export const Footer = styled(Container)``
