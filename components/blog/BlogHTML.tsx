'use client';

import React, { useEffect } from 'react';
import { BlogType } from '@/app/types';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

type BlogHTMLProps = {
  post: BlogType;
};

const BlogHTML = ({ post }: BlogHTMLProps) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [post.content.rendered]);
  return (
    <div className='w-full flex gap-x-5 relative overflow-hidden rounded-2xl shadow-lg p-8 mt-4 bg-gradient-to-br from-blue-300 via-purple-200 to-red-200'>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 opacity-30"></div>
      <div className='flex flex-col gap-y-5' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default BlogHTML;
