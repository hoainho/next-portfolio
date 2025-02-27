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
  const defaultTextColor: string = !isLightTheme
    ? "text-primary"
    : "text-white";

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpenNavbarMobile, setIsOpenNavbarMobile] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY <= 0) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    pageview(pathname);
  }, [pathname]);

  const navbar = [
    {
      name: "About",
      link: "/about",
      showInBlogOnly: false,
    },
    {
      name: "Projects",
      link: "/projects",
      showInBlogOnly: false,
    },
    {
      name: "Blog",
      link: "/blog",
      showInBlogOnly: true,
    },
    {
      name: "Contact",
      link: "/contact",
      showInBlogOnly: false,
    },
  ].filter(item => !process.env.NEXT_PUBLIC_BLOG_ONLY_MODE || item.showInBlogOnly);

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
        isLightTheme ? "header-primary" : "header-secondary",
        isDetailPost ? "!relative bg-bg-default" : "",
        isCentrePost ? "!relative bg-dark" : "",
        show && isLightTheme
          ? "bg-[rgba(250,250,252,0.4)] backdrop-saturate-[180%] backdrop-blur-[30px]"
          : "bg-basics-background-default",
      )}
    >
      <div
        className={clsx(
          "header h-fit gap-2",
          isDetailPost ? "!px-10 !mx-0 !min-w-full" : "",
          isCentrePost ? "!max-w-7xl w-full !px-3 !mx-auto" : "",
        )}
      >
        {isDetailPost || isCentrePost ? (
          <div className="flex items-center gap-2 !min-h-fit !py-3 !px-0">
            <Link href={process.env.NEXT_PUBLIC_BLOG_ONLY_MODE === 'true' ? "/blog" : "/"} className="cursor-pointer">
              <ImageLoader
                width={40}
                height={40}
                src={"https://d1gj38atnczo72.cloudfront.net/wp-content/uploads/2024/04/18114102/cropped-thnkandgrow-logo-192x192.jpg"}
                alt="Thnkandgrow-Logo"
                className="h-10 w-10 object-cover rounded-full "
              />
            </Link>
            <h1 className="text-xl font-semibold text-fg-default"> / </h1>
            <h1 className="text-xl font-semibold text-fg-default"> Blog</h1>
          </div>
        ) : (
          <Link href={process.env.NEXT_PUBLIC_BLOG_ONLY_MODE === 'true' ? "/blog" : "/"} className="cursor-pointer">
            <ImageLoader
              width={40}
              height={40}
              src={"https://d1gj38atnczo72.cloudfront.net/wp-content/uploads/2024/04/18114102/cropped-thnkandgrow-logo-192x192.jpg"}
              alt="Thnkandgrow-Logo"
              className="h-20 w-20 object-cover rounded-full "
            />
          </Link>
        )}

        <nav className="flex-1 justify-end hidden md:flex items-center text-sm font-medium uppercase relative gap-4">
        {(pathname.includes("/blog/") || pathname === "/blog")  && <SearchBar/>}
          {navbar?.map((nav) => {
            return (
              <Link
                key={nav.name}
                href={nav.link}
                className={`transition-all min-w-[110px] max-w-[110px] text-center cursor-pointer !focus:outline-none hover:btn hover:text-white
                 ${
                   pathname === nav.link
                     ? `btn text-white`
                     : isDetailPost || isCentrePost
                       ? "text-white"
                       : defaultTextColor
                 }`}
              >
                {nav.name}
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
              `w-7 relative z-50 block h-[1px] bg-black bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out `,
              `before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] `,
              `peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform`,
            )}
          ></div>
          <div
            className={`w-fit fixed inset-0 z-40 h-fit bg-black/50 backdrop-blur-sm peer-checked:block`}
          >
            &nbsp;
          </div>
          <div className="fixed top-0 right-0 z-40 h-screen w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
            <div className="float-right min-h-full w-[85%] bg-bg-default px-6 py-8 shadow-2xl">
              <menu className="h-fit py-10 px-2 flex flex-col items-start justify-center gap-4">
                <Link href={process.env.NEXT_PUBLIC_BLOG_ONLY_MODE === 'true' ? "/blog" : "/"} className="cursor-pointer">
                  <ImageLoader
                    width={40}
                    height={40}
                    src={"/icons/logo.jpeg"}
                    alt="Hoai-Nho-Logo"
                    className="h-20 w-20 object-cover rounded-full "
                  />
                </Link>
                {navbar?.map((nav) => {
                  return (
                    <Link
                      key={nav.name}
                      href={nav.link}
                      className={`px-3 py-2 rounded-[5px] transition-all w-full text-start cursor-pointer !focus:outline-none  hover:text-white ${
                        pathname === nav.link
                          ? `bg-black text-white`
                          : "text-fg-muted"
                      }`}
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
