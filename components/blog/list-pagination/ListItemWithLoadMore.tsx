import { PostItem, Posts } from "@/app/types";
import PaginationList from "./PaginationList";

type ListItemProp = {
  posts: Posts,
  filterKey: string,
  actionGetList?: (filterKey: string, cursor: string) => Promise<{
    nodes: PostItem[];
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
    };
  }>;
}

const ListItemWithLoadMore = ({
  posts,
  filterKey,
  actionGetList
}: ListItemProp) => {
  return (
    <PaginationList
      posts={posts.nodes}
      initCursor={posts.pageInfo.endCursor}
      initHasNextPage={posts.pageInfo.hasNextPage}
      filterKey={filterKey}
      actionGetList={actionGetList}
    />
  );
}
export default ListItemWithLoadMore
