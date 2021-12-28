import { gql } from 'graphql-request'
import { GQL_FRAGMENT_GUESTREVIEW } from 'graphql/fragments/guestReview'

export const GQL_MUTATION_UPDATE_GUESTREVIEW = gql`
  ${GQL_FRAGMENT_GUESTREVIEW}

  mutation UPDATE_GUESTREVIEW($id: ID!, $title: String, $excerpt: String) {
    updateGuestreview(
      input: { where: { id: $id }, data: { title: $title, excerpt: $excerpt } }
    ) {
      guestreview {
        ...guestReviewFrag
      }
    }
  }
`

export const GQL_MUTATION_CREATE_GUESTREVIEW = gql`
  ${GQL_FRAGMENT_GUESTREVIEW}

  mutation CREATE_GUESTREVIEW($title: String!, $excerpt: String!) {
    createGuestreview(input: { data: { title: $title, excerpt: $excerpt } }) {
      guestreview {
        ...guestReviewFrag
      }
    }
  }
`

export const GQL_MUTATION_DELETE_GUESTREVIEW = gql`
  ${GQL_FRAGMENT_GUESTREVIEW}

  mutation DELETE_GUESTREVIEWS($id: ID!) {
    deleteGuestreview(input: { where: { id: $id } }) {
      guestreview {
        ...guestReviewFrag
      }
    }
  }
`
