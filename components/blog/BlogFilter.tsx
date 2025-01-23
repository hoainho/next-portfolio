"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { BlogCategoryI, BlogType } from "@/app/types";
import SortListbox, { SortOption } from "./SortListbox";
import Tag, { SkipNavTag } from "./Tag";
import Accent from "./Accent";
import { HiCalendar, HiEye } from "react-icons/hi";
import { sortDateFn } from "../utils";
import { getFromSessionStorage } from "@/lib/helper";
import ContentPlaceholder from "./ContentPlaceholder";
import BlogCard from "./BlogCard";
import StyledInput from "../form/StyledInput";

const sortOptions: Array<SortOption> = [
  {
    id: "date",
    name: "Sort by date",
    icon: HiCalendar,
  },
  {
    id: "title",
    name: "Sort by title",
    icon: HiEye,
  },
];

type BlogFilterProps = {
  categories: BlogCategoryI[];
  posts: BlogType[];
};

const BlogFilter = ({ categories, posts }: BlogFilterProps) => {
  const [sortOrder, setSortOrder] = useState<SortOption>(
    sortOptions[Number(getFromSessionStorage("blog-sort"))] ?? sortOptions[0],
  );

  const [search, setSearch] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState(() => [...posts]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const clearSearch = () => setSearch("");

  useEffect(() => {
    const results = posts?.filter(
      (post) =>
        post.title.rendered.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.rendered.toLowerCase().includes(search.toLowerCase()) ||
        search
          .toLowerCase()
          .split(" ")
          .every((category) =>
            post.yoast_head_json.schema?.[
              "@graph"
            ]?.[0].articleSection?.includes(category),
          ),
    );

    if (sortOrder.id === "date") {
      results.sort(sortDateFn);
      sessionStorage.setItem("blog-sort", "0");
    } else if (sortOrder.id === "title") {
      results.sort((a, b) =>
        b?.title.rendered.localeCompare(a?.title.rendered),
      );
      sessionStorage.setItem("blog-sort", "1");
    }

    setFilteredPosts(results);
  }, [search, sortOrder.id]);

  const toggleTag = (tag: string) => {
    // If tag is already there, then remove
    if (search.includes(tag)) {
      setSearch((s) =>
        s
          .split("  ")
          ?.filter((t) => t !== tag)
          ?.join("  "),
      );
    } else {
      // append tag
      setSearch((s) => (s !== "" ? `${s.trim()}  ${tag}` : tag));
    }
  };

  /** Show accent if not disabled and selected  */
  const checkTagged = (category: string) => {
    return (
      categories.some((ct) => ct.name.replaceAll("&amp;", "&") === category) &&
      search.toLowerCase().split("  ").includes(category.toLowerCase())
    );
  };
  return (
    <div className="mt-2 flex flex-wrap items-baseline gap-2">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex justify-between items-start gap-5">
          <StyledInput
            data-fade="2"
            className="relative mt-4"
            placeholder="Search..."
            onChange={handleSearch}
            clearSearch={clearSearch}
            value={search}
            type="text"
          />

          <div className="flex flex-col items-end gap-4 md:flex-row md:items-center">
            <SortListbox
              selected={sortOrder}
              setSelected={setSortOrder}
              options={sortOptions}
            />
          </div>
        </div>
      </div>
      <div className="flex mt-2 flex-wrap gap-y-3">
        <span className="font-medium">Choose keyword:</span>
        <SkipNavTag>
          {categories?.map((category) => {
            const formatCategoryName = category.name.replaceAll("&amp;", "&");
            return (
              <Tag
                key={category.id}
                onClick={() => toggleTag(formatCategoryName)}
                disabled={!categories.includes(category)}
                className="block-container"
              >
                {checkTagged(formatCategoryName) ? (
                  <Accent isActive>{formatCategoryName}</Accent>
                ) : (
                  <Accent>{formatCategoryName}</Accent>
                )}
              </Tag>
            );
          })}
        </SkipNavTag>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.length ? (
          filteredPosts?.map((post: BlogType) => (
            <BlogCard key={post.slug} post={post} />
          ))
        ) : (
          <ContentPlaceholder />
        )}
      </ul>
    </div>
  );
};

export default BlogFilter;
