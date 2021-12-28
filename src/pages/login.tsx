import { loadPosts } from 'api/loadPosts'
import { GetServerSideProps } from 'next'
import AuthTemplate, { AuthTemplateProps } from 'templates/Auth'

export default function LoginPage({ setting }: AuthTemplateProps) {
  return (
    <>
      <AuthTemplate setting={setting} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { setting } = await loadPosts()

  return {
    props: {
      setting: setting
    }
  }
}
