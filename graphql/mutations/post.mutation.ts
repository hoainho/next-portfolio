import { gql } from '@apollo/client';

export const INCREMENT_POST_VIEWS_MUTATION = gql`
  mutation IncrementPostViews($postId: ID!) {
    incrementPostViews(input: { postId: $postId }) {
      postId
      postViews {
        total
      }
    }
  }
`; 