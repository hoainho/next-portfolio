"use client"

import { PostItem } from "@/app/types"
import { useState } from "react"
import BlogItem from "../BlogItem"
import Button from "@/components/buttons/Button"
import NotFoundPage from "@/app/not-found"

type ItemProps = {
  posts: PostItem[],
  initCursor: string,
  initHasNextPage: boolean,
  filterKey: string,
  actionGetList?: (filterKey: string, cursor: string) => Promise<{
    nodes: PostItem[];
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
    };
  }>;
}

const PaginationList = ({
  posts,
  initCursor,
  initHasNextPage,
  filterKey,
  actionGetList,
}: ItemProps) => {

  const [dataPost, setDataPost] = useState<PostItem[]>(posts)
  const [hasNextPage, setHasNextPage] = useState(initHasNextPage);
  const [cursor, setCursor] = useState(initCursor);
  const [loadingButton, setLoadingButton] = useState(false)

  const handelOnClick = async () => {
    setLoadingButton(true)

    if (actionGetList) {
      const data = await actionGetList(filterKey, cursor)
      setDataPost((prev) => [...prev, ...data.nodes]);
      setCursor(data.pageInfo.endCursor);
      setHasNextPage(data.pageInfo.hasNextPage);
    }

    setTimeout(() => {
      setLoadingButton(false);
    }, 1000);
  }

  return (
    <div className="w-full">
      {dataPost.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4">
          {dataPost.map((post: PostItem, index: number) => (
            <div className="col-span-1 pt-0 md:pt-5" key={index}>
              <BlogItem post={post} isReverse />
            </div>
          ))}
        </div>
      ) : (
        <NotFoundPage />
      )}
      {hasNextPage && (
        <div className="flex justify-center items-center pt-8">
          <Button isLoading={loadingButton} onClick={handelOnClick}>Load More</Button>
        </div>
      )}
    </div>
  )
}
export default PaginationList;

