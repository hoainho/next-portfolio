/** @type {import('next').NextConfig} */

import path from "path";
import withPlaiceholder from "@plaiceholder/next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  transpilePackages: ['highlight.js'],
  sassOptions: {
    includePaths: [path.join(process.env.PWD, "styles")],
  },
  images: {
    loaderFile: isProd ? './lib/cloudfront-loader.ts' : undefined,
    domains: isProd ? ['d25ajqv6ijzi49.cloudfront.net'] : [],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_CLOUDFRONT_URL : undefined,
  productionBrowserSourceMaps: true
};

export default withPlaiceholder(nextConfig);
