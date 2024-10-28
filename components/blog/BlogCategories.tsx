import React from 'react';
import { TagDetail } from './Tag';

type BlogBottomCategoriesProps = {
  tags: string[];
};

const BlogBottomCategories = ({ tags }: BlogBottomCategoriesProps) => {
  return (
    <div className='flex flex-col gap-y-5 mt-10'>
      <hr className='bg-[#545df0] bg-[linear-gradient(180deg, #096bde 0.87%, #8250df 75.12%)] w-[20px] h-[5px]' />
      <div className='flex gap-3 items-center flex-wrap'>
        <h6>Tags: </h6>
        <div className='flex gap-3 flex-wrap'>{tags.map((tag: string) => <TagDetail key={tag}>{tag}</TagDetail>)}</div>
      </div>
    </div>
  );
};

export default BlogBottomCategories;
