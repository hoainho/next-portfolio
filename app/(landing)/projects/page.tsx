import CTA from "@/components/cta/CTA";
import { projects } from "@/lib/constants";
import { Metadata } from "next";
import ViewMoreLink from "@/components/project/ViewMoreLink";

export const metadata: Metadata = {
  title:
    "Hoai Nho - Portfolio | Deep Javascript & TypeScript | Software Engineer | Solution Architect",
  description:
    "I'm Software Engineer from Viet Nam with over 4 year of experience. I'm passionate about developing and maintaining high quality software. I love my work and I'm always looking for new challenges. I'm open for any collaboration. Let's work together!",
  keywords: `Earthbrain - Smart Construction, , Eyewa, Ringo App, Maqro, ThirdRockPix, Human Information Security Management, Multinational Security Systems, Construction Machinery Management, and E-commerce`,
};

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Throughout my career, I have worked on a diverse range of projects,
        including notable categories such as Travel, Stock Trading, Mapping,
        Financial Management, Human Information Security Management,
        Multinational Security Systems, Construction Machinery Management, and
        E-commerce. I leverage modern technologies and frameworks such as
        JavaScript, TypeScript, Node.js, Golang, Python, and PHP, with deep
        understanding and proficiency in prominent libraries such as ReactJS,
        VueJS, NestJS, NextJS, Django, Gin, and Laravel. Let's explore some of
        my standout projects below.
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.icon_url}
                  alt="threads"
                  className="w-[80%] h-[80%] object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <ul>
                {project.descriptions.map((description) => (
                  <li
                    className="text-slate-500 mt-2 leading-relaxed"
                    key={description}
                  >
                    {description}
                  </li>
                ))}
              </ul>
              <ViewMoreLink project={project} />
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;