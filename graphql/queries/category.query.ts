import { gql } from "@apollo/client";

export const GET_CATEGORIES_QUERY = gql`
  query GetCategories {
    categories {
      nodes {
        name
        slug
        children {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_CATEGORY_BY_SLUG = gql`
  query GetCategoryBySlug($slug: String!) {
    category(id: $slug, idType: SLUG) {
      name
      description
      slug
      posts {
        nodes {
          title
          slug
        }
      }
    }
  }
`;
