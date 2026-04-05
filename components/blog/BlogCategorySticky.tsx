"use client";

import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  categories: any[];
};

const BlogCategorySticky = ({ categories }: Props) => {
  const pathname = usePathname();
  const isDark = pathname === "/blog";

  const activeSlug = pathname.startsWith("/blog/category/")
    ? pathname.replace("/blog/category/", "")
    : null;

  return (
    <div
      className={clsx(
        "hidden xl:block sticky top-[60px] z-[48] w-full h-[48px]",
        "border-b overflow-hidden",
        isDark
          ? "bg-[#0d1117] border-fg-border/60"
          : "bg-bg-default border-fg-border/40",
      )}
    >
      <div
        className={clsx(
          "h-full flex flex-nowrap items-center overflow-x-auto scrollbar-none gap-x-1 px-6 mx-auto",
          isDark
            ? "max-w-7xl 2xl:max-w-screen-2xl"
            : "max-w-[1200px] 2xl:max-w-screen-2xl",
        )}
      >
        {categories?.map((category: any) => {
          const isActive = activeSlug === category.slug;
          return (
            <Link
              key={category.slug}
              href={`/blog/category/${category.slug}`}
              className={clsx(
                "relative shrink-0 px-3 h-[48px] flex items-center",
                "font-mono text-[11px] tracking-[0.08em] uppercase transition-colors duration-150 whitespace-nowrap",
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-t-full",
                isActive
                  ? "text-fg-default after:bg-gradient-to-r after:from-[#00c6ff] after:to-[#0072ff]"
                  : "text-fg-muted hover:text-fg-default after:bg-transparent",
              )}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCategorySticky;
