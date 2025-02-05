import { PostItem } from "@/app/types";
import { formatDate } from "@/utils/formatDate";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import ImageLoader from "../loader/ImageLoader";
import SkeletonBlogFeatured from "./SkeletonBlogFeatured";

type BlogFeaturedProps = {
	post: PostItem;
	isFullWidth?: boolean;
};

const BlogFeatured = ({ post, isFullWidth = false }: BlogFeaturedProps) => {

	return !isFullWidth ? (
		<div
			className={clsx(
				"group w-full flex flex-col gap-3 cursor-pointer border-b border-fg-border py-4",
				"lg:w-1/2 lg:border-none lg:py-0",
			)}
		>
			{post ? (
				<React.Fragment>
					<div className="w-full h-fit overflow-hidden rounded-sm">
						<Link href={`/blog/${post.slug}`}>
							<ImageLoader
								width={48}
								height={48}
								src={decodeURIComponent(post.featuredImage.node.sourceUrl)}
								alt={post.title}
								className="w-full h-fit object-cover scale-100 group-hover:scale-105 duration-500 transition-all ease-in-out"
							/>
						</Link>

					</div>
					<Link
						href={`/blog/category/${post.categories.nodes[0].slug}`}
						className="text-sm text-gradient-purple-coral-dark w-fit"
					>
						{post.categories.nodes[0].name}
					</Link>
					<Link
						href={`/blog/${post.slug}`}
						className="text-4xl font-bold text-white group-hover:underline group-hover:text-link duration-200 transition-all ease-in-out"
					>
						{post.title}
					</Link>
					<div
						className="text-sm text-fg-subtle"
						dangerouslySetInnerHTML={{ __html: post.excerpt }}
					/>
					<div className="flex gap-x-2 items-center">
						<ImageLoader
							width={24}
							height={24}
							src={post.author.node.avatar.url}
							alt="avatar"
							className="rounded-full object-cover w-6 h-6 "
						/>
						<Link
							href={`/blog/author/${post.author.node.slug}`}
							className="font-mono font-semibold text-sm"
						>
							{post.author.node.name}
						</Link>
						•
						<p className="font-mono font-normal text-sm">
							{" "}
							{formatDate(post.date)}
						</p>
					</div>
				</React.Fragment>
			) : (
				<SkeletonBlogFeatured isFullWidth={false}/>
			)}
		</div>
	) : (
		<div className="py-5">
			<SkeletonBlogFeatured isFullWidth/>
		</div>
	);
};

export default BlogFeatured;
