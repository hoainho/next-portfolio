'use client';

import { useEffect, useState } from 'react';
import BlogReferences from './BlogReferences';
import { PostItem } from '@/app/types';
import Link from 'next/link';

interface TOCItem {
  id: string;
  text: string;
}

interface Props {
  headings: TOCItem[];
  referencePosts: PostItem[];
}

export default function TableOfContents({ headings, referencePosts }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (window) {
      const handleScroll = () => {
        let current: string | null = null;

        headings.forEach((heading) => {
          const element = document.getElementById(heading.id);
          if (element) {
            const { top } = element.getBoundingClientRect();
            if (top <= 100) current = heading.id;
          }
        });

        setActiveId(current);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [headings]);

  return (
    <aside className='table-of-content sticky top-20 h-fit w-56 overflow-y-auto mt-5'>
      <h3 className='text-xl font-bold text-primary mb-4'>Table of Contents</h3>
      <ul className='space-y-2'>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`py-2 px-4 ${
              activeId === heading.id ? 'font-bold rounded-xl bg-[#eff2ff]' : 'font-normal hover:text-indigo-700'
            }`}
          >
            <Link
              href={`#${heading.id}`}
              className={`without-style rounded-[8px] transition-all duration-300 text-primary line-clamp-1`}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
      {referencePosts?.length ? <BlogReferences posts={referencePosts} /> : null}
    </aside>
  );
}
