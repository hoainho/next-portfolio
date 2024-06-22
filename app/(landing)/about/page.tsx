import Skill from "@/components/about/Skill";
import Experience from "@/components/about/Experience";
import Introduce from "@/components/about/Introduce";
import CTA from "@/components/cta/CTA";
import Certifications from "@/components/about/Certifications";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Hoai Nho",
  description: `My deep understanding of JavaScript fundamentals, coupled with a comprehensive
          knowledge of its ecosystem, equips me to tackle complex challenges and
          deliver top-notch solutions.`,
  keywords: `Earthbrain - Smart Construction, Hoai Nho - About , Eyewa, Ringo App, Maqro, ThirdRockPix, Human Information Security Management, Multinational Security Systems, Construction Machinery Management, and E-commerce`,
};
const AboutPage = () => {
  return (
    <section className="max-container">
      <Introduce />

      <Certifications />

      <Skill />

      <Experience />

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default AboutPage;
