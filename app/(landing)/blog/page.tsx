import { BlogCategoryI, BlogType } from '@/app/types';
import BlogFilter from '@/components/blog/BlogFilter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nick's Blog | Latest Posts",
  description: "Discover the latest posts and articles on Nick's Blog. Stay updated with trending topics, tips, and insights.",
  keywords: "blog, articles, insights, technology, lifestyle, trends, tips, Nick's Blog, latest posts",
  openGraph: {
    title: "Nick's Blog | Latest Posts",
    description: "Discover the latest posts and articles on Nick's Blog. Stay updated with trending topics, tips, and insights.",
    url: "https://hoainho.info/blog",
    images: [{ url: process.env.NEXT_PUBLIC_LOGO ||
      "https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/logo.jpeg" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nick's Blog | Latest Posts",
    description: "Discover the latest posts and articles on Nick's Blog. Stay updated with trending topics, tips, and insights.",
    images: process.env.NEXT_PUBLIC_LOGO ||
    "https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/logo.jpeg",
  },
};

export default async function BlogPage() {
  const url = process.env.NEXT_PUBLIC_BLOG_API;

  const getPosts = await fetch(`${url}/posts?author=3`, {
    next: { revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS ?? 3600) },
  });

  const posts: BlogType[] = await getPosts.json();

  const getAllCategories = await fetch(`${url}/categories`);

  const categories: BlogCategoryI[] = await getAllCategories.json();

  return (
    <div className='fade-in-start max-container'>
      <div className='layout pt-6 pb-12'>
        <h1 className='head-text'>
          My <span className='blue-gradient_text drop-shadow font-semibold'>Blog</span>
        </h1>

        <p className='text-white-600 dark:text-gray-400 mt-4 mb-6 leading-relaxed block-container'>
          Welcome to{' '}
          <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block'>
            <span className='relative text-white'>
              <strong>Nick's Blog</strong>
            </span>
          </span>
          , a space where ideas, insights, and innovations come to life! Whether you’re a tech enthusiast, a curious
          learner, or someone looking for practical tips on development, we have something for you. Explore expert
          advice on modern web technologies, the latest in coding trends, and best practices to elevate your projects.
        </p>

        <BlogFilter categories={categories} posts={posts} />
      </div>
    </div>
  );
}
