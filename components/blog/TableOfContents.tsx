'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
}

interface Props {
  headings: TOCItem[];
}

export default function TableOfContents({ headings }: Props) {
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
    <aside
      className='table-of-content hidden xl:block sticky top-[112px] h-[calc(100vh-40px)] w-64 overflow-y-auto p-2 rounded-lg bg-gradient-to-br from-indigo-100 via-indigo-50 to-transparent shadow-lg'
    >
      <h3 className='text-xl font-bold text-indigo-700 mb-4'>Table of Contents</h3>
      <ul className='space-y-3'>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block p-2 rounded-md transition-all duration-300 ${
                activeId === heading.id
                  ? 'bg-indigo-700 !text-white font-semibold shadow-lg'
                  : 'text-indigo-600 hover:bg-indigo-700 hover:text-white hover:shadow-md'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
