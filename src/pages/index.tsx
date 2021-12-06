import Head from 'next/head'

import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostAndSettings
} from 'api/loadPosts'
import { GetStaticProps } from 'next'
import HomePage, { HomeTemplateProps } from 'templates/Home'

export default function Home({
  posts,
  postsReviews,
  setting,
  variables
}: HomeTemplateProps) {
  return (
    <>
      <Head>
        <title>{setting.blogName} - Home</title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <HomePage
        posts={posts}
        postsReviews={postsReviews}
        setting={setting}
        variables={variables}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  StrapiPostAndSettings
> = async () => {
  let data = null
  let dataReviews = null

  try {
    data = await loadPosts()
    dataReviews = await loadPosts({
      limit: 8,
      categorySlug: 'reviews'
    })
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
      postsReviews: dataReviews?.posts,
      setting: data.setting,
      variables: {
        ...defaultLoadPostsVariables
      }
    }
  }
}
