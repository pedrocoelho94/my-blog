import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ButtonWrapper = styled.div``

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    background: ${theme.colors.warning};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  `}
`
