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
    <AnimatedSection className="py-10">
      <h3 className="subhead-text mb-2">Awards & Certifications</h3>
      <p className="text-slate-500 text-sm mb-8">
        Professional certifications and achievements that validate my expertise
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative bg-linear-black-to-white py-8 rounded-2xl overflow-hidden"
      >
        <div className="bg-linear-back" />
        
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4">
          {certsAndAwards.map((cert) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-square max-w-[180px] mb-3 transition-transform duration-300 group-hover:scale-105">
                <BallCanvas icon={cert.badge} />
              </div>
              
              <Link
                href={cert.link}
                target="_blank"
                className="text-center group/link"
              >
                <h4 className="text-white text-sm md:text-base font-semibold leading-tight tracking-wide 
                               group-hover/link:text-[#60efff] transition-colors duration-200">
                  {cert.name}
                </h4>
                <span className="inline-flex items-center gap-1 text-xs text-slate-400 mt-1 
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  View credential
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default Certifications;
