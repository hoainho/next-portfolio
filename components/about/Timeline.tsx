"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { experiences } from "@/lib/constants";
import ImageLoader from "@/components/loader/ImageLoader";
import AnimatedSection from "@/components/shared/AnimatedSection";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <AnimatedSection className="py-16">
      <h3 className="subhead-text mb-2">Professional Journey</h3>
      <p className="text-slate-500 text-sm mb-12">
        I have gained experience working with several firms, enhancing my
        abilities and collaborating with talented individuals.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative"
      >
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-slate-200" />

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company_name + index}
            variants={itemVariants}
            className="relative pl-16 md:pl-20 pb-12 last:pb-0"
          >
            <div
              className="absolute left-3 md:left-5 w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white shadow-md flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: experience.icon_bg }}
            >
              <Link
                href={experience.company_link}
                target={experience.company_link === "#" ? "_self" : "_blank"}
                className="w-full h-full flex items-center justify-center"
              >
                <ImageLoader
                  src={experience.icon}
                  alt={experience.company_name}
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </Link>
            </div>

            <div className="absolute left-0 md:-left-1 top-10 hidden md:block">
              <span className="inline-block px-2 py-1 text-[10px] font-semibold text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-md shadow-sm -rotate-90 origin-left whitespace-nowrap">
                {experience.date.split(" - ")[0]}
              </span>
            </div>

            <div
              className={`
                bg-white border rounded-xl overflow-hidden transition-all duration-300
                ${expandedIndex === index 
                  ? "border-slate-300 shadow-lg" 
                  : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                }
              `}
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full text-left p-4 md:p-5 focus:outline-none"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                        {experience.date}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">
                      {experience.title}
                    </h4>
                    <Link
                      href={experience.company_link}
                      target={experience.company_link === "#" ? "_self" : "_blank"}
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm text-slate-600 hover:text-blue-600 hover:underline transition-colors"
                    >
                      {experience.company_name}
                    </Link>
                  </div>
                  
                  <div className="flex-shrink-0 mt-1">
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600"
                    >
                      <svg
                        className="w-4 h-4"
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
                </div>

                {expandedIndex !== index && experience.points.length > 0 && (
                  <p className="text-sm text-slate-500 mt-3 line-clamp-2">
                    {experience.points[0].substring(0, 120)}...
                  </p>
                )}
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                      <ul className="mt-4 space-y-3">
                        {experience.points.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: pointIndex * 0.05 }}
                            className="flex gap-3 text-sm text-slate-600"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                            <span className="leading-relaxed">{point}</span>
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
      </motion.div>
    </AnimatedSection>
  );
};

export default Timeline;
