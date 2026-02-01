"use client";

import React, { useEffect, useState } from "react";
import { HiOutlineEye } from "react-icons/hi";

interface BlogCounterViewProps {
  postId: number;
  initialView?: number;
}

const BlogCounterView = ({ postId, initialView = 0 }: BlogCounterViewProps) => {
  const [view, setView] = useState(initialView);
  const [hasIncremented, setHasIncremented] = useState(false);

  useEffect(() => {
    if (hasIncremented || !postId) return;

    const incrementView = async () => {
      try {
        const response = await fetch("/api/increment-view", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ postId }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.views) {
            setView(data.views);
          }
        }
      } catch (error) {
        console.error("Failed to increment view:", error);
      }
    };

    incrementView();
    setHasIncremented(true);
  }, [postId, hasIncremented]);

  return (
    <div className="flex items-center gap-1">
      <HiOutlineEye className="inline-block text-base mr-2" />
      <p className="text-fg-muted tracking-wide font-thin">{view} Views</p>
    </div>
  );
};

export default BlogCounterView;
