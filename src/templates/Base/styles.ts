import { Container } from 'components/Container'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Container)``

export const Header = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xhuge};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xhuge};
  `}
`

export const Footer = styled(Container)``
