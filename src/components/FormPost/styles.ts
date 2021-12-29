import styled from 'styled-components'
import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.div``

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${ButtonStyles.Button} {
    width: 25%;
    min-width: 12rem;
    align-self: flex-end;
  }
`
