"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { projects } from "@/lib/constants";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface Project {
  icon_url: string;
  theme: string;
  name: string;
  descriptions: string[];
  link: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

type CardVariant = "featured" | "large" | "medium" | "small";

const getCardVariant = (index: number): CardVariant => {
  if (index === 0) return "featured";
  if (index === 1 || index === 2) return "large";
  return "medium";
};

const getGridClasses = (index: number): string => {
  if (index === 0) return "md:col-span-2";
  return "";
};

const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="pb-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            variants={itemVariants}
            className={getGridClasses(index)}
          >
            <ProjectCard
              project={project}
              variant={getCardVariant(index)}
              index={index}
              onClick={() => handleOpenModal(project)}
            />
          </motion.div>
        ))}
      </motion.div>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectGrid;
