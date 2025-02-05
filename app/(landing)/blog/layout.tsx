import { PostCategory, PostItem } from "@/app/types";
import BlogCategorySticky from "@/components/blog/BlogCategorySticky";
import {
  GET_CATEGORIES_QUERY,
  GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY,
} from "@/graphql/queries/post.query";
import client from "@/lib/apolloClient";
import { Suspense } from "react";
interface Props {
  children: React.ReactNode;
}

export default async function BlogLayout({ children }: Props) {
  const categoriesResponse = await client.query({
    query: GET_CATEGORIES_QUERY,
  });

  const categoriesFilter: PostCategory[] =
    categoriesResponse?.data?.categories?.nodes;

  const categoriesReq = categoriesFilter
    ?.filter((category) => !category.parent)
    ?.map(async (category) => {
      if (category.children.nodes.length) {
        const fetchPost = await client.query({
          query: GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY,
          variables: { category: category.slug, author: 3, first: 1 },
        });

        const post: PostItem = fetchPost?.data?.posts?.nodes?.[0];
        return { ...category, post };
      }
      return category;
    });

  const categories = await Promise.all(categoriesReq);
  return (
    <div className="relative">
      <BlogCategorySticky categories={categories} />
      {children}
    </div>
  );
}
