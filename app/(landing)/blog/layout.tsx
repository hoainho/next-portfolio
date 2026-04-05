import { PostCategory } from "@/app/types";
import BlogCategorySticky from "@/components/blog/BlogCategorySticky";
import { GET_EN_POSTS_WITH_CATEGORIES_QUERY } from "@/graphql/queries/post.query";
import client from "@/lib/apolloClient";

export const dynamic = "force-dynamic";

interface Props {
  children: React.ReactNode;
}

export default async function BlogLayout({ children }: Props) {
  const postsResponse = await client.query({
    query: GET_EN_POSTS_WITH_CATEGORIES_QUERY,
    variables: { author: 3, first: 100 },
  });

  const posts: { categories: { nodes: PostCategory[] } }[] =
    postsResponse?.data?.posts?.nodes ?? [];

  const seenSlugs = new Set<string>();
  const categories: PostCategory[] = [];

  for (const post of posts) {
    for (const cat of post.categories.nodes) {
      if (!seenSlugs.has(cat.slug) && !cat.parent) {
        seenSlugs.add(cat.slug);
        categories.push(cat);
      }
    }
  }

  return (
    <div className="relative">
      <BlogCategorySticky categories={categories} />
      {children}
    </div>
  );
}
