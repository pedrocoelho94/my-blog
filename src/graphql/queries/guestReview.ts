import { gql } from 'graphql-request'
import { GQL_FRAGMENT_GUESTREVIEW } from 'graphql/fragments/guestReview'

export const GQL_QUERY_GET_GUESTREVIEWS = gql`
  ${GQL_FRAGMENT_GUESTREVIEW}

  query GET_GUESTREVIEWS {
    guestreviews(sort: "id:DESC") {
      ...guestReviewFrag
    }
  }
`
export const GQL_QUERY_GET_GUESTREVIEW = gql`
  ${GQL_FRAGMENT_GUESTREVIEW}

  query GET_GUESTREVIEW($id: ID!) {
    guestreview(id: $id) {
      ...guestReviewFrag
    }
  }
`
