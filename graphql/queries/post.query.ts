import { gql } from '@apollo/client';

export const POSTS_QUERY = gql`
  query GetPosts($author: Int!, $first: Int!) {
    posts(where: { author: $author }, first: $first) {
      nodes {
        author {
          node {
            avatar {
              url
              extraAttr
              width
              height
            }
            description
            firstName
            lastName
            name
            slug
          }
        }
        content
        categories {
          nodes {
            id
            name
            slug
          }
        }
        date
        desiredSlug
        excerpt
        featuredImage {
          node {
            altText
            srcSet
            sourceUrl
          }
        }
        link
        postId
        slug
        tags {
          nodes {
            description
            id
            name
          }
        }
        title
        uri
      }
    }
  }
`;

export const POST_DETAIL_QUERY = gql`
  query PostDetail($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      author {
        node {
          avatar {
            url
            extraAttr
            height
            width
          }
          description
          firstName
          lastName
          name
          slug
        }
      }
      content
      categories {
        nodes {
          id
          name
          slug
          uri
        }
      }
      date
      desiredSlug
      excerpt
      featuredImage {
        node {
          altText
          srcSet
          sourceUrl
        }
      }
      link
      postId
      slug
      tags {
        nodes {
          description
          id
          name
        }
      }
      title
      uri
      postViews {
        total
      }
    }
  }
`;

export const GET_CATEGORIES_QUERY = gql`
  query GetCategories {
    categories(where: { hideEmpty: true }, first: 15) {
      nodes {
        children {
          nodes {
            name
            description
            slug
          }
        }
        name
        description
        slug
        parent {
          node {
            name
          }
        }
      }
    }
  }
`;

export const GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY = gql`
  query GetPostsByCategoryAndAuthor($category: String!, $author: Int!, $first: Int!) {
    posts(where: { categoryName: $category, author: $author }, first: $first) {
      nodes {
        author {
          node {
            avatar {
              height
              url
              width
            }
            description
            name
            slug
            url
          }
        }
        content
        categories {
          nodes {
            id
            name
          }
        }
        date
        desiredSlug
        excerpt
        featuredImage {
          node {
            altText
            srcSet
            sourceUrl
          }
        }
        link
        postId
        slug
        tags {
          nodes {
            description
            id
            name
          }
        }
        title
        uri
        modified
      }
    }
  }
`;

export const GET_POSTS_BY_TAGS_QUERY = gql`
  query GetPostsByTags($tag: String!, $first: Int!, $author: Int!) {
    posts(where: { author: $author, tag: $tag }, first: $first) {
      nodes {
        author {
          node {
            avatar {
              height
              url
              width
            }
            description
            name
            slug
            url
          }
        }
        content
        categories {
          nodes {
            id
            name
          }
        }
        date
        desiredSlug
        excerpt
        featuredImage {
          node {
            altText
            srcSet
            sourceUrl
          }
        }
        link
        postId
        slug
        tags {
          nodes {
            description
            id
            name
          }
        }
        title
        uri
        modified
      }
    }
  }
`;

export const GET_POSTS_BY_AUTHOR_QUERY = gql`
  query GetPostsByAuthor($author: ID!, $first: Int!) {
    user(id: $author, idType: SLUG) {
      description
      name
      firstName
      lastName
      slug
      email
      avatar {
        height
        url
        width
        extraAttr
      }
      posts(first: $first) {
        nodes {
          author {
            node {
              avatar {
                url
                extraAttr
                width
                height
              }
              description
              firstName
              lastName
              name
              slug
            }
          }
          content
          categories {
            nodes {
              id
              name
            }
          }
          date
          desiredSlug
          excerpt
          featuredImage {
            node {
              altText
              srcSet
              sourceUrl
            }
          }
          link
          postId
          slug
          tags {
            nodes {
              description
              id
              name
            }
          }
          title
          uri
        }
      }
    }
  }
`;
