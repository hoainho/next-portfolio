"use server"

import { FETCH_POSTS_BY_QUERY, POSTS_QUERY } from "@/graphql/queries/post.query";
import { isrClient } from "@/lib/apolloClient";

async function GetDataSearchQuery(content: string, cursor?:string) {
  const query = content ? FETCH_POSTS_BY_QUERY : POSTS_QUERY
  const variables = content ? { search: content, first: 6 , after: cursor} : { author: 3, first: 6, after: cursor}
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

export {
  GetDataSearchQuery
}
