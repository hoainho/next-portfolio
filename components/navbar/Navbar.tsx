"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  console.log("🚀 ~ pathname:", pathname);
  const isLightTheme = !["/"].includes(pathname);
  console.log("🚀 ~ isLightTheme:", isLightTheme);
  const defaultTextColor: string = isLightTheme ? "text-primary" : "text-white";
  return (
    <header className={`${!isLightTheme ? 'header-primary': 'header-secondary'} sticky top-0 z-[49] transition-all duration-300 ease-in-out`}>
      <Link href="/" className="cursor-pointer">
        <img
          src={"/icons/logo.jpeg"}
          alt="Hoai-Nho-Logo"
          className="h-20 w-20 object-cover rounded-full "
        />
      </Link>
      <nav className="flex text-sm gap-7 font-medium uppercase">
        <Link
          href="/about"
          className={`cursor-pointer hover:text-blue-600 ${
            pathname.includes("/about") ? "text-blue-600" : defaultTextColor
          }`}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={` cursor-pointer hover:text-blue-600 ${
            pathname.includes("/projects") ? "text-blue-600" : defaultTextColor
          }`}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
