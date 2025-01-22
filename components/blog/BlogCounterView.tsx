"use client";

import client from "@/lib/apolloClient";
import React, { useEffect, useState } from "react";
import { HiOutlineEye } from "react-icons/hi";

interface BlogCounterViewProps {
  view: number;
}

const BlogCounterView = ({ view }: BlogCounterViewProps) => {
  return (
    <div className="flex items-center gap-1">
      <HiOutlineEye className="inline-block text-base mr-2" />
      <p className="text-fg-muted tracking-wide font-thin">{view} Views</p>
    </div>
  );
};

export default BlogCounterView;
