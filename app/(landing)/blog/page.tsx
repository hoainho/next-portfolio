import Seo from '@/components/blog/Seo';
import { BlogCategoryI, BlogType } from '@/app/types';
import BlogFilter from '@/components/blog/BlogFilter';

export default async function BlogPage() {
  const url = process.env.NEXT_PUBLIC_BLOG_API;

  const getPosts = await fetch(`${url}/posts?author=3`);

  const posts: BlogType[] = await getPosts.json();

  const getAllCategories = await fetch(`${url}/categories`);

  const categories: BlogCategoryI[] = await getAllCategories.json();

  return (
    <div className='fade-in-start max-container'>
      <Seo templateTitle="Blog" description="Thoughts, mental models, and tutorials about front-end development." />
      <div className='layout pt-6 pb-12'>
        <h1 className='head-text'>
          My <span className='blue-gradient_text drop-shadow font-semibold'>Blog</span>
        </h1>

        <p className='text-white-600 dark:text-gray-400 mt-4 mb-6 leading-relaxed block-container'>
          Welcome to <strong>Nick's Blog</strong>, a space where ideas, insights, and innovations come to life! Whether
          you’re a tech enthusiast, a curious learner, or someone looking for practical tips on development, we have
          something for you. Explore expert advice on modern web technologies, the latest in coding trends, and best
          practices to elevate your projects.
        </p>

        <BlogFilter categories={categories} posts={posts} />
      </div>
    </div>
  );
}
