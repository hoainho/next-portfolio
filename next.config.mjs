/** @type {import('next').NextConfig} */

import path from 'path';
import withPlaiceholder from "@plaiceholder/next";
const isProd = process.env.NODE_ENV === 'production'

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
  assetPrefix: isProd ? 'https://dzcz40u3myt1m.cloudfront.net' : undefined
};

export default withPlaiceholder(nextConfig);
