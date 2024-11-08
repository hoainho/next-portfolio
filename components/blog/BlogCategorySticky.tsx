import { BlogType } from '@/app/types';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

type Props = {
  post: BlogType;
  categoriesFilter: any[];
};

const BlogCategorySticky = ({ post, categoriesFilter }: Props) => {
  return (
    <div className='w-full max-w-[1200px] bg-bg-default flex flex-wrap justify-between items-center gap-12 px-12'>
      {categoriesFilter?.slice(0, 7)?.map((category: any) => (
        <div key={category.name} className='group p-2 py-2 flex gap-2'>
          <div className='w-full h-full'>
            <p className='text-white flex gap-2 cursor-pointer hover:underline'>
              {category.name}
              {category.children.nodes.length ? <MdKeyboardArrowDown className='inline-block' /> : null}
            </p>
            {category.children.nodes.length ? (
              <div
                className={`max-w-[1200px] select-all invisible opacity-0 z-10 bg-white text-primary rounded-lg p-5 -translate-x-1/2 absolute w-full h-auto 
                                top-0 left-1/2 translate-y-20 gap-2 transition-opacity delay-100 duration-200 ease-in-out
                                group-hover:flex group-hover:opacity-100 group-hover:select-none group-hover:visible group-hover:translate-y-10 group-hover:transition-all group-hover:delay-100 group-hover:duration-200 group-hover:ease-in-out
                              `}
                
              >
                <div className='w-full flex flex-col gap-y-2 items-center justify-center'>
                  <div className='w-full flex flex-col gap-y-2 items-start justify-center px-2'>
                    <div className='flex gap-x-2 items-center cursor-pointer'>
                      <p className='text-md font-semibold hover:underline'>{category.name}</p>
                      <FaArrowRight className='inline-block size-3' />
                    </div>
                    <p
                      className='flex gap-2 text-sm text-fg-subtle [&>img]:w-[70px] [&>img]:h-[70px]'
                      dangerouslySetInnerHTML={{ __html: category.description }}
                    />
                  </div>
                  <div className='grid grid-cols-2 grid-flow-row gap-4'>
                    {category.children.nodes.map((child: any) => (
                      <div key={child.name} className='p-2 cursor-pointer'>
                        <p className='hover:underline text-md font-semibold'>{child.name}</p>
                        <div
                          className='text-sm text-fg-subtle'
                          dangerouslySetInnerHTML={{ __html: child.description }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className='max-w-[300px] w-fit p-5 flex flex-col gap-y-2 items-center justify-center'>
                  <Image
                    width={250}
                    height={200}
                    src={post.yoast_head_json?.og_image?.[0].url}
                    alt={post.yoast_head_json?.og_image?.[0].type ?? post.yoast_head_json.title}
                    title={post.yoast_head_json?.og_title}
                    className='aspect-[4/2.4] rounded-md z-1'
                  />
                  <h3 className='text-primary font-bold text-md cursor-pointer hover:underline'>
                    {post.title.rendered}
                  </h3>
                  <div className='text-sm text-fg-subtle' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCategorySticky;
