"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { certsAndAwards } from "@/lib/constants";
import BallCanvas from "@/components/models/Ball";
import AnimatedSection from "@/components/shared/AnimatedSection";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Certifications = () => {
  return (
    <AnimatedSection className="ds-section">
      <div className="ds-section-header mb-8">
        <p className="font-mono text-xs text-violet-400/80 tracking-[0.25em] uppercase mb-2">
          Recognition
        </p>
        <h3 className="text-3xl md:text-4xl font-black text-white">
          Awards & Certifications
        </h3>
        <p className="text-[#8892a4] text-sm mt-2">
          Professional certifications and achievements that validate my
          expertise
        </p>
      </div>

      <div className="ds-section-wrap">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, rgba(139,92,246,0.06) 0%, #0c0e13 40%, rgba(56,189,248,0.04) 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-violet-600/[0.07] blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-cyan-500/[0.05] blur-[70px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-6 md:p-8">
            {certsAndAwards.map((cert) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                className="group flex flex-col items-center"
              >
                <div className="w-full aspect-square max-w-[160px] mb-3 transition-transform duration-300 group-hover:scale-105">
                  <BallCanvas icon={cert.badge} />
                </div>

                <Link
                  href={cert.link}
                  target="_blank"
                  className="text-center group/link"
                >
                  <h4 className="text-[#c8d0e0] text-sm md:text-[15px] font-semibold leading-tight tracking-wide group-hover/link:text-cyan-300 transition-colors duration-200">
                    {cert.name}
                  </h4>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-slate-600 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View credential
                    <svg
                      className="w-3 h-3"
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
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Certifications;
