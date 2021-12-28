import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    margin-top: 3rem;
    margin-bottom: ${theme.spacings.huge};

    ${media.lessThan('medium')`
      margin-top: 1.6rem;
      margin-bottom: ${theme.spacings.huge};
    `}
  `}
`
