import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Content = styled.a`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    margin: ${theme.spacings.medium} 0;
  `}
`

export const Cover = styled.img`
  border-radius: 0.8rem;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: 1.5rem;
    height: 100%;
    margin: 0;
    color: ${theme.colors.darker};

    &:hover {
      text-decoration: underline;
    }
  `}
`
