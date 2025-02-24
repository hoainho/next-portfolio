import NotFoundPage from "@/app/not-found";
import { PostItem } from "@/app/types";
import { FETCH_POSTS_BY_QUERY } from "@/graphql/queries/post.query";
import { isrClient } from "@/lib/apolloClient";
import BlogItem from "./BlogItem";

type ListItemProps = {
  content: string
}

const fetchPostsBySearch = async (content: string) => {
  if (!content) return []
  const postBySearch = await isrClient.query({
    query: FETCH_POSTS_BY_QUERY,
    variables: {
      search: content,
      first: 5,
    },
    context: {
      fetchOptions: {
        next: {
          tags: ["search", "posts"],
          revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600),
        },
      },
    },
  });
  return postBySearch?.data?.posts.nodes || []
}

const ListItemSearch = async ({ content }: ListItemProps) => {
  const posts = await fetchPostsBySearch(content);
  if (!posts.length) return <NotFoundPage />;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4">
        {posts.map((post: PostItem, index: number) => (
          <div className="col-span-1 pt-0 md:pt-5" key={index}>
            <BlogItem post={post} isReverse />
          </div>
        ))}
      </div>
    </div>
  )
}
export default ListItemSearch;