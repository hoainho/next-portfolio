"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { skills, SKILL_TYPE } from "@/lib/constants";
import ImageLoader from "@/components/loader/ImageLoader";
import ProgressBar from "@/components/shared/ProgressBar";
import AnimatedSection from "@/components/shared/AnimatedSection";

const SKILL_TABS = [
  { key: "all", label: "All" },
  { key: SKILL_TYPE.FRONTEND, label: "Frontend" },
  { key: SKILL_TYPE.BACKEND, label: "Backend" },
  { key: SKILL_TYPE.DATABASE, label: "Database" },
  { key: SKILL_TYPE.DEVOPS, label: "DevOps" },
  { key: SKILL_TYPE.SERVICE, label: "Services" },
  { key: SKILL_TYPE.STATE_MANAGEMENT, label: "State Mgmt" },
  { key: SKILL_TYPE.VERSION_CONTROL, label: "Version Control" },
];

const MAX_YEARS = 5;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
  },
};

const SkillTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = useMemo(() => {
    const filtered =
      activeTab === "all"
        ? skills
        : skills.filter((skill) => skill.type === activeTab);
    return filtered.sort((a, b) => b.yoe - a.yoe);
  }, [activeTab]);

  return (
    <AnimatedSection className="py-10">
      <h3 className="subhead-text mb-2">Technical Expertise</h3>
      <p className="text-slate-500 text-sm mb-8">
        Technologies and tools I work with, organized by proficiency
      </p>

      <div className="relative mb-10">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {SKILL_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                relative px-4 py-2 text-sm font-medium rounded-lg
                transition-colors duration-200
                ${
                  activeTab === tab.key
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }
              `}
            >
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 flex items-center gap-2">
        <span className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-700">
            {filteredSkills.length}
          </span>{" "}
          {filteredSkills.length === 1 ? "skill" : "skills"}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative bg-white border border-slate-200 rounded-xl p-4 
                         hover:border-slate-300 hover:shadow-lg hover:-translate-y-1
                         transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex-shrink-0 bg-slate-50 rounded-lg flex items-center justify-center
                                group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-cyan-50
                                transition-colors duration-300">
                  <ImageLoader
                    src={skill.image_url}
                    alt={skill.name}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-slate-800 truncate">
                    {skill.name}
                  </h4>
                  <span className="text-xs text-slate-400">{skill.type}</span>
                </div>
              </div>

              <ProgressBar
                value={skill.yoe}
                max={MAX_YEARS}
                showValue={true}
              />

              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredSkills.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-slate-500"
        >
          No skills found for this category.
        </motion.div>
      )}
    </AnimatedSection>
  );
};

export default SkillTabs;
