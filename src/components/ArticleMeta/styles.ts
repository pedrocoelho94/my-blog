import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkerGray};
    font-style: italic;

    .categories span:not(:last-child):after {
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
