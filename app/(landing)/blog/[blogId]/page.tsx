import { BlogType } from '@/app/types';
import React from 'react';
import { HiCalendar, HiOutlineClock, HiUserCircle } from 'react-icons/hi';
import { format } from 'date-fns';
import './style.scss';
import BlogHTML from '@/components/blog/BlogHTML';
import ScrollToTop from '@/components/buttons/ButtonScrollToTop';
import GenerateTableOfContent from '@/components/blog/GenerateTableOfContent';
import Seo from '@/components/blog/Seo';

type BlogDetailProps = {
  params: {
    blogId: string;
  };
  searchParams: {
    blogId: string;
  };
};

const BlogDetail = async ({ params }: BlogDetailProps) => {
  const url = process.env.NEXT_PUBLIC_BLOG_API;

  const getBlogDetail = await fetch(`${url}/posts/${params.blogId}?author=3`, {
    next: { revalidate: +(process.env.NEXT_PUBLIC_REVALIDATE_POSTS || 3600) },
  });

  if (getBlogDetail.status === 404) {
    return (
      <div className='absolute top-1/2 right-1/2 translate-x-1/2 flex flex-col justify-center items-center gap-x-5'>
        <span className='font-bold text-[60px]'>404</span>
        <h1 className='flex justify-center items-center text-xl'>Post not found</h1>
      </div>
    );
  }

  const post: BlogType = await getBlogDetail.json();

  const metaOG = {
    templateTitle: post?.title?.rendered,
    title: post?.yoast_head_json?.og_title,
    description: post?.yoast_head_json?.og_description,
    image: post?.yoast_head_json?.og_image[0]?.url,
    url: post?.yoast_head_json?.og_url,
    tags: post?.yoast_head_json?.schema?.['@graph']?.[0].keywords?.join(', '),
    isBlog: true,
  };
  return (
    <div className='blog my-10'>
      <Seo {...metaOG} />
      <div className='max-container-blog'>
        <h1 className='font-extrabold text-3xl'>{post.title.rendered}</h1>
        <div className='py-5 border-y flex justify-between items-start mb-2 mt-4 text-sm text-gray-600 dark:text-gray-300'>
          <div className='flex items-center gap-1'>
            <HiUserCircle className='inline-block text-base' />
            <span className='text-primary'>{post.yoast_head_json.author}</span>
          </div>
          <div className='flex items-center gap-1'>
            <HiCalendar className='inline-block text-base' />
            <span className='text-gray-800 dark:text-gray-100'>
              {format(new Date(post.modified ?? post.date), 'MMMM dd, yyyy')}
            </span>
          </div>

          <div className='flex items-center gap-1'>
            <HiOutlineClock className='inline-block text-base' />
            <p>{post.yoast_head_json.twitter_misc['Est. reading time']}</p>
          </div>
        </div>
        <div className='flex gap-3'>
          <BlogHTML post={post} />
          <GenerateTableOfContent />
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default BlogDetail;
