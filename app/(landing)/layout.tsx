import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";
import React, { ReactNode } from "react";
import { getAuthorId } from "@/lib/helpers";

type LayoutOrderProps = { children: ReactNode };

const brandName = process.env.NEXT_PUBLIC_BLOG_BRAND || 'hoainho';

export const metadata: Metadata = {
  title:
    `${brandName} - Tech Blog | Advanced Web Development | Expert Tips & Tricks`,
  description:
    `${brandName} - Software Engineer from Viet Nam with over 4 year of experience. Passionate about developing and maintaining high quality software.`,
  keywords:
    `${brandName}, Portfolio, deep learning engineer, software engineer, open source contributor, javascript, fullstack developer`,
};

function Layout({ children }: LayoutOrderProps) {
  return (
    <>
      <main>
        <Navbar />
        <div className="min-h-[calc(100dvh-var(--compose-navbar-height)-var(--compose-footer-height))]">
          {children}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
