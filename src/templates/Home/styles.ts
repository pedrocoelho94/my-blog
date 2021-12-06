import styled, { css } from 'styled-components'

export const SectionContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin: ${theme.spacings.xhuge} 0; ;
  `}
`
