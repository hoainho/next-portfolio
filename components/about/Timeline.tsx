"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { experiences } from "@/lib/constants";
import ImageLoader from "@/components/loader/ImageLoader";
import AnimatedSection from "@/components/shared/AnimatedSection";

const Timeline = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <AnimatedSection className="ds-section">
      <div className="ds-section-header">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-violet-400/80 tracking-[0.25em] uppercase mb-2">
              Career Path
            </p>
            <h3 className="text-3xl md:text-4xl font-black text-white">
              Professional Journey
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              {experiences.length} roles · 2019 – present
            </p>
          </div>
        </div>
      </div>

      <div className="ds-section-divider mb-10" />

      <div className="ds-section-wrap">
        <div className="relative">
          <div className="absolute left-[22px] top-10 bottom-8 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/15 to-transparent hidden md:block" />

          <div className="space-y-2.5">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company_name + idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <div
                  className="relative md:pl-14 overflow-hidden rounded-[14px] transition-all duration-200"
                  style={{
                    background:
                      expanded === idx
                        ? "linear-gradient(135deg, rgba(139,92,246,0.04), rgba(12,14,19,1))"
                        : "#0c0e13",
                    border:
                      expanded === idx
                        ? "1px solid rgba(139,92,246,0.28)"
                        : "1px solid rgba(255,255,255,0.06)",
                    boxShadow:
                      expanded === idx
                        ? "0 0 30px rgba(139,92,246,0.09)"
                        : "none",
                  }}
                >
                  <div className="absolute left-[10px] top-[17px] hidden md:block z-10">
                    {idx === 0 ? (
                      <span className="relative flex h-6 w-6">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-25" />
                        <span
                          className="relative inline-flex rounded-full h-6 w-6 border-2 overflow-hidden"
                          style={{
                            borderColor: "#080c14",
                            backgroundColor: exp.icon_bg,
                          }}
                        >
                          <ImageLoader
                            src={exp.icon}
                            alt={exp.company_name}
                            width={14}
                            height={14}
                            className="w-full h-full object-contain"
                          />
                        </span>
                      </span>
                    ) : (
                      <div
                        className="w-6 h-6 rounded-full border-2 overflow-hidden flex items-center justify-center"
                        style={{
                          borderColor: "#080c14",
                          backgroundColor: exp.icon_bg,
                        }}
                      >
                        <ImageLoader
                          src={exp.icon}
                          alt={exp.company_name}
                          width={12}
                          height={12}
                          className="w-3 h-3 object-contain"
                        />
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setExpanded(expanded === idx ? null : idx)}
                    className="w-full text-left p-5 focus:outline-none"
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className="w-10 h-10 flex-shrink-0 rounded-xl overflow-hidden flex items-center justify-center md:hidden"
                        style={{
                          backgroundColor: exp.icon_bg,
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        <ImageLoader
                          src={exp.icon}
                          alt={exp.company_name}
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className="font-mono text-[10px] text-violet-300/70 px-2.5 py-0.5 rounded-full tracking-wider uppercase"
                            style={{
                              background: "rgba(139,92,246,0.1)",
                              border: "1px solid rgba(139,92,246,0.15)",
                            }}
                          >
                            {exp.date}
                          </span>
                          {idx === 0 && (
                            <span
                              className="font-mono text-[10px] text-emerald-400 px-2.5 py-0.5 rounded-full tracking-wider uppercase"
                              style={{
                                background: "rgba(52,211,153,0.08)",
                                border: "1px solid rgba(52,211,153,0.2)",
                                boxShadow: "0 0 10px rgba(52,211,153,0.12)",
                              }}
                            >
                              Current
                            </span>
                          )}
                        </div>

                        <h4 className="font-bold text-white text-[15px] leading-snug mb-1.5">
                          {exp.title}
                        </h4>

                        <div className="flex items-center gap-2">
                          <div
                            className="w-7 h-7 rounded-lg overflow-hidden flex-shrink-0 hidden md:flex items-center justify-center"
                            style={{
                              backgroundColor: exp.icon_bg,
                              border: "1px solid rgba(255,255,255,0.08)",
                            }}
                          >
                            <ImageLoader
                              src={exp.icon}
                              alt={exp.company_name}
                              width={18}
                              height={18}
                              className="w-[18px] h-[18px] object-contain"
                            />
                          </div>
                          <Link
                            href={exp.company_link}
                            target={
                              exp.company_link === "#" ? "_self" : "_blank"
                            }
                            onClick={(e) => e.stopPropagation()}
                            className="font-mono text-xs text-slate-600 hover:text-violet-400 transition-colors"
                          >
                            {exp.company_name}
                          </Link>
                        </div>
                      </div>

                      <motion.div
                        animate={{ rotate: expanded === idx ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-slate-600 mt-0.5"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                    </div>

                    {expanded !== idx && exp.points[0] && (
                      <p className="font-mono text-[11px] text-slate-700 mt-3 line-clamp-1">
                        {exp.points[0].slice(0, 90)}…
                      </p>
                    )}
                  </button>

                  <AnimatePresence>
                    {expanded === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.26 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-5 pb-5 border-t"
                          style={{ borderColor: "rgba(255,255,255,0.05)" }}
                        >
                          <ul className="mt-4 space-y-3">
                            {exp.points.map((pt, pi) => (
                              <motion.li
                                key={pi}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: pi * 0.03 }}
                                className="flex gap-3 text-[14px] text-[#8892a4] leading-relaxed"
                              >
                                <span className="text-violet-500/60 flex-shrink-0 mt-0.5 font-bold">
                                  ›
                                </span>
                                <span>{pt}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Timeline;
