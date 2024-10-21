import clsx from 'clsx';
import { format } from 'date-fns';
import * as React from 'react';
import { HiOutlineClock } from 'react-icons/hi';
import { BlogType } from '@/app/types';
import Image from 'next/image';
import UnstyledLink from './UnstyledLink';
import dynamic from 'next/dynamic';

const Tag = dynamic(() => import('./Tag'), { ssr: false});

type BlogCardProps = {
  post: BlogType;
} & React.ComponentPropsWithoutRef<'li'>;

export default function BlogCard({ post, className, onClick }: BlogCardProps) {
  const tags = post.yoast_head_json.schema?.['@graph']?.[0].articleSection;
  return (
    <li
      className={clsx(
        'w-full rounded-md border border-gray-300 bg-white dark:border-gray-600 dark:bg-dark',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow overflow-hidden',
        className
      )}
      onClick={onClick}
    >
      <UnstyledLink
        className='block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
        href={`/blog/${post.id}`}
      >
        <div className='relative'>
          <div className=''>
            <Image
              width={post.yoast_head_json?.og_image?.[0]?.width ?? 1200}
              height={Math.max(post.yoast_head_json?.og_image?.[0]?.height ?? 480)}
              unoptimized
              src={post.yoast_head_json?.og_image?.[0].url}
              alt={post.yoast_head_json?.og_image?.[0].type ?? post.yoast_head_json.title}
              title={post.yoast_head_json?.og_title}
              className='aspect-[4/2.4]'
              onError={(e) => { e.currentTarget.src = '/icons/logo.jpeg'; }}
            />
          </div>
          <div
            className={
              'block-container w-full px-4 py-2 mt-2 flex flex-wrap justify-end gap-x-2 gap-y-1 text-sm text-black dark:text-gray-100'
            }
          >
            {tags?.slice(0, 2)?.map((category: string, index: number) => (
              <Tag
                tabIndex={-1}
                className={`btn-back-blue bg-opacity-80 dark:!bg-opacity-60`}
                key={`${category}-${index}`}
              >
                {category}
              </Tag>
            ))}
            {tags?.slice(2)?.length ? (
              <>
                <Tag tabIndex={-1} className={`relative group btn-back-blue bg-opacity-80`}>
                  +{tags.length - 2}
                  <div
                    className={`absolute right-0 flex flex-col mt-2 gap-y-1 
                        transition-all duration-500 delay-200 ease-in-out 
                        opacity-0 translate-x-24
                        group-hover:opacity-100 group-hover:translate-x-0`}
                  >
                    {tags?.slice(2)?.map((category: string, index: number) => (
                      <Tag
                        tabIndex={-1}
                        className={`btn-back-blue`}
                        key={`${category}-${index}`}
                      >
                        {category}
                      </Tag>
                    ))}
                  </div>
                </Tag>
              </>
            ) : null}
          </div>
        </div>
        <div className='p-4 flex flex-col justify-between'>
          <h4 className='text-gray-800 dark:text-gray-100 font-bold'>{post.title.rendered}</h4>
          <div className='flex flex-col gap-y-5'>
            <div className='mt-2 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300'>
              <div className='flex items-center gap-1'>
                <div className='line-clamp-3' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              </div>
            </div>
            <div className='flex justify-between items-center mb-2 mt-4 text-sm text-gray-600 dark:text-gray-300'>
              <span className='font-bold text-gray-800 dark:text-gray-100'>
                {format(new Date(post.modified ?? post.date), 'MMMM dd, yyyy')}
              </span>

              <div className='flex items-center gap-1'>
                <HiOutlineClock className='inline-block text-base' />
                <p>{post.yoast_head_json.twitter_misc['Est. reading time']}</p>
              </div>
            </div>
          </div>
        </div>
      </UnstyledLink>
    </li>
  );
}
