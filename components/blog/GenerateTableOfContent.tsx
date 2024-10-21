'use client';
import { useHeadings } from '@/hooks/useHeading';
import React from 'react';
import TableOfContents from './TableOfContents';

type Props = {};

const GenerateTableOfContent = (props: Props) => {
  const headings = useHeadings();
  return <TableOfContents headings={headings} />;
};

export default GenerateTableOfContent;
