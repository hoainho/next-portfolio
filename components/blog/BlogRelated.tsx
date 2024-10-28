import { BlogType } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  posts: BlogType[];
};

const BlogRelated = ({ posts }: Props) => {
  return (
    <div className='max-container-blog flex flex-col gap-y-5 mt-16'>
      <h6 className='text-2xl font-bold'>Related Posts</h6>
      <hr className='bg-overlay w-full h-[2px]' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
        {posts.map((post) => (
          <div key={post.id} className='flex flex-col gap-y-2 group cursor-pointer'>
            <Image
              width={post.yoast_head_json?.og_image?.[0]?.width ?? 380}
              height={post.yoast_head_json?.og_image?.[0]?.height ?? 200}
              src={post.yoast_head_json?.og_image?.[0].url}
              alt={post.yoast_head_json?.og_image?.[0].type ?? post.yoast_head_json.title}
              title={post.yoast_head_json?.og_title}
              className='rounded-md max-h-[200px] max-w-[400px] w-full group-hover:scale-[1.02] transition-all duration-300 ease-in-out'
              sizes='(max-width: 400px) 100vw, 400px'
            />
            <div className='flex flex-wrap gap-x-2 text-sm font-bold mt-4'>
              {post.yoast_head_json.schema?.['@graph']?.[0]?.articleSection?.map((keyword: string) => (
                <span
                  key={keyword}
                  className='text-md text-gradient-purple-coral font-semibold'
                >
                  {keyword}
                </span>
              ))}
            </div>
            <h3 className='text-primary font-bold text-lg group-hover:underline group-hover:text-active'>{post.title.rendered}</h3>
            <div className='text-gray-600 dark:text-gray-300 font-public-sans text-sm' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <p className='text-primary font-public-sans text-sm font-bold'> {post.yoast_head_json.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogRelated;
