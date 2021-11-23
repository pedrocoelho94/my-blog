import config from 'config'
import request from 'graphql-request'
import { defaultLoadPostsVariables, loadPosts } from './loadPosts'

jest.mock('graphql-request')

jest.mock('graphql/queries', () => {
  return {
    GRAPHQL_QUERY: 'QUERY'
  }
})

describe('<loadPosts />', () => {
  it('should call requests with default variables', async () => {
    await loadPosts()

    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      'QUERY',
      defaultLoadPostsVariables
    )
  })

  it('should call requests with custom variables', async () => {
    await loadPosts({
      authorSlug: 'OK'
    })

    expect(request).toHaveBeenCalledWith(config.graphqlURL, 'QUERY', {
      ...defaultLoadPostsVariables,
      authorSlug: 'OK'
    })
  })
})
