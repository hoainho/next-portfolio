"use server"

import { FETCH_POSTS_BY_QUERY, GET_POSTS_BY_AUTHOR_QUERY, GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY, GET_POSTS_BY_TAG_QUERY, POSTS_QUERY } from "@/graphql/queries/post.query";
import { isrClient } from "@/lib/apolloClient";

async function getDataSearchQuery(content: string, cursor?: string) {
  const query = content ? FETCH_POSTS_BY_QUERY : POSTS_QUERY
  const variables = content ? { search: content, first: 6, after: cursor } : { author: 3, first: 6, after: cursor }
  const tags = content ? ["search", "posts"] : ['post']

  const postBySearch = await isrClient.query({
    query: query,
    variables: { ...variables },
    context: {
      fetchOptions: {
        next: {
          tags: tags,
          revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600),
        },
      },
    },
  });

  return postBySearch?.data?.posts
}

async function getPostByCategoryId(params: string, cursor?: string) {
  const latestSlug = params === "latest";
  const popularSlug = params === "popular";

  let query = POSTS_QUERY;
  let variables: any = { author: 3, first: 6, after: cursor };
  if (latestSlug) {
    query = POSTS_QUERY;
    variables = { author: 3, first: 6 };
  } else if (popularSlug) {
    query = GET_POSTS_BY_TAG_QUERY;
    variables = { tag: "Popular", first: 6, author: 3, after: cursor };
  }
  else {
    query = GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY;
    variables = {
      // category: categorySlug || params,
      category: params,
      author: 3,
      first: 6,
      after: cursor
    };
  }
  const postsByCategoryID = await isrClient.query({
    query,
    variables,
    context: {
      fetchOptions: {
        next: {
          tags: ['posts', `category-${params}`],
          revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600),
        },
      },
    },
  });

  return postsByCategoryID.data.posts
}

async function getPostByAuthor(params: string) {
  const postsResponse = await isrClient.query({
    query: GET_POSTS_BY_AUTHOR_QUERY,
    variables: {
      author: params || "hoainho",
      first: 30,
    },
    context: {
      fetchOptions: {
        next: {
          revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600),
        },
      },
    },
  });
  return postsResponse
}

export {
  getDataSearchQuery,
  getPostByCategoryId,
  getPostByAuthor
}
