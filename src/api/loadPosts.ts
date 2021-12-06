import config from 'config'
import { request } from 'graphql-request'
import { GRAPHQL_QUERY } from 'graphql/queries'
import { PostStrapi } from 'shared-typed/postStrapi'
import { SettingsStrapi } from 'shared-typed/settings'

export type LoadPostsVariables = {
  categorySlug?: string
  postSlug?: string
  postSearch?: string
  authorSlug?: string
  tagSlug?: string
  sort?: string
  start?: number
  limit?: number
}

export type StrapiPostAndSettings = {
  setting: SettingsStrapi
  posts: PostStrapi[]
  postsReviews?: PostStrapi[]
  variables?: LoadPostsVariables
}

export const defaultLoadPostsVariables: LoadPostsVariables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 10
}

export const loadPosts = async (
  variables: LoadPostsVariables = {}
): Promise<StrapiPostAndSettings> => {
  const data = await request(config.graphqlURL, GRAPHQL_QUERY, {
    ...defaultLoadPostsVariables,
    ...variables
  })

  return data
}
