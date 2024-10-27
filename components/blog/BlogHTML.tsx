'use client';

import React, { useEffect } from 'react';
import { BlogType } from '@/app/types';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

type BlogHTMLProps = {
  post: BlogType;
};

const BlogHTML = ({ post }: BlogHTMLProps) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [post.content.rendered]);
  return (
    <div className='w-full flex gap-x-5 relative overflow-hidden'>
      <div
        className='blog-html w-full flex flex-col gap-y-5 flex-wrap'
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
};

export default BlogHTML;
