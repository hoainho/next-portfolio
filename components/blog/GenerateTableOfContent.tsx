'use client';
import { useHeadings } from '@/hooks/useHeading';
import React from 'react';
import TableOfContents from './TableOfContents';
import { PostItem } from '@/app/types';

type Props = {
  referencePosts: PostItem[];
};

const GenerateTableOfContent = ({ referencePosts }: Props) => {
  const headings = useHeadings();
  return <TableOfContents headings={headings} referencePosts={referencePosts} />;
};

export default GenerateTableOfContent;
