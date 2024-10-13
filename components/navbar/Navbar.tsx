"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import clsx from "clsx";
import { pageview } from "@/lib/gtag";
import ImageLoader from "@/components/loader/ImageLoader";

const Navbar = () => {
  const pathname = usePathname();

  const isLightTheme = !["/"].includes(pathname);
  const defaultTextColor: string = isLightTheme ? "text-primary" : "text-white";

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
  }, [pathname])

  const navbar = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];
  return (
    <header
      className={clsx(
        !isLightTheme ? "header-primary" : "header-secondary",
        show && isLightTheme
          ? "bg-[rgba(250,250,252,0.4)] backdrop-saturate-[180%] backdrop-blur-[30px]"
          : "bg-basics-background-default"
      )}
    >
      <div className="header">
        <Link href="/" className="cursor-pointer">
          <ImageLoader
            width={40}
            height={40}
            src={"/icons/logo.jpeg"}
            alt="Hoai-Nho-Logo"
            className="h-20 w-20 object-cover rounded-full "
          />
        </Link>
        <nav className="flex items-center text-sm gap-4 font-medium uppercase">
          {navbar.map((nav) => {
            return (
              <Link
                key={nav.name}
                href={nav.link}
                className={`transition-all min-w-[110px] max-w-[110px] text-center cursor-pointer !focus:outline-none hover:btn  hover:text-white ${
                  pathname === nav.link ? `btn text-white` : defaultTextColor
                }`}
              >
                {nav.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
