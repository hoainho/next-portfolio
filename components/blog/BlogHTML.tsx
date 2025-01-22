"use client";

import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

type BlogHTMLProps = {
  content: string;
};

const BlogHTML = ({ content }: BlogHTMLProps) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [content]);
  return (
    <div className='w-full flex gap-x-5 relative overflow-hidden'>
      <div
        className='blog-html w-full flex flex-col gap-y-5 flex-wrap'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default BlogHTML;
