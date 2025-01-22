import clsx from "clsx";
import * as React from "react";

type AccentType = {
  isActive?: boolean;
} & React.ComponentPropsWithoutRef<"span">;

export default function Accent({
  children,
  className,
  isActive = false,
}: AccentType) {
  return (
    <span
      className={clsx(
        className,
        "p-2 rounded-md text-sm font-medium",
        "transition-colors bg-[#d3d3d3]",
        "bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40",
        "dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent",
        isActive ? "btn-back-blue" : "",
      )}
    >
      {children}
    </span>
  );
}
