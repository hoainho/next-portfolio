import { ReactNode } from "react";
import BlogCategorySticky from "@/components/blog/BlogCategorySticky";
import { GET_CATEGORIES_QUERY } from "@/graphql/queries/category.query";
import {
  GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY,
} from "@/graphql/queries/post.query";
import { getAuthorId } from "@/lib/helpers";
import client from "@/lib/apolloClient";

interface Props {
  children: ReactNode;
}

export default async function BlogLayout({ children }: Props) {
  const { data } = await client.query({
    query: GET_CATEGORIES_QUERY,
    context: {
      fetchOptions: {
        next: { revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600) }
      },
    },
  });

  const categories = data?.categories?.nodes || [];
  const categoriesWithPosts = await Promise.all(
    categories.map(async (category: any) => {
      if (category.children.nodes.length) {
        const { data: postData } = await client.query({
          query: GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY,
          variables: { 
            category: category.slug, 
            author: getAuthorId(), 
            first: 1 
          },
          context: {
            fetchOptions: {
              next: { revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600) }
            },
          },
        });
        return {
          ...category,
          post: postData?.posts?.nodes?.[0] || null
        };
      }
      return category;
    })
  );

  return (
    <div className="relative">
      <BlogCategorySticky categories={categoriesWithPosts} />
      {children}
    </div>
  );
}
