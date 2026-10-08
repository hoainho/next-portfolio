import Education from "@/components/about/Education";
import HeroSection from "@/components/about/HeroSection";
import SkillTabs from "@/components/about/SkillTabs";
import Timeline from "@/components/about/Timeline";
import CTA from "@/components/cta/CTA";
import Certifications from "@/components/about/Certifications";
import Products from "@/components/about/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Hoai-Nho Nguyen",
  description:
    "Software Engineering Lead and AI Product Engineer with 7+ years in software engineering and 2+ years in AI workflow engineering; Frontend Technical Lead at Gear Games and Founder & Lead Maintainer of img2threejs.",
  keywords:
    "Hoai-Nho Nguyen, Software Engineering Lead, AI Product Engineer, AI workflow engineering, img2threejs, portfolio",
  openGraph: {
    title: "About | Hoai-Nho Nguyen",
    description:
      "Software Engineering Lead and AI Product Engineer with 7+ years in software engineering and 2+ years in AI workflow engineering.",
    url: `https://hoainho.info`,
    siteName: "About | Hoai-Nho | Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dgzdswdgg/image/upload/v1763897121/portfolio-logo_rpnmp9.png",
        alt: "About | Hoai-Nho | Portfolio",
        width: 200,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const AboutPage = () => (
  <div className="ds-page">
    <div className="ds-mesh" />
    <div className="relative z-[1]">
      <HeroSection />
      <div className="ds-section-divider" />
      <Products />
      <div className="ds-section-divider" />
      <SkillTabs />
      <div className="ds-section-divider" />
      <Timeline />
      <Education />
      <div className="ds-section-divider" />
      <Certifications />
      <div className="ds-section-divider" />
      <div className="ds-section-wrap">
        <CTA />
      </div>
    </div>
  </div>
);

export default AboutPage;
