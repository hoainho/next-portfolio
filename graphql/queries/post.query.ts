import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`
  query GetPosts($author: Int!, $first: Int!, $after: String) {
    posts(where: { author: $author }, first: $first, after: $after) {
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
      pageInfo {
        hasNextPage
        endCursor
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
      seo {
        canonical
        cornerstone
        focuskw
        fullHead
        metaDesc
        metaKeywords
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        readingTime
        title
        twitterDescription
        twitterTitle
      }
    }
  }
`;

export const POST_DETAIL_SEO_QUERY = gql`
  query PostDetailSEO($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      seo {
        canonical
        cornerstone
        focuskw
        fullHead
        metaDesc
        metaKeywords
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        opengraphImage {
          sourceUrl
          altText
        }
        readingTime
        title
        twitterDescription
        twitterTitle
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
  query GetPostsByCategoryAndAuthor(
    $category: String!
    $author: Int!
    $first: Int!
    $after: String
  ) {
    posts(where: { categoryName: $category, author: $author }, first: $first, after: $after) {
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
        pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const GET_POSTS_BY_TAG_QUERY  = gql`
  query GetPostsByTags($tag: String!, $first: Int!, $author: Int!, $after: String) {
    posts(where: { author: $author, tag: $tag }, first: $first, after: $after) {
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
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const GET_POSTS_BY_AUTHOR_QUERY = gql`
  query GetPostsByAuthor($author: ID!, $first: Int!, $after: String) {
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
      posts(first: $first, after: $after) {
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
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

export const FETCH_POSTS_BY_QUERY = gql`
  query SearchPosts($search: String!, $first: Int!, $after: String) {
    posts(where: { search: $search }, first: $first, after: $after) {
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
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
` 
