import Head from 'next/head'

import { loadPosts } from 'api/loadPosts'
import { GetStaticProps } from 'next'
import AboutTemplatePage, { AboutProps } from 'templates/AboutTemplate'

export default function AboutPage({ setting, posts }: AboutProps) {
  return (
    <>
      <Head>
        <title> {setting.blogName} - About</title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <AboutTemplatePage setting={setting} posts={posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  let data = null

  try {
    data = await loadPosts({ limit: 5 })
  } catch (e) {
    data = null
  }

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true
    }
  }

  return {
    revalidate: 24 * 60 * 60 * 30, // 30 dias
    props: {
      setting: data.setting,
      posts: data.posts
    }
  }
}
