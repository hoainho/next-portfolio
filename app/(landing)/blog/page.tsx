import { PostItem } from "@/app/types";
import { Metadata } from "next";
import client from "@/lib/apolloClient";
import BlogItem from "@/components/blog/BlogItem";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogSubscribers from "@/components/blog/BlogSubscribers";
import BlogByRating from "@/components/blog/BlogByRating";
import BlogByCategory from "@/components/blog/BlogByCategory";
import {
  POSTS_QUERY,
  GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY,
} from "@/graphql/queries/post.query";
import BlogPlatform from "@/components/blog/BlogPlatform";

export const revalidate = +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600);

export const metadata: Metadata = {
  title: "Nick's Blog | Latest Posts",
  description:
    "Discover the latest posts and articles on Nick's Blog. Stay updated with trending topics, tips, and insights.",
  keywords:
    "blog, articles, insights, technology, lifestyle, trends, tips, Nick's Blog, latest posts",
  openGraph: {
    title: "Nick's Blog | Latest Posts",
    description:
      "Discover the latest posts and articles on Nick's Blog. Stay updated with trending topics, tips, and insights.",
    url: "https://hoainho.info/blog",
    images: [
      {
        url:
          process.env.NEXT_PUBLIC_LOGO ||
          "https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/logo.jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick's Blog | Latest Posts",
    description:
      "Discover the latest posts and articles on Nick's Blog. Stay updated with trending topics, tips, and insights.",
    images:
      process.env.NEXT_PUBLIC_LOGO ||
      "https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/logo.jpeg",
  },
};

export default async function BlogPage() {
  try {
    const postsResponse = await client.query({
      query: POSTS_QUERY,
      variables: {
        author: 3,
        first: 4,
      },
      context: {
        fetchOptions: {
          next: {
            tags: ["posts", "all-posts"],
            revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600),
          },
        },
      },
    });

    const category = "javascript-typescript";
    const postsByCategoryID = await client.query({
      query: GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY,
      variables: { category, author: 3, first: 5 },
      context: {
        fetchOptions: {
          next: {
            tags: ["posts", `category-${category}`, "category-posts"],
            revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600),
          },
        },
      },
    });

    const posts: PostItem[] = postsResponse?.data?.posts?.nodes || [];
    const postsByCategory = postsByCategoryID?.data?.posts?.nodes || [];

    if (!posts.length) {
      console.error('No posts found');
      return <div>No posts available</div>;
    }

    return (
      <div className="relative">
        <div className="bg-dark text-white min-h-screen overflow-hidden">
          <div className="fade-in-start max-container-centre py-2 px-5 lg:py-10">
            <div className="relative blog-hero flex flex-col">
              <div className="flex flex-col lg:flex-row w-full gap-x-10">
                {posts[0] && <BlogFeatured post={posts[0]} />}
                <div className="flex flex-col w-full lg:w-1/2 gap-5">
                  {posts.slice(1, 4).map((post, index) => (
                    <BlogItem post={post} key={post.uri || index} isDark />
                  ))}
                </div>
              </div>
              <BlogSubscribers isDark />
            </div>
          </div>
        </div>
        <BlogByRating posts={posts} />
        {postsByCategory.length > 0 && (
          <BlogByCategory
            posts={postsByCategory}
            category="Javascript"
            categorySlug={category}
          />
        )}
        <BlogPlatform />
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return <div>Something went wrong loading the blog. Please try again later.</div>;
  }
}
