import { PostItem } from '@/app/types';
import { Metadata } from 'next';
import client from '@/lib/apolloClient';
import BlogItem from '@/components/blog/BlogItem';
import BlogFeatured from '@/components/blog/BlogFeatured';
import BlogSubscribers from '@/components/blog/BlogSubscribers';
import BlogByRating from '@/components/blog/BlogByRating';
import BlogByCategory from '@/components/blog/BlogByCategory';
import {
  POSTS_QUERY,
  GET_CATEGORIES_QUERY,
  GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY,
} from '@/graphql/queries/post.query';
import BlogPlatform from '@/components/blog/BlogPlatform';
import BlogCategorySticky from '@/components/blog/BlogCategorySticky';

export const metadata: Metadata = {
  title: "Nick's Blog | Latest Posts",
  description:
    "Discover the latest posts and articles on Nick's Blog. Stay updated with trending topics, tips, and insights.",
  keywords: "blog, articles, insights, technology, lifestyle, trends, tips, Nick's Blog, latest posts",
  openGraph: {
    title: "Nick's Blog | Latest Posts",
    description:
      "Discover the latest posts and articles on Nick's Blog. Stay updated with trending topics, tips, and insights.",
    url: 'https://hoainho.info/blog',
    images: [{ url: process.env.NEXT_PUBLIC_LOGO || 'https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/logo.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nick's Blog | Latest Posts",
    description:
      "Discover the latest posts and articles on Nick's Blog. Stay updated with trending topics, tips, and insights.",
    images: process.env.NEXT_PUBLIC_LOGO || 'https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/logo.jpeg',
  },
};

export default async function BlogPage() {
  const { data } = await client.query({
    query: GET_CATEGORIES_QUERY,
  });

  const postsResponse = await client.query({
    query: POSTS_QUERY,
    variables: {
      author: 3,
      first: 20,
    },
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });

  const category = 'javascript-typescript';
  const postsByCategoryID = await client.query({
    query: GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY,
    variables: { category, author: 3, first: 10 },
  });

  const categoriesFilter = data.categories.nodes;

  const posts: PostItem[] = postsResponse.data.posts.nodes;

  const postsByCategory = postsByCategoryID.data.posts.nodes;

  return (
    <div className='relative'>
      <BlogCategorySticky categoriesFilter={categoriesFilter} isDark />
      <div className='bg-dark text-white min-h-screen overflow-hidden'>
        <div className='fade-in-start max-container-centre py-2 px-5 lg:py-10'>
          <div className='relative blog-hero flex flex-col'>
            <div className='flex flex-col lg:flex-row w-full gap-x-10'>
              <BlogFeatured post={posts[0]} />
              <div className='flex flex-col w-full lg:w-1/2 gap-5'>
                {posts.slice(1, 4).map((post, index) => (
                  <BlogItem post={post} key={index} isDark />
                ))}
              </div>
            </div>
            <BlogSubscribers isDark />
          </div>
        </div>
      </div>
      <BlogByRating posts={posts} />
      <BlogByCategory posts={postsByCategory} category='Javascript' categorySlug={category} />
      <BlogPlatform />
    </div>
  );
}
