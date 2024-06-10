'use client'
import { ProjectType } from "@/app/types";
import useGAEventTracker from "@/hooks/useGAEventTracker";
import Link from "next/link";
import React from "react";

type ViewMoreLinkProps = {
  project: ProjectType;
};

const ViewMoreLink = ({ project }: ViewMoreLinkProps) => {
  const GAEventTracker = useGAEventTracker({ category: "User Interaction" });
  const handleTracking = (link: string) => {
    GAEventTracker("Direct To Link", link);
  };
  return (
    <div className="mt-5 flex items-center gap-2 font-poppins">
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue-600"
        onClick={() => handleTracking(project.name)}
      >
        Live Link
      </Link>
      <img
        src={"/icons/arrow.svg"}
        alt="arrow"
        className="w-4 h-4 object-contain"
      />
    </div>
  );
};

export default ViewMoreLink;
