import { AuthorInfo } from "@/app/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageLoader from "../loader/ImageLoader";

type AuthorProps = {
  author: AuthorInfo;
};

const BlogAuthor = ({ author }: AuthorProps) => {
  return (
    <div className="mt-10">
      <h6 className="text-2xl font-bold mb-3">Written by</h6>
      <hr className="w-full h-[3px] bg-gradient-to-r from-[#f778ba] to-[#79c0ff]"></hr>
      <div className="flex gap-x-5 items-center mt-5">
        <ImageLoader
          src={author.avatar.url}
          alt="author"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="flex flex-col gap-2 items-start justify-center">
          <h6 className="text-primary font-bold">{author.name}</h6>
          <p className="text-gray-600 dark:text-gray-300 font-mono text-sm">
            {author.name}
          </p>
          <Link
            href={`/blog/author/${author.slug}`}
            target="_blank"
            rel="noreferrer"
            className="text-primary font-mono"
          >
            @{author.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogAuthor;
