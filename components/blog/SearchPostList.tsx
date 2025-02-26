
import { getDataSearchQuery } from "@/lib/api";
import ListItemWithLoadMore from "./list-container/ListItemWithLoadMore";

type SearchPostListProps = {
  content: string
}

const SearchPostList  = async ({ content }: SearchPostListProps) => {
 
  const posts = await getDataSearchQuery(content)

  return (
    <ListItemWithLoadMore
      filterKey={content}
      actionGetList={getDataSearchQuery}
      posts={posts}
    />
  )
}
export default SearchPostList;
