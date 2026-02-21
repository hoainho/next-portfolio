import { ReactElement } from "react";
import type { Metadata, Viewport } from "next";
import "./globals.scss";
import localFont from "next/font/local";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { GA_TRACKING_ID, GTM_TRACKING_ID } from "@/lib/gtag";
import { GlobalContext, GlobalProvider } from "@/context/GlobalContext";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    "Hoai Nho - Portfolio | Senior Software Engineer | Frontend Tech Lead",
  description:
    "Senior Software Engineer & Frontend Tech Lead from Vietnam with over 5 years of experience. Passionate about developing high-quality software, leading frontend teams, and open source contribution.",
  keywords:
    "Hoai Nho, Hoài Nhớ, Nguyễn Hoài Nhớ, Nhớ Nguyễn, portfolio, senior software engineer, frontend tech lead, open source contributor, javascript, typescript, fullstack developer",
  openGraph: {
    title: "Hoai-Nho | Portfolio",
    description:
      "Senior Software Engineer | Frontend Tech Lead | Open Source Contributor",
    url: `https://hoainho.info`,
    siteName: "Hoai-Nho | Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dgzdswdgg/image/upload/v1763897121/portfolio-logo_rpnmp9.png",
        alt: "Hoai-Nho | Portfolio",
        width: 200,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://res.cloudinary.com/dgzdswdgg/image/upload/v1763897121/portfolio-logo_rpnmp9.png",
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
        <Analytics />
        <SpeedInsights />
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
