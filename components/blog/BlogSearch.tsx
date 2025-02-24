import Breadcrumb from "../breadcrumb/Breadcrumb";
import BlogPlatform from "./BlogPlatform";
import { Suspense } from "react";
import ListItemSearch from "./ListItemSearch";
import CardLoading from "../loader/CardLoading";

export default async function BlogSearch({ content }: { content: string | string[] | undefined }) {

  const breadcrumb = [
    { label: "Blog", href: "/blog" },
    {
      label: "Blog Search", href: ''
    },
  ];

  const loadingItemSearch = () => {
    return (
      <div className="flex flex-col gap-y-5 ">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4">
            {[...Array(9)].map((_, i) => (
              <div className="col-span-1 pt-0 md:pt-5">
                <CardLoading />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

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
          {typeof content === "string" && (
            <Suspense key={content} fallback={loadingItemSearch()}>
              <ListItemSearch content={content} />
            </Suspense>
          )}
        </div>
      </div>
      <BlogPlatform />
    </div>
  );
}
