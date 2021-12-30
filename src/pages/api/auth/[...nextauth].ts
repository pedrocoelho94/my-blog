import { gqlClient } from 'graphql/client'
import { GQL_MUTATION_AUTHENTICATE_USER } from 'graphql/mutations/auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

type NextAuthSession = Record<string, unknown>

const actualDateInSeconds = Math.floor(Date.now() / 1000)
// tem q ser a mesma expiração do strapi
const tokenExpirationInSeconds = Math.floor(7 * 24 * 60 * 60) // 7 dias

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

          // const { jwt, user } = login
          // const { id, username, email } = user

          // if (!jwt || !id || !username || !email) return null

          // return {
          //   jwt,
          //   id,
          //   name: username,
          //   email
          // }
          return login
        } catch (e) {
          return null
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      const isSignIn = !!user

      if (isSignIn) {
        if (account && account.provider === 'google') {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/google/callback?access_token=${account?.access_token}`
          )

          const data = await response.json()
          token = setToken(data)
        } else {
          token = setToken(user)
        }
      } else {
        if (!token?.expiration) return Promise.resolve({})
        if (actualDateInSeconds > token.expiration) return Promise.resolve({})
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setToken = (data: any): NextAuthSession => {
  if (!data || !data?.user || !data?.jwt) return {}

  return {
    jwt: data.jwt,
    id: data.user.id,
    name: data.user.username,
    email: data.user.email,
    expiration: actualDateInSeconds + tokenExpirationInSeconds
  }
}
