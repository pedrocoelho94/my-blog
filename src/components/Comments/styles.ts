import { Container } from 'components/Container'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.large} auto;
  `}
`
