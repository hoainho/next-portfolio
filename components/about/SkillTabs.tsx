"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, SKILL_TYPE } from "@/lib/constants";
import ImageLoader from "@/components/loader/ImageLoader";
import AnimatedSection from "@/components/shared/AnimatedSection";

const TABS = [
  { key: "all", label: "All" },
  { key: SKILL_TYPE.FRONTEND, label: "Frontend" },
  { key: SKILL_TYPE.BACKEND, label: "Backend" },
  { key: SKILL_TYPE.DATABASE, label: "Database" },
  { key: SKILL_TYPE.DEVOPS, label: "DevOps" },
  { key: SKILL_TYPE.SERVICE, label: "Services" },
  { key: SKILL_TYPE.STATE_MANAGEMENT, label: "State" },
  { key: SKILL_TYPE.VERSION_CONTROL, label: "Git" },
];

const MASTERY = [
  {
    min: 4,
    label: "Expert",
    color: "#a78bfa",
    ring: "ring-violet-500/25",
    glow: "rgba(167,139,250,0.25)",
  },
  {
    min: 3,
    label: "Advanced",
    color: "#60a5fa",
    ring: "ring-blue-500/25",
    glow: "rgba(96,165,250,0.25)",
  },
  {
    min: 1.5,
    label: "Proficient",
    color: "#34d399",
    ring: "ring-emerald-500/25",
    glow: "rgba(52,211,153,0.25)",
  },
  {
    min: 0,
    label: "Learning",
    color: "#64748b",
    ring: "ring-slate-600/20",
    glow: "rgba(100,116,139,0.2)",
  },
];
const getMastery = (yoe: number) =>
  MASTERY.find((m) => yoe >= m.min) ?? MASTERY[3];

const SkillTabs = () => {
  const [active, setActive] = useState("all");
  const filtered = useMemo(() => {
    const f =
      active === "all" ? skills : skills.filter((s) => s.type === active);
    return [...f].sort((a, b) => b.yoe - a.yoe);
  }, [active]);

  return (
    <AnimatedSection className="ds-section">
      <div className="ds-section-header">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-violet-400/80 tracking-[0.25em] uppercase mb-2">
              Technical Arsenal
            </p>
            <h3 className="text-3xl md:text-4xl font-black text-white">
              Skills & Expertise
            </h3>
          </div>
          <span className="font-mono text-xs text-slate-600 border border-slate-800 px-3 py-1.5 rounded-full flex-shrink-0">
            {filtered.length}/{skills.length}
          </span>
        </div>
      </div>

      <div className="ds-section-divider mb-10" />

      <div className="ds-section-wrap">
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`relative px-4 py-2 rounded-lg font-mono text-xs font-medium transition-all duration-200 ${
                active === tab.key
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/40"
              }`}
            >
              {active === tab.key && (
                <motion.div
                  layoutId="skill-tab-bg"
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-violet-500 rounded-lg shadow-[0_0_16px_rgba(139,92,246,0.35)]"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
          >
            {filtered.map((skill, i) => {
              const mastery = getMastery(skill.yoe);
              const pct = Math.min((skill.yoe / 5) * 100, 100);
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.22, delay: i * 0.018 }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  className="group cursor-default rounded-[14px] transition-all duration-200"
                  style={{
                    padding: "18px",
                    background: "#0c0e13",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      `${mastery.color}30`;
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      `0 0 20px ${mastery.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-200"
                      style={{
                        background: "rgba(12,16,26,0.9)",
                        border: `1px solid ${mastery.color}28`,
                        boxShadow: `0 0 10px ${mastery.glow}`,
                      }}
                    >
                      <ImageLoader
                        src={skill.image_url}
                        alt={skill.name}
                        width={22}
                        height={22}
                        className="w-[22px] h-[22px] object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[#c8d0e0] text-xs truncate leading-tight mb-0.5">
                        {skill.name}
                      </p>
                      <p
                        className="font-mono text-[10px] leading-none font-medium"
                        style={{ color: mastery.color }}
                      >
                        {mastery.label}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div
                      className="flex-1 h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.0,
                          delay: 0.1 + i * 0.01,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${mastery.color}, ${mastery.color}80)`,
                          boxShadow: `0 0 8px ${mastery.glow}`,
                        }}
                      />
                    </div>
                    <span
                      className="font-mono text-[10px] w-5 text-right flex-shrink-0 tabular-nums"
                      style={{ color: mastery.color, opacity: 0.7 }}
                    >
                      {skill.yoe}y
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
};

export default SkillTabs;
