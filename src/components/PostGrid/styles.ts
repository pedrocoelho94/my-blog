import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as PostCardStyles from 'components/PostCard/styles'

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

type twoColumnsProps = {
  twoColumns: boolean
}

export const Grid = styled.div<twoColumnsProps>`
  ${({ theme, twoColumns }) => css`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacings.xhuge};

    ${media.greaterThan('medium')`
      ${
        twoColumns &&
        `
        grid-template-columns: 1fr 1fr;

        ${PostCardStyles.Wrapper}{
          display: grid;
          grid-template-columns: 1fr;
        }
        `
      }
    `}

    ${media.greaterThan('large')`
      ${
        twoColumns &&
        `
        grid-template-columns: 1fr 1fr 1fr;
      `
      }
    `}
  `}
`
