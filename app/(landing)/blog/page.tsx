import { PostItem } from "@/app/types";
import { Metadata } from "next";
import { isrClient } from "@/lib/apolloClient";
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
import BlogSearch from "@/components/blog/BlogSearch";

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

export default async function BlogPage({
  searchParams }: {
    searchParams:  Promise<{ [key: string]: string}>
  }) {

  const searchContent = (await searchParams).s

  try {
    const [postsResponse, postsByCategoryID] = await Promise.all([
      isrClient.query({
        query: POSTS_QUERY,
        variables: {
          author: 3,
          first: 4,
        },
        context: {
          fetchOptions: {
            next: {
              tags: ['posts', 'all-posts'],
              revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600),
            },
          },
        },
      }),
      isrClient.query({
        query: GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY,
        variables: {
          category: "javascript-typescript",
          author: 3,
          first: 5
        },
        context: {
          fetchOptions: {
            next: {
              tags: ['posts', 'category-javascript-typescript'],
              revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600),
            },
          },
        },
      }),
    ]);

    const posts: PostItem[] = postsResponse?.data?.posts?.nodes || [];
    const postsByCategory: PostItem[] = postsByCategoryID?.data?.posts?.nodes || [];
    
    if (!posts.length) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">No Posts Available</h1>
            <p className="text-gray-600">Check back later for new content.</p>
          </div>
        </div>
      );
    }
    
    return (
      <>
        {Object.keys(searchParams).length > 0 ? (
          <BlogSearch content={searchContent}/>
        ) : (
          <div className="relative">
            <div className="bg-dark text-white min-h-screen overflow-hidden">
              <div className="fade-in-start max-container-centre py-2 px-5 lg:py-10">
                <div className="relative blog-hero flex flex-col">
                  <div className="flex flex-col lg:flex-row w-full gap-x-10">
                    {posts[0] && <BlogFeatured post={posts[0]} />}
                      {posts?.length > 1 && (
                        <div className="flex flex-col w-full lg:w-1/2 gap-5">
                          {posts?.slice(1, 4)?.map((post, index) => (
                            <BlogItem post={post} key={post.uri || index} isDark />
                          ))}
                        </div>
                      )}
                  </div>
                  <BlogSubscribers isDark />
                </div>
              </div>

            </div>
            {posts?.length > 0 && <BlogByRating posts={posts} />}
            {postsByCategory.length > 0 && (
              <BlogByCategory
                posts={postsByCategory}
                category="Javascript"
                categorySlug="javascript-typescript"
              />
            )}
            <BlogPlatform />
          </div>
        )}
      </>
    );
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return <div>Something went wrong loading the blog. Please try again later.</div>;
  }
}
