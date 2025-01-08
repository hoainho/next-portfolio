import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import BlogItem from './BlogItem';
import { PostItem } from '@/app/types';
import BlogFeatured from './BlogFeatured';

interface Props {
  posts: PostItem[];
  category: string;
  categorySlug: string;
}

const BlogByCategory = ({ posts, category = 'Javascript', categorySlug }: Props) => {
  return (
    <div className='bg-dark text-white min-h-screen overflow-hidden'>
      <div className='fade-in-start max-container-centre py-14 px-5 lg:py-10'>
        <div className='flex items-center justify-between py-3 border-t-4 border-t-white border-b border-b-fg-border mb-5'>
          <h3 className='text-2xl font-bold'>{category}</h3>
          <div className='flex gap-x-2 items-center justify-center'>
            <Link href={`/blog/category/${categorySlug}`} className=''>
              More {category} articles
            </Link>
            <FaArrowRight className='text-white' />
          </div>
        </div>
        <div className='relative flex flex-col'>
          <div className='flex flex-col lg:flex-row w-full gap-x-10'>
            <BlogFeatured post={posts[0]} />
            <div className='flex flex-row w-full lg:w-1/2 flex-wrap'>
              {posts.slice(1).map((post, index) => (
                <div key={index} className='w-full lg:w-1/2 px-0 md:px-2'>
                  <BlogItem post={post} isDark isReverse={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogByCategory;
