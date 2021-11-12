import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const NotFound = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    text-align: center;
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Grid = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacings.xhuge};
  `}
`
