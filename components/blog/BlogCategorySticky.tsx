import { PostItem } from '@/app/types';
import { GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY } from '@/graphql/queries/post.query';
import client from '@/lib/apolloClient';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ImageLoader from '../loader/ImageLoader';
import Link from 'next/link';

type Props = {
  post?: PostItem;
  categoriesFilter: any[];
  isDark?: boolean;
};

const BlogCategorySticky = async ({ categoriesFilter, isDark = false }: Props) => {
  const categoriesReq = categoriesFilter.map(async (category) => {
    if (category.children.nodes.length) {
      const fetchPost = await client.query({
        query: GET_POSTS_BY_CATEGORY_AND_AUTHOR_QUERY,
        variables: { category: category.slug, author: 3, first: 1 },
      });

      const post: PostItem = fetchPost.data.posts.nodes[0];
      return { ...category, post };
    }
    return category;
  });

  const categories = await Promise.all(categoriesReq);

  return (
    <div
      className={clsx(
        'hidden sticky top-0 w-full h-fit xl:flex justify-center items-center',
        'border-b border-separate border-fg-border z-20',
        isDark ? 'bg-dark border-fg-border' : 'bg-bg-default border-overlay'
      )}
    >
      <div
        className={clsx(
          'w-full flex flex-wrap justify-between items-center gap-12 mx-auto',
          isDark ? 'bg-dark max-w-7xl px-0' : 'max-w-[1200px] px-12 bg-bg-default'
        )}
      >
        {categories?.slice(0, 7)?.map((category: any) => (
          <div key={category.name} className='group p-2 py-4 flex gap-2'>
            <div className='w-full h-full'>
              <p className='text-white flex gap-2 cursor-pointer hover:underline'>
                <Link className='without-style no-underline' href={`/blog/category/${category.slug}`}>
                  {category.name}
                </Link>
                {category.children.nodes.length ? <MdKeyboardArrowDown className='inline-block' /> : null}
              </p>
              {category.children.nodes.length ? (
                <div
                  className={`max-w-[1200px] select-all invisible opacity-0 z-10 bg-white text-primary rounded-lg p-5 -translate-x-1/2 absolute w-full h-auto 
                                top-0 left-1/2 translate-y-20 gap-2 transition-opacity delay-100 duration-200 ease-in-out
                                group-hover:flex group-hover:opacity-100 group-hover:select-none group-hover:visible group-hover:translate-y-[56px] group-hover:transition-all group-hover:delay-100 group-hover:duration-200 group-hover:ease-in-out
                              `}
                >
                  <div className='w-full flex flex-col gap-y-2 items-center justify-center'>
                    <div className='w-full flex flex-col gap-y-2 items-start justify-center px-2'>
                      <div className='flex gap-x-2 items-center cursor-pointer'>
                        <Link href={`/blog/category/${category.slug}`} className='without-style no-underline text-md font-semibold hover:underline'>
                          {category.name}
                        </Link>
                        <FaArrowRight className='inline-block size-3' />
                      </div>
                      <div
                        className='flex gap-2 text-sm text-fg-subtle [&>img]:w-[70px] [&>img]:h-[70px]'
                        dangerouslySetInnerHTML={{ __html: category.description }}
                      />
                    </div>
                    <div className='grid grid-cols-2 grid-flow-row gap-4'>
                      {category.children.nodes.map((child: any) => (
                        <div key={child.name} className='p-2 cursor-pointer'>
                          <Link href={`/blog/category/${child.slug}`} className='without-style no-underline hover:underline text-md font-semibold'>
                            {child.name}
                          </Link>
                          <div
                            className='text-sm text-fg-subtle'
                            dangerouslySetInnerHTML={{ __html: child.description }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='max-w-[300px] w-fit p-5 flex flex-col gap-y-2 items-center justify-center'>
                    <Link href={`/blog/${category.post.slug}`}>
                      <ImageLoader
                        width={250}
                        height={200}
                        src={category.post.featuredImage.node.sourceUrl}
                        alt={category.post.featuredImage.node.altText}
                        className='aspect-[4/2.4] rounded-md z-1'
                      />

                      <h3 className='text-primary font-bold text-md cursor-pointer hover:underline'>
                        {category.post.title}
                      </h3>
                    </Link>
                    <div
                      className='text-sm text-fg-subtle'
                      dangerouslySetInnerHTML={{ __html: category.post.excerpt }}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCategorySticky;
