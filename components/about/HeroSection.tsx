"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { socialLinks } from "@/lib/constants";
import ImageLoader from "@/components/loader/ImageLoader";

const calcYoe = () => {
  const now = new Date();
  return (
    Math.floor(
      (((now.getFullYear() - 2019) * 12 + now.getMonth() + 1 - 6) / 12) * 10,
    ) / 10
  );
};

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stats = [
  {
    value: (yoe: number) => `${yoe}+`,
    label: "Yrs Exp",
    accent: "text-violet-300",
    border: "border-violet-500/25",
    bg: "bg-violet-500/[0.06]",
    glow: "rgba(139,92,246,0.18)",
  },
  {
    value: () => "🇻🇳",
    label: "Vietnam",
    accent: "text-slate-300",
    border: "border-slate-700/40",
    bg: "bg-slate-800/20",
    glow: "transparent",
  },
  {
    value: () => "6+",
    label: "Industries",
    accent: "text-cyan-300",
    border: "border-cyan-500/25",
    bg: "bg-cyan-500/[0.06]",
    glow: "rgba(56,189,248,0.18)",
  },
  {
    value: () => "50+",
    label: "Projects",
    accent: "text-emerald-300",
    border: "border-emerald-500/25",
    bg: "bg-emerald-500/[0.06]",
    glow: "rgba(52,211,153,0.18)",
  },
];

const HeroSection = () => {
  const yoe = calcYoe();

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="absolute -top-60 -left-60 w-[900px] h-[900px] rounded-full bg-violet-700/[0.08] blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-600/[0.04] blur-[100px] pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
        }}
      />

      <div className="ds-section-wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 xl:gap-16 items-start">
          <div>
            <motion.div
              variants={item}
              className="mb-7 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.06] backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] text-emerald-400 tracking-[0.22em] uppercase font-medium">
                Available for opportunities
              </span>
            </motion.div>

            <motion.div variants={item} className="mb-7">
              <h1
                className="font-black leading-[0.87] tracking-tight text-white mb-4"
                style={{ fontSize: "clamp(52px,9vw,104px)" }}
              >
                Hi, I&apos;m{" "}
                <span className="ds-gradient-text-animated">Hoai Nho</span>
                <span
                  className="inline-block ml-3 origin-[70%_70%]"
                  style={{ fontSize: "clamp(40px,7vw,80px)" }}
                >
                  👋
                </span>
              </h1>
              <h2 className="text-[clamp(15px,2.5vw,22px)] font-medium text-slate-500 tracking-tight">
                Senior Software Engineer · Frontend Tech Lead
              </h2>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-2.5 mb-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border ${s.border} ${s.bg} backdrop-blur-sm transition-all duration-200`}
                  style={{
                    boxShadow: `0 0 16px ${s.glow}`,
                  }}
                >
                  <span
                    className={`text-xl font-black ${s.accent} leading-none tabular-nums`}
                  >
                    {s.value(yoe)}
                  </span>
                  <span className="font-mono text-[10px] text-slate-600 uppercase tracking-[0.14em]">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={item}
              className="text-[#8892a4] text-[clamp(15px,1.8vw,17px)] leading-relaxed max-w-[540px] mb-9"
            >
              Software engineer from Vietnam with{" "}
              <span className="text-violet-300 font-semibold">{yoe} years</span>{" "}
              building scalable products across fintech, gaming, construction,
              and logistics. Deep JavaScript roots, full-stack reach, and a
              passion for{" "}
              <span
                className="font-semibold"
                style={{
                  background: "linear-gradient(90deg, #38bdf8, #34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                open-source contribution
              </span>
              .
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <Link
                  key={s.name}
                  href={s.link}
                  target={s.link.startsWith("http") ? "_blank" : "_self"}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:border-violet-500/40 hover:bg-violet-500/[0.07] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-200"
                >
                  <ImageLoader
                    src={s.icon_url}
                    alt={s.name}
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain opacity-40 group-hover:opacity-90 transition-opacity"
                  />
                  <span className="font-mono text-xs text-slate-500 group-hover:text-violet-300 transition-colors tracking-wide">
                    {s.name}
                  </span>
                </Link>
              ))}
            </motion.div>
          </div>

          <motion.div variants={item} className="hidden lg:block pt-2">
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-violet-500/[0.1] to-cyan-500/[0.05] blur-2xl pointer-events-none" />

              <div
                className="relative rounded-2xl overflow-hidden font-mono text-[11px]"
                style={{
                  background: "linear-gradient(145deg, #0d1117, #0a0d14)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04) inset",
                }}
              >
                <div
                  className="flex items-center gap-1.5 px-4 py-3 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-auto text-[#3d4a5c] text-[10px] tracking-wide">
                    profile.ts
                  </span>
                </div>

                <div className="p-5 space-y-1 leading-[1.8]">
                  <p>
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-cyan-300">engineer</span>{" "}
                    <span className="text-[#3d4a5c]">= {"{"}</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-slate-400">name</span>
                    <span className="text-[#3d4a5c]">:</span>{" "}
                    <span style={{ color: "#34d399" }}>
                      &quot;Hoai Nho&quot;
                    </span>
                    <span className="text-[#3d4a5c]">,</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-slate-400">role</span>
                    <span className="text-[#3d4a5c]">:</span>{" "}
                    <span style={{ color: "#34d399" }}>
                      &quot;Senior SWE&quot;
                    </span>
                    <span className="text-[#3d4a5c]">,</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-slate-400">yoe</span>
                    <span className="text-[#3d4a5c]">:</span>{" "}
                    <span style={{ color: "#f7cc51" }}>{yoe}</span>
                    <span className="text-[#3d4a5c]">,</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-slate-400">stack</span>
                    <span className="text-[#3d4a5c]">:</span>{" "}
                    <span className="text-[#3d4a5c]">[</span>
                  </p>
                  {["React", "Next.js", "TypeScript", "Node.js"].map((t) => (
                    <p key={t} className="pl-10">
                      <span style={{ color: "#34d399" }}>&quot;{t}&quot;</span>
                      <span className="text-[#3d4a5c]">,</span>
                    </p>
                  ))}
                  <p className="pl-5">
                    <span className="text-[#3d4a5c]">]</span>
                    <span className="text-[#3d4a5c]">,</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-slate-400">location</span>
                    <span className="text-[#3d4a5c]">:</span>{" "}
                    <span style={{ color: "#34d399" }}>
                      &quot;🇻🇳 Vietnam&quot;
                    </span>
                    <span className="text-[#3d4a5c]">,</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-slate-400">status</span>
                    <span className="text-[#3d4a5c]">:</span>{" "}
                    <span style={{ color: "#34d399" }}>
                      &quot;open_to_work&quot;
                    </span>
                  </p>
                  <p>
                    <span className="text-[#3d4a5c]">{"}"}</span>
                  </p>
                </div>

                <div
                  className="flex items-center gap-2 px-5 py-3 border-t"
                  style={{
                    borderColor: "rgba(255,255,255,0.05)",
                    background: "rgba(0,0,0,0.2)",
                  }}
                >
                  <span className="ds-cursor-blink text-violet-400">▌</span>
                  <span className="text-[#3d4a5c] text-[10px] tracking-wider">
                    ready to ship
                  </span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[#3d4a5c] text-[10px]">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
