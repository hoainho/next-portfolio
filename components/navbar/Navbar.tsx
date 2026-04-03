"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import clsx from "clsx";
import { pageview } from "@/lib/gtag";
import ImageLoader from "@/components/loader/ImageLoader";
import { useGlobalContext } from "@/context/GlobalContext";
import { SearchBar } from "./SearchBar";

const Navbar = () => {
  const pathname = usePathname();
  const { setHiddenScrollBar } = useGlobalContext();

  const isLightTheme = ["/"].includes(pathname);
  const isDarkPage = ["/about", "/projects", "/contact"].includes(pathname);
  const defaultTextColor: string =
    !isLightTheme && !isDarkPage ? "text-primary" : "text-white";

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isOpenNavbarMobile, setIsOpenNavbarMobile] = useState(false);

  const controlNavbar = () => {
    setScrolled(window.scrollY > 8);
    if (window.scrollY <= 0) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    pageview(pathname);
  }, [pathname]);

  const navbar = [
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const handleNavbarMobile = () => {
    setHiddenScrollBar(isOpenNavbarMobile);
    setIsOpenNavbarMobile(!isOpenNavbarMobile);
  };

  useEffect(() => {
    if (isOpenNavbarMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenNavbarMobile]);

  const isDetailPost = pathname.includes("blog/");
  const isCentrePost = !isDetailPost && pathname.includes("blog");

  return (
    <header
      className={clsx(
        isLightTheme || isDarkPage ? "header-primary" : "header-secondary",
        isDetailPost ? "!relative bg-bg-default" : "",
        isCentrePost ? "!relative bg-dark" : "",
        isDarkPage
          ? clsx(
              "border-b transition-all duration-300",
              scrolled
                ? "bg-[rgba(5,7,9,0.93)] backdrop-blur-[32px] backdrop-saturate-[200%] border-white/[0.07]"
                : "bg-[rgba(5,7,9,0.55)] backdrop-blur-[20px] border-white/[0.03]",
            )
          : show && isLightTheme
            ? "bg-[rgba(250,250,252,0.4)] backdrop-saturate-[180%] backdrop-blur-[30px]"
            : "bg-basics-background-default",
      )}
    >
      {isDarkPage && (
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent pointer-events-none" />
      )}

      <div
        className={clsx(
          "header h-fit gap-2",
          isDetailPost ? "!px-10 !mx-0 !min-w-full" : "",
          isCentrePost ? "!max-w-7xl w-full !px-3 !mx-auto" : "",
        )}
      >
        {isDetailPost || isCentrePost ? (
          <div className="flex items-center gap-2 !min-h-fit !py-3 !px-0">
            <Link href="/" className="cursor-pointer">
              <ImageLoader
                width={36}
                height={36}
                src="https://res.cloudinary.com/dgzdswdgg/image/upload/v1763897121/portfolio-logo_rpnmp9.png"
                alt="Hoai-Nho-Logo"
                className="h-9 w-9 object-cover rounded-lg"
              />
            </Link>
            <span className="text-slate-500 text-base font-light mx-0.5">
              /
            </span>
            <h1 className="text-base font-semibold text-fg-default tracking-tight">
              Blog
            </h1>
          </div>
        ) : (
          <Link
            href="/"
            className="cursor-pointer group flex items-center gap-2"
          >
            <ImageLoader
              width={36}
              height={36}
              src="https://res.cloudinary.com/dgzdswdgg/image/upload/v1763897121/portfolio-logo_rpnmp9.png"
              alt="Hoai-Nho-Logo"
              className={clsx(
                "object-cover rounded-lg transition-all duration-200",
                isDarkPage
                  ? "h-9 w-9 ring-1 ring-white/[0.08] group-hover:ring-violet-500/40 group-hover:shadow-[0_0_14px_rgba(139,92,246,0.3)]"
                  : "h-9 w-9",
              )}
            />
          </Link>
        )}

        <nav className="flex-1 justify-end hidden md:flex items-center relative gap-1">
          {(pathname.includes("/blog/") || pathname === "/blog") && (
            <SearchBar />
          )}
          {navbar?.map((nav) => {
            const isActive = pathname === nav.link;
            return (
              <Link
                key={nav.name}
                href={nav.link}
                className={clsx(
                  "relative px-4 py-2 font-mono text-[12px] tracking-[0.1em] uppercase transition-all duration-200 cursor-pointer rounded-lg",
                  isActive
                    ? isDarkPage
                      ? "text-violet-200"
                      : "text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] font-semibold shadow-sm rounded-lg"
                    : isDetailPost || isCentrePost
                      ? "text-slate-400 hover:text-white hover:bg-white/5"
                      : isDarkPage
                        ? "text-slate-600 hover:text-slate-200 hover:bg-white/[0.04]"
                        : `${defaultTextColor} hover:text-white hover:bg-black/5`,
                )}
              >
                {nav.name}
                {isActive && isDarkPage && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-violet-500/80 via-blue-400/60 to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        <label
          className="size-fit block md:hidden relative z-40 cursor-pointer px-3 py-6"
          htmlFor="mobile-menu"
        >
          <input
            className="peer hidden"
            type="checkbox"
            id="mobile-menu"
            onClick={handleNavbarMobile}
          />
          <div
            className={clsx(
              `w-6 relative z-50 block h-[1.5px] bg-transparent content-['']`,
              `before:absolute before:top-[-5px] before:z-50 before:block before:h-full before:w-full before:transition-all before:duration-200 before:ease-out before:content-['']`,
              `after:absolute after:right-0 after:bottom-[-5px] after:block after:h-full after:w-full after:transition-all after:duration-200 after:ease-out after:content-['']`,
              isDarkPage
                ? "before:bg-slate-400 after:bg-slate-400"
                : "before:bg-slate-700 after:bg-slate-700",
              `peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:rotate-45 after:peer-checked:bottom-0 after:peer-checked:-rotate-45`,
            )}
          />
          <div
            className={`w-fit fixed inset-0 z-40 hidden h-fit bg-black/70 backdrop-blur-sm peer-checked:block`}
          >
            &nbsp;
          </div>
          <div className="fixed top-0 right-0 z-40 h-screen w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
            <div
              className={clsx(
                "float-right min-h-full w-[78%] shadow-2xl",
                isDarkPage
                  ? "bg-[#060a12] border-l border-white/[0.05]"
                  : "bg-bg-default border-l border-slate-100",
              )}
            >
              <div className="px-5 pt-5 pb-4 border-b border-white/[0.05]">
                <Link href="/" className="flex items-center gap-2.5">
                  <ImageLoader
                    width={32}
                    height={32}
                    src="https://res.cloudinary.com/dgzdswdgg/image/upload/v1763897121/portfolio-logo_rpnmp9.png"
                    alt="Hoai-Nho-Logo"
                    className="h-8 w-8 object-cover rounded-lg"
                  />
                  <span
                    className={clsx(
                      "font-mono text-[11px] tracking-wider",
                      isDarkPage ? "text-slate-600" : "text-slate-400",
                    )}
                  >
                    hoainho.info
                  </span>
                </Link>
              </div>
              <menu className="p-3 flex flex-col gap-0.5">
                {navbar?.map((nav) => {
                  const isActive = pathname === nav.link;
                  return (
                    <Link
                      key={nav.name}
                      href={nav.link}
                      className={clsx(
                        "px-4 py-3 rounded-xl transition-all font-mono text-sm tracking-wider uppercase",
                        isActive
                          ? isDarkPage
                            ? "bg-violet-500/12 text-violet-200 border border-violet-500/20"
                            : "bg-slate-900 text-white"
                          : isDarkPage
                            ? "text-slate-500 hover:text-slate-200 hover:bg-white/[0.03]"
                            : "text-fg-muted hover:text-primary hover:bg-slate-50",
                      )}
                    >
                      {nav.name}
                    </Link>
                  );
                })}
              </menu>
            </div>
          </div>
        </label>
      </div>
    </header>
  );
};

export default Navbar;
