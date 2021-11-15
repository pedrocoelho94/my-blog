import Head from 'next/head'
import PostsTemplate from 'templates/PostsTemplate'
import { loadPosts, StrapiPostAndSettings } from 'api/loadPosts'
import { GetStaticProps } from 'next'

export default function Home({ posts, setting }: StrapiPostAndSettings) {
  return (
    <>
      <Head>
        <title>{setting.blogName}</title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate settings={setting} posts={posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> =
  async () => {
    let data = null

    try {
      data = await loadPosts()
    } catch (e) {
      data = null
    }

    if (!data || !data.posts || !data.posts.length) {
      return {
        notFound: true
      }
    }

    return {
      revalidate: 24 * 60 * 60,
      props: {
        posts: data.posts,
        setting: data.setting
      }
    }
  }
