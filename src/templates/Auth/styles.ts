import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionContainer = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacings.huge};
    margin-top: 3rem;
    margin-bottom: ${theme.spacings.huge};

    ${media.lessThan('medium')`
      margin-top: 1.6rem;
      margin-bottom: ${theme.spacings.huge};
      grid-template-columns: 1fr;
    `}
  `}
`
export const SectionLogin = styled.div``

export const SectionNewAcc = styled.div``
