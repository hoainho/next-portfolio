import { PostItem } from "@/app/types";
import { formatDate } from "@/utils/formatDate";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import ImageLoader from "../loader/ImageLoader";

type PostItemType = {
  post: PostItem;
  isDark?: boolean;
  isReverse?: boolean;
  isLight?: boolean;
};

const BlogItem = ({
  post,
  isDark = false,
  isReverse = false,
  isLight = false,
}: PostItemType) => {
  return (
    <div
      className={clsx(
        "group w-full flex flex-col gap-x-5 gap-3 cursor-pointer py-2 md:py-5 [&:not(:last-child)]:border-b lg:first:pt-0",
        !isReverse ? "sm:flex-row md:first:pt-10" : "first:pt-10",
        isDark ? "border-fg-border" : "border-tertiary",
      )}
    >
      <div
        className={clsx(
          "flex w-full h-fit max-h-[350px] sm:min-h-[350px] md:min-h-[200px] sm:max-h-[350px] md:max-h-[200px] lg:max-h-[170px] lg:min-h-[170px] xl:max-h-[200px] xl:min-h-[200px] overflow-hidden rounded-sm",
          !isReverse ? "min-w-48 max-w-48" : "",
        )}
      >
        <Link href={`/blog/${post.slug}`} className="w-full h-full">
          <ImageLoader
            src={decodeURIComponent(post.featuredImage?.node.sourceUrl)}
            alt={post.featuredImage?.node.altText}
            width={24}
            height={24}
            className={clsx(
              "rounded-sm w-full h-full object-cover object-center scale-100 group-hover:scale-105 duration-500 transition-all ease-in-out",
              !isReverse ? "lg:max-w-48" : "",
            )}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <h3
          className={clsx(
            "text-sm w-fit",
            "text-gradient-purple-coral",
            isLight && "text-gradient-purple-light",
            isDark && "text-gradient-purple-coral-dark",
          )}
        >
          {post.categories.nodes[0].name}
        </h3>
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-lg font-bold text-inherit line-clamp-2 group-hover:underline group-hover:text-active duration-200 transition-all ease-in-out">
            {post.title}
          </h2>
        </Link>
        <div
          className="text-sm text-fg-subtle line-clamp-4"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
        <div className="flex gap-x-2 items-center">
          <Link
            href={`/blog/author/${post.author.node.slug}`}
            className="font-mono font-semibold text-sm hover:underline hover:text-active duration-200 transition-all ease-in-out"
          >
            {post.author.node.name}
          </Link>
          •
          <p className="font-mono font-normal text-sm text-fg-subtle">
            {formatDate(post.date)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
