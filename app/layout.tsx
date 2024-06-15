import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.scss";
import localFont from "next/font/local";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

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
});

export const metadata: Metadata = {
  title:
    "Hoai Nho - Portfolio | Deep Javascript & TypeScript | Software Engineer | Open Source Contributor",
  description:
    "I'm Software Engineer from Viet Nam with over 4 year of experience. I'm passionate about developing and maintaining high quality software. I love my work and I'm always looking for new challenges. I'm open for any collaboration. Let's work together!",
  keywords:
    "Hoai Nho, Hoài Nhớ, Nguyễn Hoài Nhớ, Nhớ Nguyễn, portfolio, deep learning engineer, software engineer, open source contributor, javascript, fullstack developer",
  openGraph: {
    title: "Hoai-Nho | Portfolio",
    description:
      "Deep Javascript & TypeScript | Software Engineer | Open Source Contributor",
    url: `https://hoainho.info`,
    siteName: "Hoai-Nho | Portfolio",
    images: [
      {
        url:
          process.env.NEXT_PUBLIC_LOGO ||
          "https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/favicon.png",
        alt: "Hoai-Nho | Portfolio",
        width: 200,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${fontPublicSans.variable} font-public-sans bg-basics-background-default`}
      >
        {children}
      </body>
      <GoogleTagManager gtmId="GTM-KSW24XS4" />
      <GoogleAnalytics gaId="G-R2SSW6FQ6V" />
    </html>
  );
}
