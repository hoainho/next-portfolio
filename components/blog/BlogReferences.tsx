import { BlogType } from '@/app/types';
import Link from 'next/link';
import React from 'react';

type BlogReferenceProps = {
  posts: BlogType[];
};

const BlogReferences = ({ posts }: BlogReferenceProps) => {
  return (
    <div className='mt-5 flex flex-wrap items-baseline gap-2'>
      <h3 className='text-xl font-bold text-primary mb-4'>References posts</h3>
      {posts.map((post: BlogType) => (
        <div key={post.id} className='flex flex-col items-start justify-start gap-2 border-t border-blog-divider py-2'>
          <Link href={`/blog/v2/${post.id}`} className='text-gradient-purple-coral font-bold text-md mt-5'>{post.title.rendered}</Link>
          <div className='text-fg-muted text-sm' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <p className='text-primary font-mono font-semibold text-sm'>{post.yoast_head_json.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogReferences;
