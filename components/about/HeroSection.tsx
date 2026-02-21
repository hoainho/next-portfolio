"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { socialLinks } from "@/lib/constants";
import ImageLoader from "@/components/loader/ImageLoader";

const calculateYearsOfExperience = (startYear: number, startMonth: number): number => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const totalMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth);
  const years = Math.floor(totalMonths / 12 * 10) / 10;
  return years;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const HeroSection = () => {
  const yearsOfExperience = calculateYearsOfExperience(2019, 6);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative py-8 md:py-12"
    >
      <motion.div variants={itemVariants} className="mb-2">
        <span className="text-sm font-medium text-slate-500 tracking-wider uppercase">
          Senior Software Engineer | Frontend Tech Lead
        </span>
      </motion.div>

      <motion.h1 variants={itemVariants} className="head-text mb-4">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Hoai Nho
        </span>{" "}
        👋
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center gap-3 md:gap-6 mb-6 text-sm"
      >
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full">
          <span className="font-semibold text-slate-800">{yearsOfExperience}+</span>
          <span className="text-slate-600">years exp</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full">
          <span>🇻🇳</span>
          <span className="text-slate-600">Vietnam</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-700 font-medium">Open to opportunities</span>
        </div>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mb-8"
      >
        I'm a software engineer from Vietnam. With {yearsOfExperience} years of experience
        in the field. Throughout my career, I have demonstrated proficiency in
        utilizing technologies such as React and Vue for frontend development,
        while also adeptly handling backend tasks with Node.js. My deep
        understanding of JavaScript fundamentals, coupled with a comprehensive
        knowledge of its ecosystem, equips me to tackle complex challenges and
        deliver top-notch solutions.
      </motion.p>

      <motion.div variants={itemVariants} className="flex items-center gap-4">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.link}
            target={social.link.startsWith("http") ? "_blank" : "_self"}
            className="group flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-md transition-all duration-200"
          >
            <ImageLoader
              src={social.icon_url}
              alt={social.name}
              width={20}
              height={20}
              className="w-5 h-5 object-contain group-hover:scale-110 transition-transform"
            />
            <span className="text-sm font-medium text-slate-700">{social.name}</span>
          </Link>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="absolute -z-10 top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-full blur-3xl opacity-50"
      />
    </motion.section>
  );
};

export default HeroSection;
