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

const TECH_PATTERNS = [
  "React",
  "Next.js",
  "Vue",
  "Node.js",
  "NestJS",
  "Golang",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "GCP",
  "Firebase",
  "Socket.io",
  "Kafka",
  "GraphQL",
  "TailwindCSS",
  "Python",
  "Django",
  "Jest",
  "MySQL",
];

const extractTech = (html: string, limit = 4) => {
  const found: string[] = [];
  TECH_PATTERNS.forEach((t) => {
    if (html.toLowerCase().includes(t.toLowerCase()) && found.length < limit)
      found.push(t);
  });
  return found.length ? found : ["Modern Stack"];
};

const plainText = (html: string, max: number) => {
  const t = html.replace(/<[^>]*>/g, "");
  return t.length > max ? t.slice(0, max) + "…" : t;
};

const ArrowIcon = ({ size = 3.5 }: { size?: number }) => (
  <svg
    className={`w-${size} h-${size} group-hover:translate-x-0.5 transition-transform`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const ExternalLinkIcon = ({ size = "3.5" }: { size?: string }) => (
  <svg
    className={`w-${size} h-${size}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const ProjectCard = ({
  project,
  variant = "medium",
  index = 0,
  onClick,
}: ProjectCardProps) => {
  const tech = useMemo(
    () =>
      extractTech(
        project.descriptions[0] ?? "",
        variant === "featured" ? 6 : 4,
      ),
    [project.descriptions, variant],
  );
  const isFeatured = variant === "featured";
  const isLarge = variant === "large";

  let hostname = "";
  try {
    hostname = new URL(project.link).hostname.replace("www.", "");
  } catch {
    hostname = "";
  }

  const num = String(index + 1).padStart(2, "0");

  if (isFeatured) {
    return (
      <motion.article
        onClick={onClick}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        whileHover={{ scale: 1.004 }}
        className="cursor-pointer group"
      >
        <div
          className="relative overflow-hidden rounded-2xl transition-all duration-300"
          style={{
            background:
              "linear-gradient(145deg, #0f0c1a 0%, #0a0d18 40%, #070b15 100%)",
            border: "1px solid rgba(139,92,246,0.2)",
            boxShadow: "0 4px 40px rgba(0,0,0,0.4)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(139,92,246,0.38)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 60px rgba(139,92,246,0.16), 0 4px 40px rgba(0,0,0,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(139,92,246,0.2)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 4px 40px rgba(0,0,0,0.4)";
          }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-violet-500/80 via-violet-500/40 to-transparent" />
          <div className="absolute -top-28 -right-28 w-80 h-80 rounded-full bg-violet-600/[0.08] blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-20 left-1/4 w-64 h-64 rounded-full bg-cyan-500/[0.05] blur-[80px] pointer-events-none" />

          <div className="relative z-10 p-7 md:p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(15,12,26,0.9)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 0 24px rgba(0,0,0,0.5)",
                  }}
                >
                  <ImageLoader
                    width={40}
                    height={40}
                    src={project.icon_url}
                    alt={project.name}
                    className="object-contain w-10 h-10"
                  />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-violet-400/50 tracking-[0.28em] uppercase mb-1">
                    Featured · {num}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-violet-100 transition-colors leading-tight">
                    {project.name}
                  </h3>
                  {hostname && (
                    <span className="font-mono text-[11px] text-slate-700">
                      {hostname}
                    </span>
                  )}
                </div>
              </div>
              <Link
                href={project.link}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-violet-400 transition-all flex-shrink-0 mt-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <ExternalLinkIcon />
              </Link>
            </div>

            <p className="text-[#8892a4] text-[15px] leading-relaxed mb-6 max-w-2xl">
              {plainText(project.descriptions[0] ?? "", 240)}
            </p>

            <div className="flex flex-wrap gap-2 mb-7">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-[11px] font-mono text-violet-300/70 rounded-full transition-colors"
                  style={{
                    background: "rgba(139,92,246,0.07)",
                    border: "1px solid rgba(139,92,246,0.14)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold text-violet-300 group-hover:text-violet-200 transition-colors">
              <span>View case study</span>
              <ArrowIcon size={3.5} />
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      onClick={onClick}
      whileHover={{ y: -3, transition: { duration: 0.18 } }}
      className="group h-full cursor-pointer"
    >
      <div
        className="h-full flex flex-col transition-all duration-200"
        style={{
          background: "#0c0e13",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "14px",
          minHeight: isLarge ? "220px" : "196px",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            "rgba(255,255,255,0.1)";
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 0 30px rgba(139,92,246,0.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            "rgba(255,255,255,0.06)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        <div className="p-5 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div
                className={`overflow-hidden flex items-center justify-center flex-shrink-0 rounded-xl ${isLarge ? "w-12 h-12" : "w-10 h-10"}`}
                style={{
                  background: "rgba(15,18,25,0.95)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <ImageLoader
                  width={isLarge ? 28 : 24}
                  height={isLarge ? 28 : 24}
                  src={project.icon_url}
                  alt={project.name}
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3
                  className={`font-bold text-white leading-tight group-hover:text-violet-200 transition-colors ${isLarge ? "text-[15px]" : "text-sm"}`}
                >
                  {project.name}
                </h3>
                {hostname && (
                  <span className="font-mono text-[10px] text-slate-700">
                    {hostname}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 ml-2">
              <span className="font-mono text-[10px] text-slate-800 font-bold tabular-nums">
                {num}
              </span>
              <Link
                href={project.link}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-600 hover:text-violet-400 transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <ExternalLinkIcon size="3" />
              </Link>
            </div>
          </div>

          <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-3.5 line-clamp-3">
            {plainText(project.descriptions[0] ?? "", isLarge ? 130 : 90)}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 text-[10px] font-mono text-slate-600 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-violet-400/50 group-hover:text-violet-300 transition-colors mt-auto">
            <span>View case study</span>
            <ArrowIcon size={3} />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
