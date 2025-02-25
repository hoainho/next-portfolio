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

const brandName = process.env.NEXT_PUBLIC_BLOG_BRAND || 'hoainho';

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title:
    "Thnkandgrow - Advanced Web Development Blog | Expert Insights & Technical Excellence",
  description:
    "Dive deep into expert-level web development with Thnkandgrow. Discover comprehensive tutorials, best practices, and cutting-edge insights on JavaScript, TypeScript, React, and modern web technologies. Written by industry professionals for ambitious developers.",
  keywords:
    "web development blog, javascript tutorials, typescript guides, react best practices, web architecture, software engineering, coding tutorials, frontend development, backend development, full stack development, web performance, software design patterns",
  openGraph: {
    title: "Thnkandgrow | Advanced Web Development Blog",
    description:
      "Expert-level web development insights, in-depth tutorials, and industry best practices. Level up your development skills with comprehensive guides on modern web technologies.",
    url: "https://thnkandgrow.com",
    siteName: "Thnkandgrow",
    images: [
      {
        url: "https://d1gj38atnczo72.cloudfront.net/wp-content/uploads/2024/04/18114102/cropped-thnkandgrow-logo-192x192.jpg",
        alt: "Thnkandgrow Logo",
        width: 192,
        height: 192,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thnkandgrow | Advanced Web Development",
    description: "Expert web development insights and comprehensive tutorials for modern developers",
    creator: "@thnkandgrow",
    images: ["https://d1gj38atnczo72.cloudfront.net/wp-content/uploads/2024/04/18114102/cropped-thnkandgrow-logo-192x192.jpg"],
  },
  icons: {
    icon: "https://d1gj38atnczo72.cloudfront.net/wp-content/uploads/2024/04/18114102/cropped-thnkandgrow-logo-192x192.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
