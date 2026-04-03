"use client";

import trackEvent from "@/hooks/useGAEventTracker";
import { socialLinks } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ImageLoader from "../loader/ImageLoader";

const DARK_PAGES = ["/about", "/projects", "/contact"];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  const pathname = usePathname();
  const isDarkPage = DARK_PAGES.includes(pathname);

  const handleTracking = (link: string) => {
    trackEvent(link);
  };

  let FooterComp: JSX.Element;

  switch (pathname) {
    case "/":
      FooterComp = <></>;
      break;

    default:
      FooterComp = isDarkPage ? (
        <footer className="relative" style={{ backgroundColor: "#060a12" }}>
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

          <div className="max-w-5xl mx-auto sm:px-16 px-8 pt-12 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              <div className="md:col-span-1">
                <Link href="/" className="flex items-center gap-2.5 mb-4 group">
                  <ImageLoader
                    src="https://res.cloudinary.com/dgzdswdgg/image/upload/v1763897121/portfolio-logo_rpnmp9.png"
                    alt="Hoai-Nho-Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-cover rounded-lg ring-1 ring-white/[0.08] group-hover:ring-violet-500/35 transition-all"
                  />
                  <span className="font-mono text-sm font-semibold text-white tracking-tight">
                    Hoai Nho
                  </span>
                </Link>
                <p className="text-slate-600 text-xs leading-relaxed max-w-[200px]">
                  Senior Software Engineer · Frontend Tech Lead · Vietnam
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400/80 tracking-wider uppercase">
                    Open to work
                  </span>
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] text-slate-700 tracking-[0.2em] uppercase mb-4">
                  Navigation
                </p>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="font-mono text-xs text-slate-500 hover:text-violet-400 transition-colors tracking-wide"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-[10px] text-slate-700 tracking-[0.2em] uppercase mb-4">
                  Connect
                </p>
                <div className="space-y-2">
                  {socialLinks?.map((link) => (
                    <Link
                      key={link.name}
                      href={link.link}
                      target="_blank"
                      onClick={() => handleTracking(link.name)}
                      className="group flex items-center gap-2.5 w-fit"
                    >
                      <div className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-violet-500/35 group-hover:bg-violet-500/8 transition-all">
                        <ImageLoader
                          src={link.icon_url}
                          alt={link.name}
                          width={14}
                          height={14}
                          className="w-3.5 h-3.5 object-contain opacity-40 group-hover:opacity-80 transition-opacity"
                        />
                      </div>
                      <span className="font-mono text-xs text-slate-600 group-hover:text-slate-400 transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/[0.04] pt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[11px] text-slate-700">
                © {new Date().getFullYear()}{" "}
                <span className="text-slate-500">Hoai-Nho</span> · All rights
                reserved.
              </p>
              <p className="font-mono text-[11px] text-slate-700">
                Built with <span className="text-slate-500">Next.js</span> ·{" "}
                <span className="text-slate-500">TypeScript</span>
              </p>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="footer">
          <hr className="border-slate-200" />
          <div className="footer-container">
            <p>
              © {new Date().getFullYear()} <strong>Hoai-Nho</strong>. All rights
              reserved.
            </p>
            <div className="flex gap-3 justify-center items-center">
              {socialLinks
                ?.map((link) => (
                  <Link
                    key={link.name}
                    href={link.link}
                    target="_blank"
                    onClick={() => handleTracking(link.name)}
                    className="cursor-pointer"
                  >
                    <ImageLoader
                      src={link.icon_url}
                      alt={link.name}
                      width={20}
                      height={20}
                      className="w-6 h-6 object-contain"
                    />
                  </Link>
                ))
                .slice(0, 2)}
            </div>
          </div>
        </footer>
      );
      break;
  }

  return FooterComp;
};

export default Footer;
