import { PostItem, TagItem } from '@/app/types';
import Image from 'next/image';
import React from 'react';

type Props = {
  posts: PostItem[];
};

const BlogRelated = ({ posts }: Props) => {
  return (
    <div className='max-container-blog flex flex-col gap-y-5 mt-16'>
      <h6 className='text-2xl font-bold'>Related Posts</h6>
      <hr className='bg-overlay w-full h-[2px]' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
        {posts.map((post) => (
          <div key={post.postId} className='flex flex-col gap-y-2 group cursor-pointer'>
            <Image
              width={380}
              height={200}
              src={decodeURIComponent(post.featuredImage.node.srcSet)}
              alt={post.featuredImage.node.altText ?? post.title}
              title={post.title}
              className='rounded-md max-h-[200px] max-w-[400px] w-full group-hover:scale-[1.02] transition-all duration-300 ease-in-out'
              sizes='(max-width: 400px) 100vw, 400px'
            />
            <div className='flex flex-wrap gap-x-2 text-sm font-bold mt-4'>
              {post.tags.nodes.map((tag: TagItem) => (
                <span
                  key={tag.id}
                  className='text-md text-gradient-purple-coral font-semibold'
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <h3 className='text-primary font-bold text-lg group-hover:underline group-hover:text-active'>{post.title}</h3>
            <div className='text-gray-600 dark:text-gray-300 font-public-sans text-sm' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            <p className='text-primary font-public-sans text-sm font-bold'> {post.author.node.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogRelated;
