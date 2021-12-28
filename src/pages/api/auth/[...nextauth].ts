import { gqlClient } from 'graphql/client'
import { GQL_MUTATION_AUTHENTICATE_USER } from 'graphql/mutations/auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60 // 7 days
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 7 * 24 * 60 * 60
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'email@email.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const { login } = await gqlClient.request(
            GQL_MUTATION_AUTHENTICATE_USER,
            {
              email: credentials.email,
              password: credentials.password
            }
          )

          const { jwt, user } = login
          const { id, username, email } = user

          if (!jwt || !id || !username || !email) return null

          return {
            jwt,
            id,
            name: username,
            email
          }
        } catch (e) {
          console.log('LOGIN OU SENHA INVÁLIDOS')
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      const isSignIn = !!user
      // tem q ser a mesma expiração do strapi
      const actualDateInSeconds = Math.floor(Date.now() / 1000)
      const tokenExpirationInSeconds = Math.floor(7 * 24 * 60 * 60) // 7 dias

      if (isSignIn) {
        if (!user || !user.jwt || !user.name || !user.email || !user.id) {
          return Promise.resolve({})
        }

        token.jwt = user.jwt
        token.id = user.id
        token.name = user.name
        token.email = user.email

        token.expiration = Math.floor(
          actualDateInSeconds + tokenExpirationInSeconds
        )
      } else {
        if (!token?.expiration) return Promise.resolve({})
        if (actualDateInSeconds > token.expiration) return Promise.resolve({})

        console.log('USUARIO LOGADO', token)
      }

      return Promise.resolve(token)
    },
    async session({ session, token }) {
      if (
        !token?.jwt ||
        !token?.id ||
        !token?.expiration ||
        !token?.email ||
        !token?.name
      ) {
        return null
      }

      session.accessToken = token.jwt
      session.user = {
        name: token.name,
        email: token.email
      }

      return { ...session }
    }
  }
})
