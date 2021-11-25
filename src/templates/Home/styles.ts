import styled, { css } from 'styled-components'

export const SectionContainer = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.xhuge} 0;
  `}
`
