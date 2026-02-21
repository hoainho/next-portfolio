"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { projects } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

const categories = [
  "Gaming",
  "E-commerce", 
  "FinTech",
  "Travel",
  "Construction",
  "Security",
];

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
};

const ProjectHero = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative py-12 md:py-16"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 tracking-wide uppercase">
          <span className="w-8 h-px bg-gradient-to-r from-[#00c6ff] to-[#0072ff]" />
          Selected Work
        </span>
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
        Projects & 
        <span className="block mt-1">
          <span className="blue-gradient_text">Case Studies</span>
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-slate-500 text-base md:text-lg leading-relaxed max-w-xl mb-10"
      >
        A curated selection of projects spanning multiple industries—each 
        demonstrating my focus on performance, clean architecture, and 
        thoughtful user experience.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex items-center gap-8 md:gap-12 mb-10 pb-10 border-b border-slate-200"
      >
        <div>
          <div className="text-3xl md:text-4xl font-bold text-slate-900">
            <AnimatedCounter value={projects.length} suffix="" />
          </div>
          <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Projects</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-slate-900">
            <AnimatedCounter value={6} suffix="" />
          </div>
          <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Industries</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-slate-900">
            <AnimatedCounter value={15} suffix="+" />
          </div>
          <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Technologies</div>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap gap-2"
      >
        {categories.map((category) => (
          <span
            key={category}
            className="px-3 py-1.5 text-sm rounded-full transition-all cursor-default
              text-slate-600 bg-slate-100 hover:bg-sky-50 hover:text-sky-600"
          >
            {category}
          </span>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectHero;
