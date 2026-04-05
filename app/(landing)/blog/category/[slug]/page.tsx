import { PostItem, TagItem } from "@/app/types";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogItem from "@/components/blog/BlogItem";
import BlogPlatform from "@/components/blog/BlogPlatform";
import BlogSubscribers from "@/components/blog/BlogSubscribers";
import ListItemWithLoadMore from "@/components/blog/list-pagination/ListItemWithLoadMore";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { getPostByCategoryId } from "@/lib/api";
import { CATEGORY_SLUG_TO_NAME } from "@/lib/categories";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 3600;

const BlogCategory = async ({ params }: Props) => {
  const slug = params.slug;

  const categoryName =
    CATEGORY_SLUG_TO_NAME[slug] ?? slug.charAt(0).toUpperCase() + slug.slice(1);

  const breadcrumb = [
    { label: "Blog", href: "/blog" },
    { label: categoryName, href: `/blog/category/${slug}` },
  ];

  const latestSlug = slug === "latest";
  const popularSlug = slug === "popular";

  const postsByCategory = await getPostByCategoryId(slug);

  const featuredPost: PostItem | undefined = postsByCategory?.nodes?.find(
    (post: PostItem) =>
      post?.tags?.nodes?.some((tag: TagItem) => tag?.name === "Popular"),
  );

  return (
    <div>
      <div className="bg-bg-default border-b border-fg-border/30">
        <div className="max-container-blog !min-h-fit flex flex-col gap-y-2 pt-8 pb-7">
          <Breadcrumb items={breadcrumb} />
          <div className="flex items-start gap-3 mt-4">
            <span className="mt-1.5 flex-shrink-0 w-[3px] h-8 rounded-full bg-gradient-to-b from-[#00c6ff] to-[#0072ff]" />
            <h1 className="font-extrabold font-sans text-4xl xl:text-5xl bg-gradient-to-br from-fg-on-emphasis to-fg-default bg-clip-text text-transparent leading-tight">
              {categoryName}
            </h1>
          </div>
          <div className="max-w-[600px] pl-[15px] pb-2">
            {latestSlug || popularSlug ? (
              <p className="text-fg-muted text-sm leading-relaxed">
                {latestSlug &&
                  "Explore the latest posts on software engineering, architecture, and developer tooling."}
                {popularSlug &&
                  "The most-read posts on engineering, tools, and developer insights from Th\u012bnkAndGrow."}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      {!(latestSlug || popularSlug) && featuredPost && (
        <div>
          <div className="max-container-blog py-5">
            <div className="flex flex-col gap-y-5">
              <div className="w-full">
                <div className="flex items-center justify-between py-5 border-b border-gray-border mb-5">
                  <h2 className="text-2xl font-bold text-default">
                    Featured Posts
                  </h2>
                </div>
                {featuredPost && (
                  <BlogFeatured post={featuredPost} isFullWidth />
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4">
                  {postsByCategory?.posts.nodes
                    ?.filter(
                      (post: PostItem) => post.postId !== featuredPost?.postId,
                    )
                    ?.map((post: PostItem, index: number) => (
                      <div
                        className="col-span-1 border-t border-gray-border-3 pt-5"
                        key={index}
                      >
                        <BlogItem post={post} key={index} isReverse />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <BlogSubscribers />
        </div>
      )}
      <div className="max-container-blog py-5">
        <div className="flex flex-col gap-y-5">
          <div className="w-full">
            <div className="flex items-center justify-between py-5 border-b border-gray-border mb-5">
              <h2 className="text-2xl font-bold text-default">Latest</h2>
            </div>
            <ListItemWithLoadMore
              posts={postsByCategory}
              actionGetList={getPostByCategoryId}
              filterKey={slug}
            />
          </div>
        </div>
      </div>
      <BlogPlatform />
    </div>
  );
};

export default BlogCategory;
