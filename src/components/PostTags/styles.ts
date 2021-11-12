import styled, { css } from 'styled-components'

export const Wrapper = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

    span {
      margin-right: 0.5rem;
    }

    span:not(:last-child)::after {
      content: ', ';
    }

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.5);
      }
    }
  `}
`
