"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/constants";

const AnimatedCounter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const steps = 40;
    let cur = 0;
    const inc = value / steps;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= value) {
        setCount(value);
        clearInterval(t);
      } else setCount(Math.floor(cur));
    }, 1400 / steps);
    return () => clearInterval(t);
  }, [value]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const CATEGORIES = [
  "Gaming",
  "E-commerce",
  "FinTech",
  "Travel",
  "Construction",
  "Security",
];

const STAT_ITEMS = [
  {
    getValue: (len: number) => len,
    suffix: "",
    label: "Projects",
    color: "text-violet-300",
    border: "border-violet-500/20",
    bg: "bg-violet-500/[0.06]",
    glow: "rgba(139,92,246,0.15)",
    icon: (
      <svg
        className="w-4 h-4 opacity-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    getValue: () => 6,
    suffix: "",
    label: "Industries",
    color: "text-cyan-300",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/[0.06]",
    glow: "rgba(56,189,248,0.15)",
    icon: (
      <svg
        className="w-4 h-4 opacity-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    getValue: () => 15,
    suffix: "+",
    label: "Technologies",
    color: "text-emerald-300",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/[0.06]",
    glow: "rgba(52,211,153,0.15)",
    icon: (
      <svg
        className="w-4 h-4 opacity-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

const ProjectHero = () => (
  <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
    <div className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full bg-cyan-500/[0.06] blur-[150px] pointer-events-none" />
    <div className="absolute bottom-0 -left-56 w-[560px] h-[560px] rounded-full bg-violet-600/[0.07] blur-[130px] pointer-events-none" />
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)",
      }}
    />

    <div className="ds-section-wrap relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <div className="flex items-center gap-2.5 mb-5">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400/60" />
          <p className="font-mono text-[11px] text-cyan-400/80 tracking-[0.28em] uppercase">
            Portfolio · {new Date().getFullYear()}
          </p>
        </div>
        <h1
          className="font-black leading-[0.87] tracking-tight text-white mb-5"
          style={{ fontSize: "clamp(52px,9vw,100px)" }}
        >
          Selected <span className="ds-gradient-text">Work</span>
        </h1>
        <p className="text-[#8892a4] text-[clamp(15px,1.8vw,17px)] max-w-[500px] leading-relaxed mb-10">
          A curated collection spanning multiple industries — each built with
          performance, clean architecture, and thoughtful UX.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex flex-wrap gap-3 mb-10"
      >
        {STAT_ITEMS.map((st) => (
          <div
            key={st.label}
            className={`relative overflow-hidden rounded-2xl border ${st.border} ${st.bg} px-6 py-5 flex items-center gap-4 transition-all duration-200`}
            style={{ boxShadow: `0 0 20px ${st.glow}` }}
          >
            <div>
              <span
                className={`font-black text-4xl md:text-5xl ${st.color} tabular-nums leading-none block`}
              >
                <AnimatedCounter
                  value={st.getValue(projects.length)}
                  suffix={st.suffix}
                />
              </span>
              <span className="font-mono text-[10px] text-slate-600 uppercase tracking-[0.18em] mt-1 block">
                {st.label}
              </span>
            </div>
            <div className={`ml-auto ${st.color}`}>{st.icon}</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-3"
      >
        <span className="font-mono text-[10px] text-slate-700 tracking-[0.2em] uppercase flex-shrink-0">
          Industries
        </span>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.04 }}
              className="font-mono text-[11px] px-3.5 py-1.5 rounded-full border border-white/[0.06] text-slate-600 bg-white/[0.03] hover:border-violet-500/30 hover:text-violet-300 hover:bg-violet-500/[0.07] transition-all duration-200 cursor-default"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default ProjectHero;
