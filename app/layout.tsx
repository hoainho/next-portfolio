import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.scss";
import localFont from "next/font/local"
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const fontPublicSans = localFont({
  src: [
    {
      path: "./fonts/PublicSans-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PublicSans-Italic-VariableFont_wght.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/public-sans.semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-public-sans",
})

export const metadata: Metadata = {
  title:
    "Hoai Nho - Portfolio | Deep Javascript & TypeScript | Software Engineer | Open Source Contributor",
  description:
    "I'm Software Engineer from Viet Nam with over 4 year of experience. I'm passionate about developing and maintaining high quality software. I love my work and I'm always looking for new challenges. I'm open for any collaboration. Let's work together!",
  keywords:
    "Hoai Nho, Hoài Nhớ, Nguyễn Hoài Nhớ, Nhớ Nguyễn, portfolio, deep learning engineer, software engineer, open source contributor, javascript, fullstack developer",
}

export default function RootLayout({
  children,
  modal
}: {
  children: ReactNode,
  modal: ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={`${fontPublicSans.variable} font-public-sans`}>
        <main>
          <Navbar />
            <div className="min-h-[calc(100dvh-var(--primary-navbar-height)-var(--footer-height))]">
              {children}
            </div>
          {modal}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
      {/*<GoogleTagManager gtmId="GTM-53CDSQQ" />*/}
      {/*<GoogleAnalytics gaId="G-TB5XXJRTQR" />*/}
    </html>
  )
}
