import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FaMediumM, FaDev, FaExternalLinkAlt } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { DiYeoman } from "react-icons/di";

interface Props {}

const BlogPlatform = (props: Props) => {
  const platforms = [
    {
      name: "ThinkAndGrow",
      icon: <DiYeoman />,
      href: process.env.NEXT_PUBLIC_BLOG_LINK,
      description: process.env.NEXT_PUBLIC_BLOG_DESC,
    },
    {
      name: "Linkedin",
      icon: <FiLinkedin />,
      href: process.env.NEXT_PUBLIC_LINKEDIN_LINK,
      description: process.env.NEXT_PUBLIC_LINKEDIN_DESC,
    },
    {
      name: "Medium",
      icon: <FaMediumM />,
      href: process.env.NEXT_PUBLIC_MEDIUM_LINK,
      description: process.env.NEXT_PUBLIC_MEDIUM_DESC,
    },
    {
      name: "Dev.to",
      icon: <FaDev />,
      href: process.env.NEXT_PUBLIC_DEVTO_LINK,
      description: process.env.NEXT_PUBLIC_DEVTO_DESC,
    },
  ];
  return (
    <div className="bg-dark text-white overflow-hidden pt-16 pb-5">
      <div className="max-container-centre px-5 md:px-0 flex flex-col items-center gap-y-3 !min-h-fit">
        <h3 className="text-5xl font-bold">
          The world's largest developer platform
        </h3>
        <p className="text-sm text-fg-subtle mt-2">
          Get the latest news, resources, and insights from the world's largest
          developer platform.
        </p>
        <div className="w-full flex justify-center gap-5 mt-10 flex-row flex-wrap">
          {platforms?.map((platform, index) => (
            <div
              key={index}
              className={clsx(
                "flex flex-col w-full max-w-[260px] items-start justify-between gap-y-10",
                "bg-black text-white gap-y-3 px-5 py-14 rounded-sm",
              )}
            >
              <div className="flex flex-col items-start justify-start gap-y-1">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-active mb-3">
                  {platform.icon}
                </div>
                <h6 className="text-2xl font-bold">{platform.name}</h6>
                <p className="text-sm text-fg-subtle">{platform.description}</p>
              </div>
              <Link
                href={platform.href || "/blog"}
                className="flex items-center gap-x-1 text-active mt-8"
              >
                <p className="text-sm">Go to Docs</p>
                <FaExternalLinkAlt />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPlatform;
