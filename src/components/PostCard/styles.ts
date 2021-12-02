import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'
import media, { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  smallMedium: '600px'
})

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: start;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacings.medium};

    ${customMedia.lessThan('smallMedium')`
      grid-template-columns: 1fr;
    `}

    ${HeadingStyles.Title} {
      color: ${theme.colors.darkText};
      margin-top: 0;
      margin-bottom: ${theme.spacings.small};
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: ${theme.colors.secondary};
      }
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
  transition: opacity 0.2s ease-in-out;
  overflow: hidden;

  &:hover {
    opacity: 0.8;
  }
`
export const Content = styled.div``

export const Info = styled.div`
  ${({ theme }) => css`
    opacity: 0.6;
    margin-bottom: ${theme.spacings.xsmall};
    display: flex;
    gap: ${theme.spacings.small};

    span {
      display: flex;
      align-items: center;
    }

    span > svg {
      margin-right: ${theme.spacings.xsmall};
    }

    ${media.lessThan('medium')`
      font-size: calc(${theme.font.sizes.xsmall} * 1.6);
    `}
  `}
`
export const Excerpt = styled.p`
  max-width: 100%;
`
