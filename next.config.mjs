/** @type {import('next').NextConfig} */

import path from 'path';
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.env.PWD, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default withPlaiceholder(nextConfig);
