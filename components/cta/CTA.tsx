"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DARK_PAGES = ["/about", "/projects", "/contact"];

const CTA = () => {
  const pathname = usePathname();
  const isDark = DARK_PAGES.includes(pathname);

  if (isDark) {
    return (
      <section
        className="relative my-14 overflow-hidden rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(12,14,19,0.98) 50%, rgba(56,189,248,0.04) 100%)",
          border: "1px solid rgba(139,92,246,0.18)",
          boxShadow:
            "0 0 60px rgba(139,92,246,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-violet-600/[0.09] blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-cyan-500/[0.07] blur-[70px] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.018]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
          <div className="flex-1 md:text-left text-center">
            <div className="flex items-center gap-2 mb-4 md:justify-start justify-center">
              <span className="h-px w-6 bg-violet-400/50" />
              <p className="font-mono text-[11px] text-violet-400/70 tracking-[0.26em] uppercase">
                Let&apos;s work together
              </p>
            </div>
            <p className="text-[#f0f2f8] font-black text-3xl md:text-4xl leading-[1.1] mb-3">
              Got a project{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg,#c4b5fd,#818cf8,#60a5fa,#34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                brewing?
              </span>
            </p>
            <p className="text-[#8892a4] text-[15px] leading-relaxed">
              Available for freelance projects and full-time roles.
            </p>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center gap-3">
            <Link
              href="/contact"
              className="btn-dark group cursor-pointer flex items-center gap-2.5 whitespace-nowrap"
            >
              <span>Start a conversation</span>
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] text-slate-700">
                Responds within 24h
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cta">
      <p className="cta-text">
        Got a project brewing in your mind? <br className="sm:block hidden" />
        Let&apos;s team up and bring it to life!
      </p>
      <Link href="/contact" className="btn cursor-pointer">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
