import { gql } from 'graphql-request'

export const GQL_FRAGMENT_GUESTREVIEW = gql`
  fragment guestReviewFrag on Guestreview {
    id
    title
    slug
    cover
    excerpt
    content
    createdAt
    updatedAt
    published_at
    user {
      id
      username
      email
    }
  }
`
