import { useSession } from 'next-auth/react'
import { frontEndRedirect } from 'utils/front-end-redirect'

export type PrivateComponentProps = {
  children: React.ReactNode
}

const PrivateComponent = ({ children }: PrivateComponentProps) => {
  const { data: session, status } = useSession()

  if (!session && status !== 'loading') {
    return frontEndRedirect()
  }

  if (typeof window !== 'undefined' && status === 'loading') {
    return null
  }

  if (!session) {
    return null
  }

  return children
}

export default PrivateComponent
