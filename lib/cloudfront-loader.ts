import { ImageLoaderProps } from "next/image";

const cloudfrontLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps): string => {
  const isDev = process.env.NODE_ENV !== "production";
  const baseUrl = isDev ? "" : process.env.NEXT_PUBLIC_CLOUDFRONT_URL;

  // If baseUrl is empty (local development), prepend it with a leading slash
  const url = isDev ? `${baseUrl}${src}` : new URL(src, baseUrl).href;

  // Construct the URL with width and quality parameters if not in development
  if (!isDev) {
    const constructedUrl = new URL(url);
    constructedUrl.searchParams.set("w", width.toString());
    if (quality) {
      constructedUrl.searchParams.set("q", quality.toString());
    }
    return constructedUrl.href;
  }

  return url;
};

export default cloudfrontLoader;
