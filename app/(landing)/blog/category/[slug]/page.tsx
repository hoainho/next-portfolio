import { PostItem, PostCategory, TagItem } from "@/app/types";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogItem from "@/components/blog/BlogItem";
import BlogPlatform from "@/components/blog/BlogPlatform";
import BlogSubscribers from "@/components/blog/BlogSubscribers";
import ListItemWithLoadMore from "@/components/blog/list-pagination/ListItemWithLoadMore";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import {
  GET_CATEGORIES_QUERY,
} from "@/graphql/queries/post.query";
import { getPostByCategoryId } from "@/lib/api";
import { isrClient } from "@/lib/apolloClient";
import React from "react";
interface Props {
  params: {
    slug: string;
  };
}

// Force dynamic rendering to avoid Cloudflare 403 errors during build
export const dynamic = 'force-dynamic';
export const revalidate = +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600);

const BlogCategory = async ({ params }: Props) => {
  const categoriesResponse = await isrClient.query({
    query: GET_CATEGORIES_QUERY,
    context: {
      fetchOptions: {
        next: {
          tags: ['categories'],
          revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600),
        },
      },
    },
  });

  const categoriesFilter: PostCategory[] =
    categoriesResponse?.data?.categories?.nodes || [];

  const category = categoriesFilter?.find(
    (category: PostCategory) => category?.slug === params?.slug,
  );

  const breadcrumb = [
    { label: "Blog", href: "/blog" },
    {
      label:
        category?.name ||
        params.slug.charAt(0).toUpperCase() + params.slug?.slice(1),
      href: `/blog/category/${params.slug}`,
    },
  ];

  const latestSlug = params.slug === "latest";
  const popularSlug = params.slug === "popular";

  const postsByCategory = await getPostByCategoryId(params.slug, category?.slug) 

  const featuredPost: PostItem | undefined = postsByCategory?.posts?.nodes.find(
    (post: PostItem) =>
      post?.tags?.nodes?.some((tag: TagItem) => tag?.name === "Popular"),
  );

  return (
    <div>
      <div className="pt-10 px-6 !pb-0 bg-bg-default">
        <div className="max-container-blog !min-h-fit flex flex-col gap-y-3">
          <Breadcrumb items={breadcrumb} />
          <h1 className="font-extrabold font-sans text-5xl mt-3 text-fg-default">
            {category?.name ||
              params.slug.charAt(0).toUpperCase() + params.slug?.slice(1)}
          </h1>
          <div className="max-w-[600px] pb-5">
            <div
              className="text-fg-muted flex flex-col gap-2"
              dangerouslySetInnerHTML={{ __html: category?.description || "" }}
            />
            <p className="text-fg-muted text-base">
              {latestSlug &&
                "Explore the latest blogs from Th?nkAndGrow on all things software development from the newest capabilities on the Th?nkAndGrow platform to research and insights—and guides to help you level up your engineering skills."}
              {popularSlug &&
                "Explore the most popular blogs from Th?nkAndGrow on all things software development from the newest capabilities on the Th?nkAndGrow platform to research and insights—and guides to help you level up your engineering skills."}
            </p>
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
              filterKey={category?.slug || params.slug}
            />
          </div>
        </div>
      </div>
      <BlogPlatform />
    </div>
  );
};

export default BlogCategory;
