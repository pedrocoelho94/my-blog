import BaseTemplate from 'templates/Base'
import { loadPosts, StrapiPostAndSettings } from 'api/loadPosts'
import { GetStaticProps } from 'next'
import { Container } from 'components/Container'

export default function Page404({ setting }: StrapiPostAndSettings) {
  return (
    <BaseTemplate settings={setting}>
      <Container>
        <h1>404: Not Found</h1>
      </Container>
    </BaseTemplate>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let data: StrapiPostAndSettings | null = null

  data = await loadPosts()

  return {
    props: {
      setting: data.setting
    },
    revalidate: 24 * 60 * 60
  }
}
