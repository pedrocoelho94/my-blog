import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: grid;
    grid-template-columns: 1fr 1fr;

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
    `}
  `}
`
