"use client";

import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
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

  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLButtonElement>(null);

  const [visibleCount, setVisibleCount] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const ruler = measureRef.current;
      if (!container || !ruler) return;

      const availableWidth = container.offsetWidth;
      const MORE_W = 72;
      const GAP = 2;

      const children = Array.from(ruler.children) as HTMLElement[];
      const widths = children.map((el) => el.getBoundingClientRect().width);

      let used = 0;
      let count = 0;

      for (let i = 0; i < widths.length; i++) {
        const next = widths[i] + GAP;
        const isLast = i === widths.length - 1;
        const wouldOverflow =
          used + next > availableWidth - (isLast ? 0 : MORE_W);
        if (wouldOverflow) break;
        used += next;
        count = i + 1;
      }

      setVisibleCount(count);
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [categories]);

  useEffect(() => {
    if (!isOpen) return;
    const handle = (e: MouseEvent) => {
      if (
        !dropdownRef.current?.contains(e.target as Node) &&
        !moreRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [isOpen]);

  const visible =
    visibleCount === null ? categories : categories.slice(0, visibleCount);
  const hidden = visibleCount === null ? [] : categories.slice(visibleCount);
  const hasMore = hidden.length > 0;
  const activeInHidden = hidden.some((c) => c.slug === activeSlug);

  const tabCls = (isActive: boolean) =>
    clsx(
      "relative shrink-0 px-4 h-[48px] flex items-center",
      "font-mono text-[11px] tracking-[0.08em] uppercase whitespace-nowrap select-none",
      "transition-colors duration-150",
      "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-t-full",
      "after:transition-opacity after:duration-200",
      isActive
        ? isDark
          ? "text-white after:bg-gradient-to-r after:from-[#00c6ff] after:to-[#0072ff] after:opacity-100"
          : "text-fg-default after:bg-gradient-to-r after:from-[#00c6ff] after:to-[#0072ff] after:opacity-100"
        : isDark
          ? "text-[#768390] hover:text-[#adbac7] after:opacity-0"
          : "text-fg-muted hover:text-fg-default after:opacity-0",
    );

  return (
    <div
      className={clsx(
        "hidden xl:block sticky top-[60px] z-[48] w-full",
        isDark
          ? "bg-[#0d1117] border-b border-[#21262d]"
          : "bg-bg-default border-b border-fg-border/40",
      )}
    >
      <div
        ref={measureRef}
        aria-hidden="true"
        className="absolute top-0 left-0 h-0 overflow-hidden flex flex-nowrap pointer-events-none"
        style={{ visibility: "hidden", paddingLeft: "24px" }}
      >
        {categories.map((cat) => (
          <span
            key={cat.slug}
            className="shrink-0 px-4 font-mono text-[11px] tracking-[0.08em] uppercase whitespace-nowrap"
          >
            {cat.name}
          </span>
        ))}
      </div>

      <div
        ref={containerRef}
        className={clsx(
          "relative h-[48px] mx-auto flex items-center px-6",
          isDark
            ? "max-w-7xl 2xl:max-w-screen-2xl"
            : "max-w-[1200px] 2xl:max-w-screen-2xl",
        )}
      >
        <div className="flex items-center gap-x-0.5">
          {visible.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog/category/${cat.slug}`}
              className={tabCls(activeSlug === cat.slug)}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="relative ml-1 flex items-center shrink-0">
            <button
              ref={moreRef}
              onClick={() => setIsOpen((v) => !v)}
              className={clsx(
                "relative flex items-center gap-1 px-3 h-[48px]",
                "font-mono text-[11px] tracking-[0.08em] uppercase whitespace-nowrap select-none",
                "transition-colors duration-150",
                "after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:rounded-t-full",
                "after:transition-opacity after:duration-200",
                activeInHidden
                  ? isDark
                    ? "text-white after:bg-gradient-to-r after:from-[#00c6ff] after:to-[#0072ff] after:opacity-100"
                    : "text-fg-default after:bg-gradient-to-r after:from-[#00c6ff] after:to-[#0072ff] after:opacity-100"
                  : isDark
                    ? "text-[#768390] hover:text-[#adbac7] after:opacity-0"
                    : "text-fg-muted hover:text-fg-default after:opacity-0",
              )}
            >
              {hidden.length} more
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={clsx(
                  "opacity-60 transition-transform duration-200",
                  isOpen ? "-rotate-180" : "rotate-0",
                )}
              >
                <path
                  d="M1.5 3.5L5 6.5L8.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {isOpen && (
              <div
                ref={dropdownRef}
                className={clsx(
                  "absolute top-[calc(100%+2px)] right-0 z-50",
                  "min-w-[180px] py-1 rounded-lg overflow-hidden",
                  isDark
                    ? "bg-[#161b22] border border-[#30363d] shadow-[0_8px_24px_rgba(1,4,9,0.8)]"
                    : "bg-white border border-fg-border/20 shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
                )}
              >
                {hidden.map((cat) => {
                  const isActive = activeSlug === cat.slug;
                  return (
                    <Link
                      key={cat.slug}
                      href={`/blog/category/${cat.slug}`}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "flex items-center gap-2 px-3 py-2",
                        "font-mono text-[11px] tracking-[0.08em] uppercase whitespace-nowrap",
                        "transition-colors duration-100",
                        isActive
                          ? isDark
                            ? "text-white bg-white/[0.06]"
                            : "text-fg-default bg-black/[0.04]"
                          : isDark
                            ? "text-[#768390] hover:text-[#adbac7] hover:bg-white/[0.04]"
                            : "text-fg-muted hover:text-fg-default hover:bg-black/[0.03]",
                      )}
                    >
                      <span
                        className={clsx(
                          "w-[5px] h-[5px] rounded-full shrink-0",
                          isActive
                            ? "bg-[#00c6ff]"
                            : isDark
                              ? "bg-[#21262d]"
                              : "bg-fg-border/50",
                        )}
                      />
                      {cat.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCategorySticky;
