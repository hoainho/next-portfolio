import { PostItem } from '@/app/types';
import { formatDate } from '@/utils/formatDate';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type PostItemType = {
  post: PostItem;
  isDark?: boolean;
  isReverse?: boolean;
};

const BlogItem = ({ post, isDark = false, isReverse = false }: PostItemType) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={clsx(
        'group w-full flex flex-col gap-x-5 gap-3 cursor-pointer py-5 [&:not(:last-child)]:border-b lg:first:pt-0',
        !isReverse ? 'sm:flex-row md:first:pt-10' : 'first:pt-10',
        isDark ? 'border-fg-border' : 'border-tertiary'
      )}
    >
      <div
        className={clsx('flex h-fit overflow-hidden rounded-sm', 'w-full lg:max-w-fit lg:min-w-fit',
          !isReverse ? 'min-w-48 max-w-48' : ''
        )}
      >
        <Image
          src={decodeURIComponent(post.featuredImage.node.sourceUrl)}
          alt={post.featuredImage.node.altText}
          title={post.title}
          width={24}
          height={24}
          className={clsx(
            'rounded-sm w-full h-fit object-contain scale-100 group-hover:scale-105 duration-500 transition-all ease-in-out',
            !isReverse ? 'lg:max-w-48' : ''
          )}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <h3 className='text-sm text-gradient-purple-coral-dark w-fit'>
          {post.categories.nodes[0].name}
        </h3>
        <h2 className='text-lg font-bold text-inherit line-clamp-2 group-hover:underline group-hover:text-link duration-200 transition-all ease-in-out'>
          {post.title}
        </h2>
        <div
          className='text-sm text-fg-subtle line-clamp-4'
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
        <div className='flex gap-x-2 items-center'>
          <p className='font-mono font-semibold text-sm'>{post.author.node.name}</p> •
          <p className='font-mono font-normal text-sm text-fg-subtle'>
            {formatDate(post.date)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
