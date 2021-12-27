import TextInput from 'components/TextInput'
import { Email } from '@styled-icons/material-outlined'
import { Password } from '@styled-icons/material-outlined'
import React, { useState } from 'react'
import * as S from './styles'
import Button from 'components/Button'

export type FormLoginProps = {
  errorMessage?: string
  onLogin?: (email: string, password: string) => Promise<void>
}

const FormLogin = ({ errorMessage, onLogin }: FormLoginProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true)
    event.preventDefault()

    if (onLogin) {
      await onLogin(email, password)
    }

    setLoading(false)
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <TextInput
        name="user-identifier"
        label="Seu e-mail"
        onInputChange={(value) => setEmail(value)}
        value={email}
        icon={<Email />}
        type="email"
      />
      <TextInput
        name="user-password"
        label="Sua senha"
        type="password"
        onInputChange={(value) => setPassword(value)}
        value={password}
        icon={<Password />}
      />

      {!!errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}

      <S.ButtonWrapper>
        <Button disabled={loading}>{loading ? 'Aguarde...' : 'Entrar'}</Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default FormLogin
