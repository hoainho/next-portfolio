import { PostItem } from '@/app/types';
import Link from 'next/link';
import React from 'react';

type BlogReferenceProps = {
  posts: PostItem[];
};

const BlogReferences = ({ posts }: BlogReferenceProps) => {
  return (
    <div className='mt-5 flex flex-wrap items-baseline gap-2'>
      <h3 className='text-xl font-bold text-primary mb-4'>References posts</h3>
      {posts.map((post: PostItem) => (
        <div key={post.postId} className='flex flex-col items-start justify-start gap-2 border-t border-blog-divider py-2'>
          <Link href={`/blog/${post.slug}`} className='text-gradient-purple-coral font-bold text-md mt-5'>{post.title}</Link>
          <div className='text-fg-muted text-sm' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          <Link href={`/blog/author/${post.author.node.slug}`} className='text-primary font-mono font-semibold text-sm'>
            {post.author.node.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogReferences;
