import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;

  ${media.lessThan('large')`
    grid-template-columns: 1fr;
  `}
`
export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    margin: ${theme.spacings.large} 0;
    display: flex;
    justify-content: center;
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    padding: ${theme.spacings.small} ${theme.spacings.large};
    cursor: pointer;

    &:disabled {
      background: ${theme.colors.darkerGray};
    }
  `}
`
