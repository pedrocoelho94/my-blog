import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled(Container)`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 4rem;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    a {
      color: ${theme.colors.secondary};

      &:hover {
        filter: brightness(1.5);
      }
    }

    .contact > div {
      display: flex;
      gap: 1rem;
    }
  `}
`

export const Info = styled.p``

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
