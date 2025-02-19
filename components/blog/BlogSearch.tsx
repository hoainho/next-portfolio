import { PostItem } from "@/app/types"
import BlogItem from "./BlogItem"
import Breadcrumb from "../breadcrumb/Breadcrumb";
import NotFoundPage from "@/app/not-found";
import BlogPlatform from "./BlogPlatform";

type BlogSearchProp = {
  posts: PostItem[];
  content: string | string[] | undefined,
};

const BlogSearch = ({
  posts,
  content,
}:
  BlogSearchProp) => {

  const breadcrumb = [
    { label: "Blog", href: "/blog" },
    {
      label: "Blog Search", href: ''
    },
  ];

  return (
    <div>
      <div className="pt-10 px-6 !pb-0 bg-bg-default">
        <div className="max-container-blog !min-h-fit flex flex-col gap-y-3">
          <Breadcrumb items={breadcrumb} />
          <h1 className="font-extrabold font-sans text-5xl mt-3 text-fg-default max-w-3xl">
            Search results for : <i>{content}</i>
          </h1>
        </div>
      </div>
      <div className="max-container-blog py-5">
        <div className="flex flex-col gap-y-5">
          <div className="w-full">
            {posts.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4">
                {posts?.map((post: PostItem, index: number) => (
                  <div className="col-span-1 pt-0 md:pt-5" key={index}>
                    <BlogItem post={post} key={index} isReverse />
                  </div>
                ))}
              </div>
            ) : (
              <NotFoundPage />
            )}
          </div>
        </div>
      </div>
      <BlogPlatform />
    </div>
  );
}
export default BlogSearch
