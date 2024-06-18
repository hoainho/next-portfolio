import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";
import React, { ReactNode } from "react";

type LayoutOrderProps = { children: ReactNode };


export const metadata: Metadata = {
  title:
    "Hoai Nho - Portfolio | Deep Javascript & TypeScript | Software Engineer | Open Source Contributor",
  description:
    "I'm Software Engineer from Viet Nam with over 4 year of experience. I'm passionate about developing and maintaining high quality software. I love my work and I'm always looking for new challenges. I'm open for any collaboration. Let's work together!",
  keywords:
    "Hoai Nho, Hoài Nhớ, Nguyễn Hoài Nhớ, Nhớ Nguyễn, portfolio, deep learning engineer, software engineer, NUS Technology, , javascript, fullstack developer",
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
