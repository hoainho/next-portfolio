import NotFoundPage from "@/app/not-found";
import { PostItem } from "@/app/types";
import BlogItem from "@/components/blog/BlogItem";
import BlogPlatform from "@/components/blog/BlogPlatform";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { GET_POSTS_BY_TAG_QUERY  } from "@/graphql/queries/post.query";
import { isrClient } from "@/lib/apolloClient";

interface Props {
  params: {
    slug: string;
  };
}

const BlogTag = async({params}: Props) => {

  const postsByTagID = await isrClient.query({
    query : GET_POSTS_BY_TAG_QUERY ,
    variables: { tag: params.slug, first: 10, author: 3 },
  });

  const postsByTag = postsByTagID?.data?.posts?.nodes;
  const labelTag = params.slug.charAt(0).toUpperCase() + params.slug?.slice(1)

  const breadcrumb = [
    { label: "Blog", href: "/blog" },
    {
      label: labelTag,
      href: `/blog/tag/${params.slug}`,
    },
  ];

  return (
    <div>
      <div className="pt-10 px-6 !pb-0 bg-bg-default">
        <div className="max-container-blog !min-h-fit flex flex-col gap-y-3">
          <Breadcrumb items={breadcrumb} />
          <h1 className="font-extrabold font-sans text-5xl mt-3 text-fg-default">
           {labelTag}
          </h1>
        </div>
      </div>
      <div className="max-container-blog py-5">
        <div className="flex flex-col gap-y-5">
          <div className="w-full">
            {postsByTag.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4">
                {postsByTag?.map((post: PostItem, index: number) => (
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
export default BlogTag;
