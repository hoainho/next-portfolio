"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

type CardVariant = "featured" | "large" | "medium";
const getVariant = (i: number): CardVariant =>
  i === 0 ? "featured" : i < 3 ? "large" : "medium";

const ProjectGrid = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-slate-700 tracking-[0.2em] uppercase">
            &mdash; {new Date().getFullYear()}
          </span>
          <span className="h-px w-12 bg-gradient-to-r from-slate-700 to-transparent" />
        </div>
        <span className="font-mono text-[11px] text-slate-700">
          {projects.length} projects
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <ProjectCard
          project={projects[0]}
          variant="featured"
          index={0}
          onClick={() => setSelected(projects[0])}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.slice(1, 3).map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: i * 0.06 }}
            >
              <ProjectCard
                project={p}
                variant="large"
                index={i + 1}
                onClick={() => setSelected(p)}
              />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.slice(3).map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: i * 0.04 }}
            >
              <ProjectCard
                project={p}
                variant="medium"
                index={i + 3}
                onClick={() => setSelected(p)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ProjectModal
        project={selected}
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};

export default ProjectGrid;
