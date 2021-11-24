import styled, { css } from 'styled-components'

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: 1.8rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${theme.colors.secondary};
    }
  `}
`
