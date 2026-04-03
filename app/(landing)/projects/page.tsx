import CTA from "@/components/cta/CTA";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Hoai Nho",
  description:
    "Portfolio of selected work spanning gaming, fintech, e-commerce, construction, and travel.",
  keywords:
    "Earthbrain, Eyewa, Ringo App, Maqro, ThirdRockPix, portfolio, projects",
  openGraph: {
    title: "Projects | Hoai-Nho | Portfolio",
    description:
      "Senior Software Engineer | Frontend Tech Lead | Open Source Contributor",
    url: "https://hoainho.info/projects",
    siteName: "Projects | Hoai-Nho | Portfolio",
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
};

const Projects = () => (
  <div className="ds-page">
    <div className="ds-mesh" />
    <div className="relative z-[1]">
      <ProjectHero />
      <div className="ds-section-divider" />
      <div className="ds-section-wrap py-12">
        <ProjectGrid />
      </div>
      <div className="ds-section-divider" />
      <div className="ds-section-wrap">
        <CTA />
      </div>
    </div>
  </div>
);

export default Projects;
