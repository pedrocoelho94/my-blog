import Head from 'next/head'

import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostAndSettings
} from 'api/loadPosts'
import { GetStaticProps } from 'next'
import HomePage, { HomeTemplateProps } from 'templates/Home'
import { loadSponsors } from 'api/loadSponsors'

export default function Home({
  posts,
  postsReviews,
  setting,
  variables,
  sponsors
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
        sponsors={sponsors}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  StrapiPostAndSettings
> = async () => {
  let data = null
  let sponsors = null
  let dataReviews = null

  try {
    sponsors = await loadSponsors()
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
      },
      sponsors: sponsors
    }
  }
}
