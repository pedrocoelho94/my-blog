import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`
export const Greetings = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.huge};
  `}
`
