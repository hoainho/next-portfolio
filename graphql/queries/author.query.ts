import { gql } from "@apollo/client";

export const GET_POSTS_BY_AUTHOR_QUERY = gql`
  query GetPostsByAuthor($slug: String!) {
    user(id: $slug, idType: SLUG) {
      name
      description
      posts {
        nodes {
          postId
          title
          excerpt
          slug
          uri
          date
          modified
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              name
              slug
            }
          }
          tags {
            nodes {
              name
              id
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
`;
