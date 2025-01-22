import { ReactElement } from "react";
import type { Metadata, Viewport } from "next";
import "./globals.scss";
import localFont from "next/font/local";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { GA_TRACKING_ID, GTM_TRACKING_ID } from "@/lib/gtag";
import { GlobalContext, GlobalProvider } from "@/context/GlobalContext";
import Script from "next/script";
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

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

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
          "https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/logo.jpeg",
        alt: "Hoai-Nho | Portfolio",
        width: 200,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/logo.jpeg",
  },
};

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body
        className={`${fontPublicSans.variable} font-public-sans bg-basics-background-default`}
        cz-shortcut-listen="false"
      >
        <GlobalProvider>{children}</GlobalProvider>
      </body>

      <GoogleTagManager gtmId={GTM_TRACKING_ID} />
      <GoogleAnalytics gaId={GA_TRACKING_ID} />

      <Script
        type="text/javascript"
        src="https://unpkg.com/default-passive-events"
      />
    </html>
  );
}
