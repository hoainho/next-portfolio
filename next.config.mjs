/** @type {import('next').NextConfig} */

import path from "path";
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  transpilePackages: ["highlight.js"],
  sassOptions: {
    includePaths: [path.join(process.env.PWD, "styles")],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  productionBrowserSourceMaps: false,
};

export default withPlaiceholder(nextConfig);
