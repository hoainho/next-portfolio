'use client'

import React, { useEffect } from 'react';
import { BlogType } from '@/app/types';
import hljs from "highlight.js";
import "highlight.js/styles/default.css";

type BlogHTMLProps = {
  post: BlogType;
};

const BlogHTML = ({ post }: BlogHTMLProps) => {
  useEffect(() => {
    hljs.configure({ languages: ["javascript", "typescript", "html", "css", "bash", "json", "markdown"] });
    hljs.highlightAll();
  }, [post.content.rendered]);
  return <div className='flex flex-col gap-y-5' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />;
};

export default BlogHTML;
