import CTA from "@/components/cta/CTA";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Hoai Nho",
  description: `Throughout my career, I have worked on a diverse range of projects,
        including notable categories such as Travel, Stock Trading, Mapping,
        Financial Management, Human Information Security Management,
        Multinational Security Systems, Construction Machinery Management, and
        E-commerce`,
  keywords: `Earthbrain - Smart Construction, , Eyewa, Ringo App, Maqro, ThirdRockPix, Human Information Security Management, Multinational Security Systems, Construction Machinery Management, and E-commerce`,
  openGraph: {
    title: "Hoai-Nho | Portfolio",
    description:
      "Senior Software Engineer | Frontend Tech Lead | Open Source Contributor",
    url: `https://hoainho.info/projects`,
    siteName: "Projects | Hoai-Nho | Portfolio",
    images: [
      {
        url:
          "https://res.cloudinary.com/dgzdswdgg/image/upload/v1763897121/portfolio-logo_rpnmp9.png",
        alt: "Hoai-Nho | Portfolio",
        width: 200,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Projects = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        <div className="absolute top-32 -left-40 w-[500px] h-[500px] bg-sky-200/50 rounded-full filter blur-3xl opacity-40" />
        <div className="absolute top-[400px] -right-40 w-[400px] h-[400px] bg-blue-100/60 rounded-full filter blur-3xl opacity-35" />
        <div className="absolute top-[900px] left-1/3 w-[350px] h-[350px] bg-cyan-100/40 rounded-full filter blur-3xl opacity-40" />
      </div>

      <section className="max-container relative">
        <ProjectHero />

        <ProjectGrid />

        <hr className="border-slate-200" />

        <CTA />
      </section>
    </div>
  );
};

export default Projects;
