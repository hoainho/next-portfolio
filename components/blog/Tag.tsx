import clsx from "clsx";
import Link from "next/link";
import * as React from "react";

export function TagDetail({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"a">) {
  
  return (
    <Link
      href={`/blog/tags/${children}`}
      className={clsx(
        className,
        "border rounded-full px-4 text-center text-[14px] text-fg-default font-medium font-mono",
        "without-style w-fit text-primary hover:text-active",
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default function Tag({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={clsx(
        className,
        "inline-block rounded-md px-1.5 py-0.5 font-medium transition-colors",
        "bg-gray-100 text-gray-700 hover:text-black disabled:bg-gray-200 disabled:text-gray-300",
        "dark:bg-gray-700 dark:text-gray-200 dark:hover:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-500",
        "focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed",
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function SkipNavTag({
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <>
      <Link
        href="#skip-tags"
        className={clsx(
          "inline-block rounded-md px-1.5 py-0.5 font-medium transition",
          "bg-gray-100 text-gray-700 hover:text-black disabled:bg-gray-200 disabled:text-gray-300",
          "dark:bg-gray-700 dark:text-gray-200 dark:hover:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-500",
          "focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed",
          "pointer-events-none absolute opacity-0 focus:inline-block focus:translate-y-[1.4rem] focus:opacity-100",
        )}
        {...rest}
      >
        Skip tag
      </Link>
      {children}
      <div id="skip-tags" className="hidden" />
    </>
  );
}
