import "react-vertical-timeline-component/style.min.css";
import Skill from "@/components/about/Skill";
import Experience from "@/components/about/Experience";
import Introduce from "@/components/about/Introduce";
import CTA from "@/components/cta/CTA";

const AboutPage = () => {
  return (
    <section className="max-container">
      <Introduce />

      <Skill />

      <Experience />

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default AboutPage;
