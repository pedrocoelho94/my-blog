import styled, { css } from 'styled-components'

import * as HeadingBarStyles from 'components/HeadingBar/styles'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${HeadingBarStyles.Wrapper} {
      margin-top: ${theme.spacings.huge};
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;

    ${media.lessThan('medium')`
      grid-template-columns: repeat(2, 1fr);
    `}

    ${media.lessThan('small')`
      grid-template-columns: 1fr;
    `}

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        color: ${theme.colors.primary};
      }
    }
  `}
`

export const ContentItem = styled.div`
  width: 100%;
`

export const ContainerCover = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  max-width: 100%;
`
export const Cover = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 5px;
`

export const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: normal;
`
