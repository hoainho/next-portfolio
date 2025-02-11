import Link from "next/link";
import { headers } from "next/headers";
import { LuLinkedin } from "react-icons/lu";
import { IoLogoReddit } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

interface BlogShareButtonsProps {
  slug: string;
}

const BlogShareButtons = ({ slug }: BlogShareButtonsProps) => {
  const headersList = headers();
  const hostName = headersList.get('host');
  const encodedURL = encodeURIComponent(`https://${hostName}/blog/${slug}`);

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