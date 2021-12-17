import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.small};

    ${media.lessThan('medium')`
      grid-template-columns: 1fr 1fr 1fr;
    `}

    ${media.lessThan('small')`
      grid-template-columns: 1fr;
    `}
  `}
`

export const Link = styled.a``

export const ContainerImage = styled.div`
  width: 100%;
  height: 120px;
  overflow: hidden;
  border-radius: 5px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`
