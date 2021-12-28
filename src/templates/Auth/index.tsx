import { Container } from 'components/Container'
import FormLogin from 'components/FormLogin'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { SettingsStrapi } from 'shared-typed/settings'
import BaseTemplate from 'templates/Base'
import * as S from './styles'

export type AuthTemplateProps = {
  setting: SettingsStrapi
}

const AuthTemplate = ({ setting }: AuthTemplateProps) => {
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (email: string, password: string) => {
    if (!email || !password) {
      setError('Preencha os campos corretamente')
      return
    }

    const response = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (!response.ok) {
      setError('Usuário e/ou senha inválidos')
      return
    }

    //LOGOU
    setError('')
    const redirect = router.query?.redirect || '/'
    router.push(redirect as string)
  }

  return (
    <BaseTemplate settings={setting}>
      <Container>
        <S.SectionContainer>
          <FormLogin onLogin={handleLogin} errorMessage={error} />
        </S.SectionContainer>
      </Container>
    </BaseTemplate>
  )
}

export default AuthTemplate
