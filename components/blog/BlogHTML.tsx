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
    <div className='w-full flex gap-x-5 relative overflow-hidden rounded-lg bg-gradient-to-bl from-indigo-200 via-indigo-50 to-transparent shadow-lg p-5'>
      <div className='absolute inset-0 bg-gradient-to-br from-transparent to-black/10 opacity-30'></div>
      <div className='blog-html w-full flex flex-col gap-y-5 flex-wrap' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default BlogHTML;
