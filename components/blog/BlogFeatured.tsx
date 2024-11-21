import { PostItem } from '@/app/types';
import { formatDate } from '@/utils/formatDate';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import ImageLoader from '../loader/ImageLoader';

type BlogFeaturedProps = {
  post: PostItem;
  isFullWidth?: boolean;
};

const BlogFeatured = ({ post, isFullWidth = false }: BlogFeaturedProps) => {
  return !isFullWidth ? (
    <Link
      href={`/blog/${post.slug}`}
      className={clsx(
        'group w-full flex flex-col gap-3 cursor-pointer border-b border-fg-border py-4',
        'lg:w-1/2 lg:border-none lg:py-0'
      )}
    >
      <div className='w-full h-fit overflow-hidden rounded-sm'>
        <ImageLoader
          width={48}
          height={48}
          src={decodeURIComponent(post.featuredImage.node.sourceUrl)}
          alt={post.title}
          className='w-full h-fit object-cover scale-100 group-hover:scale-105 duration-500 transition-all ease-in-out'
        />
      </div>
      <h3 className='text-sm text-gradient-purple-coral-dark w-fit'>{post.categories.nodes[0].name}</h3>
      <h2 className='text-4xl font-bold text-white group-hover:underline group-hover:text-link duration-200 transition-all ease-in-out'>
        {post.title}
      </h2>
      <div className='text-sm text-fg-subtle' dangerouslySetInnerHTML={{ __html: post.excerpt }} />

      <div className='flex gap-x-2 items-center'>
        <ImageLoader
          width={24}
          height={24}
          src={post.author.node.avatar.url}
          alt='avatar'
          className='rounded-full object-cover w-6 h-6 '
        />
        <Link href={`/blog/author/${post.author.node.slug}`} className='font-mono font-semibold text-sm'>
          {post.author.node.name}
        </Link>
        •
        <p className='font-mono font-normal text-sm'> {formatDate(post.date)}</p>
      </div>
    </Link>
  ) : (
    <div className='py-5'>
      <div
        className={clsx(
          'group w-full flex flex-col md:flex-row-reverse gap-x-5 gap-3 cursor-pointer py-5 [&:not(:last-child)]:border-b lg:first:pt-0'
        )}
      >
        <span className={clsx('flex h-fit overflow-hidden rounded-sm', 'w-full md:w-[60%] lg:max-w-[60%] lg:min-w-[60%]')}>
          <Link href={`/blog/${post.slug}`}>
            <ImageLoader
              src={decodeURIComponent(post.featuredImage.node.sourceUrl)}
              alt={post.featuredImage.node.altText}
              width={24}
              height={24}
              className={clsx(
                'rounded-sm w-full h-fit object-contain scale-100 group-hover:scale-105 duration-500 transition-all ease-in-out'
              )}
            />
          </Link>
        </span>
        <span className='flex flex-col gap-3'>
          <h3 className='text-sm text-gradient-purple-coral w-fit'>{post.categories.nodes[0].name}</h3>
          <Link
            href={`/blog/${post.slug}`}
            className='text-lg font-bold text-inherit line-clamp-2 group-hover:underline group-hover:text-active peer-hover:no-underline duration-200 transition-all ease-in-out'
          >
            {post.title}
          </Link>
          <span className='text-sm text-fg-subtle line-clamp-4' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          <span className='flex gap-x-2 items-center'>
            <ImageLoader
              width={24}
              height={24}
              src={post.author.node.avatar.url}
              alt='avatar'
              className='rounded-full object-cover w-6 h-6 '
            />
            <Link
              href={`/blog/author/${post.author.node.slug}`}
              className='font-mono font-semibold text-sm hover:underline hover:text-active duration-200 transition-all ease-in-out peer'
            >
              {post.author.node.name}
            </Link>
            •<p className='font-mono font-normal text-sm text-fg-subtle'>{formatDate(post.date)}</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default BlogFeatured;
