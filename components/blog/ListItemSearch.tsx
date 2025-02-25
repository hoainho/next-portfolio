
import NotFoundPage from "@/app/not-found";
import PaginatedPostList from "./PaginatedPostList";
import { GetDataSearchQuery } from "@/lib/api";

type ListItemProps = {
  content: string
}

const ListItemSearch = async ({ content }: ListItemProps) => {
  try {
    const posts = await GetDataSearchQuery(content);
    if (!posts.nodes.length || posts.nodes.length < 1) return <NotFoundPage />;

    return (
      <PaginatedPostList
        posts={posts.nodes}
        content={content}
        initCursor={posts.pageInfo.endCursor}
        initHasNextPage={posts.pageInfo.hasNextPage}
      />
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return <NotFoundPage />;
  }
}
export default ListItemSearch;
