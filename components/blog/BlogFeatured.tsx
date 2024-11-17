import { PostItem } from '@/app/types';
import { formatDate } from '@/utils/formatDate';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type BlogFeaturedProps = {
  post: PostItem;
};

const BlogFeatured = ({ post }: BlogFeaturedProps) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={clsx(
        'group w-full flex flex-col gap-3 cursor-pointer border-b border-fg-border py-4',
        'lg:w-1/2 lg:border-none lg:py-0'
      )}
    >
      <div className='w-full h-fit overflow-hidden rounded-sm'>
        <Image
          src={post.featuredImage.node.srcSet}
          width={48}
          height={48}
          className='w-full h-fit object-cover scale-100 group-hover:scale-105 duration-500 transition-all ease-in-out'
          alt='logo'
        />
      </div>
      <h3 className='text-sm text-gradient-purple-coral-dark w-fit'>{post.categories.nodes[0].name}</h3>
      <h2 className='text-4xl font-bold text-white group-hover:underline group-hover:text-link duration-200 transition-all ease-in-out'>
        {post.title}
      </h2>
      <div className='text-sm text-fg-subtle' dangerouslySetInnerHTML={{ __html: post.excerpt }} />

      <div className='flex gap-x-2 items-center'>
        <Image
          src={post.author.node.avatar.url}
          width={24}
          height={24}
          alt='avatar'
          className='rounded-full object-cover w-6 h-6 '
        />
        <p className='font-mono font-semibold text-sm'>{post.author.node.name}</p> •
        <p className='font-mono font-normal text-sm'> {formatDate(post.date)}</p>
      </div>
    </Link>
  );
};

export default BlogFeatured;
