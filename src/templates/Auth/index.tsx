import { Container } from 'components/Container'
import Button from 'components/Button'
import FormLogin from 'components/FormLogin'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { SettingsStrapi } from 'shared-typed/settings'
import BaseTemplate from 'templates/Base'
import * as S from './styles'

export type AuthTemplateProps = {
  setting: SettingsStrapi
}

const AuthTemplate = ({ setting }: AuthTemplateProps) => {
  const { data: session } = useSession()
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
  const handleLoginGoogle = async () => {
    await signIn('google', { callbackUrl: '/' })
  }

  if (session) {
    router.push('/')
  }

  return (
    <BaseTemplate settings={setting}>
      <Container>
        <S.SectionContainer>
          {session ? (
            'Você já está logado, redirecionando...'
          ) : (
            <>
              <S.SectionLogin>
                <p>Faça o login</p>
                <FormLogin onLogin={handleLogin} errorMessage={error} />
                <br />
                <Button onClick={handleLoginGoogle}>Login com Google</Button>
              </S.SectionLogin>

              <S.SectionNewAcc>
                <p>Crie sua conta</p>
                <FormLogin onLogin={handleLogin} errorMessage={error} />
              </S.SectionNewAcc>
            </>
          )}
        </S.SectionContainer>
      </Container>
    </BaseTemplate>
  )
}

export default AuthTemplate
