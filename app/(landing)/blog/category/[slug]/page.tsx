import NotFoundPage from "@/app/not-found";
import { PostCategory, PostItem, TagItem } from "@/app/types";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogItem from "@/components/blog/BlogItem";
import BlogPlatform from "@/components/blog/BlogPlatform";
import BlogSubscribers from "@/components/blog/BlogSubscribers";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import {
  GET_CATEGORIES_QUERY,
  GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY,
  GET_POSTS_BY_TAGS_QUERY,
  POSTS_QUERY,
} from "@/graphql/queries/post.query";
import client from "@/lib/apolloClient";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const BlogCategory = async ({ params }: Props) => {
  const categoriesResponse = await client.query({
    query: GET_CATEGORIES_QUERY,
  });

  const categoriesFilter: PostCategory[] =
    categoriesResponse?.data?.categories?.nodes;

  const category = categoriesFilter?.find(
    (category: PostCategory) => category?.slug === params?.slug,
  );

  const breadcrumb = [
    { label: "Blog", href: "/blog" },
    {
      label:
        category?.name ||
        params.slug.charAt(0).toUpperCase() + params.slug.slice(1),
      href: `/blog/category/${params.slug}`,
    },
  ];

  const latestSlug = params.slug === "latest";
  const popularSlug = params.slug === "popular";

  let query = POSTS_QUERY;
  let variables: any = { author: 3, first: 20 };
  if (latestSlug) {
    query = POSTS_QUERY;
    variables = { author: 3, first: 30 };
  } else if (popularSlug) {
    query = GET_POSTS_BY_TAGS_QUERY;
    variables = { tag: "Popular", first: 20, author: 3 };
  } else {
    query = GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY;
    variables = {
      category: category?.slug || params.slug,
      author: 3,
      first: 30,
    };
  }
  const postsByCategoryID = await client.query({
    query,
    variables,
    context: {
      fetchOptions: {
        next: {
          revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS ?? 600),
        }, // 10 minutes
      },
    },
  });

  const postsByCategory = postsByCategoryID?.data?.posts?.nodes;

  const featuredPost: PostItem | undefined = postsByCategory?.find(
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
              params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}
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
                  {postsByCategory
                    .filter(
                      (post: PostItem) => post.postId !== featuredPost?.postId,
                    )
                    .map((post: PostItem, index: number) => (
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
            {postsByCategory.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4">
                {postsByCategory.map((post: PostItem, index: number) => (
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
};

export default BlogCategory;
