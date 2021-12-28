import { GetServerSideProps } from 'next'

export default function PerfilPage() {
  return (
    <>
      <h1>PERFIL PAGE</h1>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
