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
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: ${theme.spacings.medium};

    ${media.lessThan('medium')`
      grid-template-columns: repeat(2, 1fr);
      row-gap: calc(${theme.spacings.medium} * 1.4);
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
  ${({ theme }) => css`
    width: 100%;

    a {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.xsmall};
    }
  `}
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
  font-weight: normal;
  font-size: 1.5rem;

  ${media.lessThan('medium')`
      font-size: 1.8rem;
  `}
`
