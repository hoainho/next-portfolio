"use client";

import { useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ImageLoader from "@/components/loader/ImageLoader";

interface Project {
  icon_url: string;
  theme: string;
  name: string;
  descriptions: string[];
  link: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const extractTechStack = (html: string): string[] => {
  const techPatterns = [
    "React", "Next.js", "Vue", "Node.js", "NestJS", "Golang", "TypeScript",
    "PostgreSQL", "Redis", "Docker", "AWS", "GCP", "Firebase", "Socket.io",
    "Kafka", "GraphQL", "TailwindCSS", "Python", "Django", "Jest", "MySQL",
    "DynamoDB", "ElasticSearch", "Lambda", "EC2", "CloudFront"
  ];
  
  const found: string[] = [];
  techPatterns.forEach(tech => {
    if (html.toLowerCase().includes(tech.toLowerCase()) && !found.includes(tech)) {
      found.push(tech);
    }
  });
  
  return found;
};

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);
  
  const techStack = useMemo(() => {
    if (!project) return [];
    return extractTechStack(project.descriptions[0] || "");
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl max-h-[90vh] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="flex items-start justify-between p-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center">
                      <ImageLoader
                        width={36}
                        height={36}
                        src={project.icon_url}
                        alt={project.name}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">
                        {project.name}
                      </h2>
                      <Link
                        href={project.link}
                        target="_blank"
                        className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1 transition-colors"
                      >
                        {project.link.replace(/^https?:\/\//, "").split("/")[0]}
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  <button
                    onClick={onClose}
                    className="w-8 h-8 flex items-center justify-center rounded-lg
                               text-slate-400 hover:text-slate-600 hover:bg-slate-100
                               transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {techStack.length > 0 && (
                  <div className="px-6 py-4 bg-slate-50 border-b border-slate-100">
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-white 
                                     rounded border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-6 overflow-y-auto max-h-[50vh]">
                  <div className="prose prose-slate prose-sm max-w-none
                                  prose-headings:text-slate-900 prose-headings:font-semibold
                                  prose-p:text-slate-600 prose-li:text-slate-600 
                                  prose-strong:text-slate-700 prose-strong:font-medium">
                    {project.descriptions.map((description, index) => (
                      <div
                        key={index}
                        className="mb-4 last:mb-0"
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 p-6 border-t border-slate-100 bg-slate-50">
                  <button
                    onClick={onClose}
                    className="px-5 py-2 text-sm text-slate-600 font-medium 
                               hover:text-slate-800 transition-colors"
                  >
                    Close
                  </button>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg
                               hover:bg-slate-800 transition-colors
                               flex items-center gap-2"
                  >
                    Visit Project
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
