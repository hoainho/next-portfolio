'use client';

import { INCREMENT_POST_VIEWS_MUTATION } from '@/graphql/mutations/post.mutation';
import client from '@/lib/apolloClient';
import React, { useEffect, useState } from 'react';
import { HiOutlineEye } from 'react-icons/hi';

interface BlogCounterViewProps {
  postId: number;
  viewCount: number;
}

const BlogCounterView = ({ postId, viewCount }: BlogCounterViewProps) => {
  const [views, setViews] = useState(viewCount);
  
  useEffect(() => {
    const incrementViews = async () => {
      try {
        const responseIncrement = await client.mutate({
          mutation: INCREMENT_POST_VIEWS_MUTATION,
          variables: { postId: postId },
        });
        setViews(responseIncrement.data.incrementPostViews.postViews.total);
      } catch (error) {
        console.error('Failed to increment view count:', JSON.stringify(error));
      }
    };
    incrementViews();
  }, [postId]);

  return (
    <div className='flex items-center gap-1'>
      <HiOutlineEye className='inline-block text-base mr-2' />
      <p className='text-fg-muted tracking-wide font-thin'>{views} Views</p>
    </div>
  );
};

export default BlogCounterView;
