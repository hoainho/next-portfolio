import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";
import React, { ReactNode } from "react";

type LayoutOrderProps = { children: ReactNode };

export const metadata: Metadata = {
  title:
    "Hoai Nho - Portfolio | Senior Software Engineer | Frontend Tech Lead",
  description:
    "Senior Software Engineer & Frontend Tech Lead from Vietnam with over 5 years of experience. Passionate about developing high-quality software, leading frontend teams, and open source contribution.",
  keywords:
    "Hoai Nho, Hoài Nhớ, Nguyễn Hoài Nhớ, Nhớ Nguyễn, portfolio, senior software engineer, frontend tech lead, javascript, typescript, fullstack developer",
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
