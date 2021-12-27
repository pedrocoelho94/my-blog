/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Button = styled.button<Pick<ButtonProps, 'color'>>`
  ${({ theme, color }) => css`
    background: ${theme.colors[color!]};
    border: none;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    padding: 1.2rem ${theme.spacings.medium};
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
      outline: none;
      box-shadow: 0 0 ${theme.spacings.xsmall} ${theme.colors[color!]};
      filter: brightness(110%);
    }

    &:hover {
      filter: brightness(90%);
    }

    &:disabled {
      background: ${theme.colors.mediumGray};
      color: ${theme.colors.lightGray};
      cursor: not-allowed;

      &:hover {
        filter: none;
      }
    }

    > svg {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
    }
  `}
`
