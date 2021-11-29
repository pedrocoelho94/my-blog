import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 4rem;

  ${media.lessThan('large')`
    grid-template-columns: 1fr;
  `}
`

export const Main = styled.main``

export const Aside = styled.aside``

export const AsideTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    margin: 0;
  `}
`

export const AsideContent = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.huge};
  `}
`
