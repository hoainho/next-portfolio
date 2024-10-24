import { BlogType } from '@/app/types';
import React from 'react';
import { HiCalendar, HiOutlineClock, HiUserCircle } from 'react-icons/hi';
import { format } from 'date-fns';
import BlogHTML from '@/components/blog/BlogHTML';
import ScrollToTop from '@/components/buttons/ButtonScrollToTop';
import GenerateTableOfContent from '@/components/blog/GenerateTableOfContent';
import { Metadata } from 'next';
import './style.scss';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Image from 'next/image';

type BlogDetailProps = {
  params: {
    blogId: string;
  };
  searchParams: {
    blogId: string;
  };
};

const url = process.env.NEXT_PUBLIC_BLOG_API;

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  try {
    const res = await fetch(`${url}/posts/${params.blogId}`);
    if (res.status === 404) {
      return { title: 'Post Not Found' };
    }

    const post: BlogType = await res.json();
    return {
      title: `${post.yoast_head_json?.og_title || post.title.rendered} | Nick's Blog`,
      description: post.yoast_head_json?.og_description || '',
      openGraph: {
        title: post.yoast_head_json?.og_title,
        description: post.yoast_head_json?.og_description,
        url: post.yoast_head_json?.og_url,
        images: [{ url: post.yoast_head_json?.og_image[0]?.url }],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.yoast_head_json?.og_title,
        description: post.yoast_head_json?.og_description,
        images: post.yoast_head_json?.og_image[0]?.url,
      },
    };
  } catch (error) {
    return { title: `Error fetching post data | Nick's Blog` };
  }
}

const BlogDetail = async ({ params }: BlogDetailProps) => {
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

  let breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ];

  breadcrumbItems = breadcrumbItems.concat({ label: post.title.rendered, href: `/blog/${post.id}` });

  return (
    <div className='blog my-10'>
      <div className='max-container-blog'>
        <Breadcrumb items={breadcrumbItems} />
        <Image
          width={post.yoast_head_json?.og_image?.[0]?.width ?? 1200}
          height={Math.max(post.yoast_head_json?.og_image?.[0]?.height ?? 480)}
          src={post.yoast_head_json?.og_image?.[0].url}
          alt={post.yoast_head_json?.og_image?.[0].type ?? post.yoast_head_json.title}
          title={post.yoast_head_json?.og_title}
          className='aspect-[4/2.4] rounded-xl my-5'
        />
        <h1 className='font-extrabold text-4xl my-10'>{post.title.rendered}</h1>
        <div className='py-5 border-y flex justify-between items-start mt-4 mb-8 text-sm text-gray-600 dark:text-gray-300'>
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
