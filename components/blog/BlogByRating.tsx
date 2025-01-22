import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BlogItem from "./BlogItem";
import { PostItem } from "@/app/types";
import client from "@/lib/apolloClient";
import { GET_POSTS_BY_TAGS_QUERY } from "@/graphql/queries/post.query";

interface Props {
  posts: PostItem[];
}

const BlogByRating = async ({ posts }: Props) => {
  const postsByPopular = await client.query({
    query: GET_POSTS_BY_TAGS_QUERY,
    variables: { tag: "popular", first: 3, author: 3 },
  });

  const popularPosts: PostItem[] = postsByPopular?.data?.posts?.nodes;
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="fade-in-start max-container-centre py-14 px-5 lg:py-10">
        <div className="flex gap-10 flex-col lg:flex-row">
          <div className="flex flex-col w-full lg:w-1/2 gap-3">
            <div
              className={clsx(
                "flex items-center justify-between py-3",
                "border-t-4 border-t-black border-b border-b-tertiary mb-5",
              )}
            >
              <h3 className="text-2xl font-bold">Latest</h3>
              <div className="flex gap-x-2 items-center justify-center">
                <Link href={"/blog/category/latest"} className="">
                  View all
                </Link>
                <FaArrowRight className="text-black " />
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full">
              {posts.slice(0, 3).map((post, index) => (
                <BlogItem post={post} key={index} isLight />
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 gap-3">
            <div
              className={clsx(
                "flex items-center justify-between py-3",
                "border-t-4 border-t-black border-b border-b-tertiary mb-5",
              )}
            >
              <h3 className="text-2xl font-bold">Popular</h3>
              <div className="flex gap-x-2 items-center justify-center">
                <Link href={"/blog/category/popular"} className="">
                  View all
                </Link>
                <FaArrowRight className="text-black " />
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full">
              {popularPosts.map((post, index) => (
                <BlogItem post={post} key={index} isLight />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogByRating;
