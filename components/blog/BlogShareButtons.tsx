'use client'

import Link from "next/link";
import { LuLinkedin } from "react-icons/lu";
import { IoLogoReddit } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";

interface BlogShareButtonsProps {
  slug: string;
}

const BlogShareButtons = ({ slug }: BlogShareButtonsProps) => {
  const [locationInfo, setLocationInfo] = useState('');
  const encodedURL = encodeURIComponent(`https://${locationInfo}/blog/${slug}`);

  const linkItem = [
    {
      href: `https://www.reddit.com/submit?url=${encodedURL}`,
      icon: <IoLogoReddit className="inline-block text-base" />
    },
    {
      href: `https://twitter.com/intent/tweet?url=${encodedURL}`,
      icon: <FaXTwitter className="inline-block text-base" />
    },
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`,
      icon: <LuLinkedin className="inline-block text-base" />
    }
  ]

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocationInfo(window.location.hostname);
    }
  }, [])

  return (
    <>
      {linkItem.map((item, index) => (
        <Link
          key={index}
          target="_blank"
          href={item.href}
          className="flex items-center p-2 border rounded-full"
        >
          {item.icon}
        </Link>
      ))}
    </>
  );
};

export default BlogShareButtons;