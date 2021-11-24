import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.large} auto;
  `}
`
