'use client';
import { useHeadings } from '@/hooks/useHeading';
import React from 'react';
import TableOfContents from './TableOfContents';
import { BlogType } from '@/app/types';

type Props = {
  referencePosts: BlogType[];
};

const GenerateTableOfContent = ({ referencePosts }: Props) => {
  const headings = useHeadings();
  return <TableOfContents headings={headings} referencePosts={referencePosts} />;
};

export default GenerateTableOfContent;
