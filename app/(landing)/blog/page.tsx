import { PostItem } from "@/app/types";
import { Metadata } from "next";
import { ssrClient } from "@/lib/apolloClient";
import { getAuthorId } from "@/lib/helpers";
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
  title: "Thnkandgrow | Advanced Web Development Blog",
  description:
    "Explore expert-curated content on modern web development. From in-depth JavaScript tutorials to advanced system design patterns, discover professional insights that will elevate your development skills. Join our community of skilled developers sharing knowledge and best practices.",
  keywords:
    "web development blog, javascript tutorials, typescript guides, react patterns, system design, coding best practices, software architecture, web optimization, development tutorials, technical blog",
  openGraph: {
    title: "Thnkandgrow | Advanced Web Development Blog",
    description:
      "Expert-curated content for modern web developers. Advanced tutorials, professional insights, and industry best practices from experienced developers.",
    url: "https://thnkandgrow.com/blog",
    siteName: "Thnkandgrow",
    images: [
      {
        url: "https://d1gj38atnczo72.cloudfront.net/wp-content/uploads/2024/04/18114102/cropped-thnkandgrow-logo-192x192.jpg",
        width: 192,
        height: 192,
        alt: "Thnkandgrow Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thnkandgrow | Web Development Excellence",
    description:
      "Discover expert insights and advanced tutorials in modern web development. Level up your skills with our comprehensive guides.",
    creator: "@thnkandgrow",
    images: ["https://d1gj38atnczo72.cloudfront.net/wp-content/uploads/2024/04/18114102/cropped-thnkandgrow-logo-192x192.jpg"],
  },
};

export default async function BlogPage({
  searchParams }: {
    searchParams: Promise<{ [key: string]: string }>
  }) {

  const searchContent = (await searchParams).s

  try {
    const [posts, jsPosts] = await Promise.all([
      ssrClient.query({
        query: POSTS_QUERY,
        variables: {
          author: getAuthorId(),
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
      ssrClient.query({
        query: GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY,
        variables: {
          category: "javascript-typescript",
          author: getAuthorId(),
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

    const postsData: PostItem[] = posts?.data?.posts?.nodes || [];
    const postsByCategory: PostItem[] = jsPosts?.data?.posts?.nodes || [];

    if (!postsData.length) {
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
          <BlogSearch content={searchContent} />
        ) : (
          <div className="relative">
            <div className="bg-dark text-white min-h-screen overflow-hidden">
              <div className="fade-in-start max-container-centre py-2 px-5 lg:py-10">
                <div className="relative blog-hero flex flex-col">
                  <div className="flex flex-col lg:flex-row w-full gap-x-10">
                    {postsData[0] && <BlogFeatured post={postsData[0]} />}
                    <div className="flex flex-col w-full lg:w-1/2 gap-5">
                      {postsData?.slice(1, 4)?.map((post, index) => (
                        <BlogItem post={post} key={post.uri || index} isDark />
                      ))}
                    </div>
                  </div>
                  <BlogSubscribers isDark />
                </div>
              </div>
            </div>
            <BlogByRating posts={postsData} />
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
