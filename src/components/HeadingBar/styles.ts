import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-weight: bold;
    padding: ${theme.spacings.xsmall};
    border-radius: 5px;

    svg {
      height: 22px;
    }
  `}
`
