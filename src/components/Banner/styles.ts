import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;
`

export const Content = styled.div`
  filter: brightness(0.95);
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.2);
  }
`

type imgProps = {
  src: string
}

export const Image = styled.div<imgProps>`
  ${({ src }) => css`
    width: 100%;
    height: 30rem;
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('small')`
      height: 40rem;
    `}

    ${media.greaterThan('medium')`
      height: 45rem;
    `}
  `}
`
export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.medium};
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: 0;
    left: 0;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-top: 0;
    color: ${theme.colors.white};

    ${media.lessThan('small')`
      font-size: 2rem;
      margin-bottom: 0;
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-weight: inherit;
    margin-bottom: 0;
    color: ${theme.colors.white};

    ${media.lessThan('small')`
      display: none
    `}
  `}
`
