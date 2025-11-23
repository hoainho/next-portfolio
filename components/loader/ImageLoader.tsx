"use client";

import React from "react";
import Image from "next/image";
import cloudfrontLoader from "@/lib/cloudfront-loader";

type ImageLoaderProps = {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  className?: string;
  id?: string;
  priority?: boolean;
  quality?: number;
  onClick?: () => void;
};

const ImageLoader = ({
  alt = "image-loader",
  width = 20,
  height = 20,
  src = "",
  className = "",
  id = "",
  priority = false,
  quality = 100,
  onClick,
}: ImageLoaderProps) => {
  return (
    <Image
      alt={alt}
      width={width}
      height={height}
      src={cloudfrontLoader({ src, width, quality })}
      className={className}
      id={id}
      priority={priority}
      onClick={onClick}
      onError={(e) => {
        e.currentTarget.src = "https://res.cloudinary.com/dgzdswdgg/image/upload/v1763897121/portfolio-logo_rpnmp9.png";
      }}
      unoptimized
    />
  );
};

export default ImageLoader;
