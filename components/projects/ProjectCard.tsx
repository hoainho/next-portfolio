"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ImageLoader from "@/components/loader/ImageLoader";

interface Project {
  icon_url: string;
  theme: string;
  name: string;
  descriptions: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "large" | "medium" | "small";
  index?: number;
  onClick: () => void;
}

const extractTechStack = (html: string): string[] => {
  const techPatterns = [
    "React", "Next.js", "Vue", "Node.js", "NestJS", "Golang", "TypeScript",
    "PostgreSQL", "Redis", "Docker", "AWS", "GCP", "Firebase", "Socket.io",
    "Kafka", "GraphQL", "TailwindCSS", "Python", "Django"
  ];
  
  const found: string[] = [];
  techPatterns.forEach(tech => {
    if (html.toLowerCase().includes(tech.toLowerCase()) && found.length < 4) {
      found.push(tech);
    }
  });
  
  return found.length > 0 ? found : ["Modern Stack"];
};

const ProjectCard = ({ project, variant = "medium", index = 0, onClick }: ProjectCardProps) => {
  const techStack = useMemo(() => {
    return extractTechStack(project.descriptions[0] || "");
  }, [project.descriptions]);

  const extractShortDescription = (html: string): string => {
    const text = html.replace(/<[^>]*>/g, "");
    const maxLength = variant === "featured" ? 180 : variant === "large" ? 120 : 80;
    return text.substring(0, maxLength) + (text.length > maxLength ? "..." : "");
  };

  const isFeatured = variant === "featured";
  const isLarge = variant === "large" || variant === "featured";

  return (
    <motion.article
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group relative h-full cursor-pointer"
    >
      <div className={`
        relative h-full rounded-xl overflow-hidden
        transition-all duration-300 p-[1px]
        bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200
        group-hover:from-[#00c6ff]/50 group-hover:via-sky-200/40 group-hover:to-[#0072ff]/50
        group-hover:shadow-xl group-hover:shadow-sky-500/15
      `}>
      <div className={`
        relative h-full bg-white rounded-[11px] overflow-hidden
        ${isFeatured ? "p-7" : isLarge ? "p-5" : "p-4"}
      `}>
        <div className="relative z-10 h-full flex flex-col">
          <div className={`flex items-start justify-between gap-3 ${isFeatured ? "mb-5" : "mb-3"}`}>
            <div className="flex items-start gap-3">
              <div className={`
                relative flex-shrink-0 rounded-lg overflow-hidden bg-slate-50
                flex items-center justify-center
                ${isFeatured ? "w-14 h-14" : isLarge ? "w-12 h-12" : "w-10 h-10"}
              `}>
                <ImageLoader
                  width={isFeatured ? 36 : isLarge ? 28 : 24}
                  height={isFeatured ? 36 : isLarge ? 28 : 24}
                  src={project.icon_url}
                  alt={project.name}
                  className="object-contain"
                />
              </div>
              
              <div className="flex-1 min-w-0 pt-0.5">
                <h3 className={`
                  font-semibold text-slate-900 leading-tight group-hover:text-sky-600 transition-colors
                  ${isFeatured ? "text-xl" : isLarge ? "text-lg" : "text-base"}
                `}>
                  {project.name}
                </h3>
                <span className="text-xs text-slate-400 mt-0.5 block">
                  {new URL(project.link).hostname.replace('www.', '')}
                </span>
              </div>
            </div>

            <Link
              href={project.link}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 
                         flex items-center justify-center text-slate-400
                         hover:bg-gradient-to-r hover:from-[#00c6ff] hover:to-[#0072ff] hover:text-white
                         transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          <p className={`
            text-slate-500 leading-relaxed flex-1
            ${isFeatured ? "text-sm mb-5" : "text-sm mb-3"}
            ${isFeatured ? "line-clamp-4" : isLarge ? "line-clamp-2" : "line-clamp-2"}
          `}>
            {extractShortDescription(project.descriptions[0] || "")}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs text-slate-500 bg-slate-100 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className={`
            flex items-center gap-1 text-sm font-medium text-slate-900 mt-4
            opacity-0 group-hover:opacity-100 transition-opacity duration-200
          `}>
            <span>View case study</span>
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00c6ff] to-[#0072ff]
                        transform scale-x-0 group-hover:scale-x-100 origin-left 
                        transition-transform duration-300" />
      </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
