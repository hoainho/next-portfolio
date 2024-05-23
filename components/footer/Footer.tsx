"use client";

import useGAEventTracker from "@/hooks/useGAEventTracker";
import { socialLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const GAEventTracker = useGAEventTracker("User Interaction");
  const handleTracking = (link: string) => {
    GAEventTracker("Direct To Link", link);
  };
  let FooterComp: JSX.Element;
  switch (pathname) {
    case "/":
      FooterComp = <> </>;
      break;

    default:
      FooterComp = (
        <footer className="footer">
          <hr className="border-slate-200" />

          <div className="footer-container">
            <p>
              © {new Date().getFullYear()} <strong>Hoai Nho</strong>. All rights
              reserved.
            </p>

            <div className="flex gap-3 justify-center items-center">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.link}
                  target="_blank"
                  onClick={() => handleTracking(link.name)}
                  className="cursor-pointer"
                >
                  <Image
                    src={link.icon_url}
                    alt={link.name}
                    width={20}
                    height={20}
                    className="w-6 h-6 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </footer>
      );
      break;
  }
  return FooterComp;
};

export default Footer;
