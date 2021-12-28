import { gql } from 'graphql-request'

export const GQL_FRAGMENT_GUESTREVIEW = gql`
  fragment guestReviewFrag on Guestreview {
    id
    title
    excerpt
    createdAt
    updatedAt
    user {
      id
      username
      email
    }
  }
`
