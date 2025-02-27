/** @type {import('next').NextConfig} */

import path from "path";
import withPlaiceholder from "@plaiceholder/next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  transpilePackages: ['highlight.js'],
  sassOptions: {
    includePaths: [path.join(process.env.PWD, "styles")],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  productionBrowserSourceMaps: true
};

export default withPlaiceholder(nextConfig);
