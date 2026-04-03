"use client";

import { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/constants";
import BallCanvas from "@/components/models/Ball";
import AnimatedSection from "@/components/shared/AnimatedSection";

type TagKey = "Special" | "New" | "Feature";

const TAG_CONFIG: Record<TagKey, { color: string; border: string; bg: string; glow: string }> = {
  Special: { color: "text-purple-300",  border: "border-purple-500/25", bg: "bg-purple-500/[0.08]",  glow: "rgba(168,85,247,0.18)"  },
  New:     { color: "text-emerald-300", border: "border-emerald-500/25",bg: "bg-emerald-500/[0.08]", glow: "rgba(52,211,153,0.18)"  },
  Feature: { color: "text-orange-300",  border: "border-orange-500/25", bg: "bg-orange-500/[0.08]",  glow: "rgba(249,115,22,0.18)"  },
};

const Tag = ({ tag }: { tag: string }) => {
  const cfg = TAG_CONFIG[tag as TagKey];
  if (!cfg) return null;
  return (
    <span className={`font-mono text-[10px] font-medium tracking-[0.12em] uppercase px-2 py-0.5 rounded-full border ${cfg.color} ${cfg.border} ${cfg.bg}`}>
      {tag}
    </span>
  );
};

const ProductCard = memo(({ product, index }: { product: (typeof products)[0]; index: number }) => {
  const cfg = TAG_CONFIG[product.tag as TagKey];
  const glow = cfg?.glow ?? "rgba(139,92,246,0.15)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -3, transition: { duration: 0.16 } }}
      className="group"
    >
      <Link href={product.link} target="_blank">
        <div
          className="relative flex flex-col rounded-xl overflow-hidden transition-all duration-200"
          style={{
            background: "#0c0e13",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.11)";
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${glow}`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          <div
            className="w-full h-[100px] flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <BallCanvas icon={product.badge} />
          </div>

          <div className="px-4 pb-4 pt-3 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <h3 className="text-[#c8d0e0] font-semibold text-[13px] leading-snug group-hover:text-white transition-colors">
                {product.name}
              </h3>
              {product.tag && <Tag tag={product.tag} />}
            </div>
            <p className="text-[#3d4a5c] text-[11px] leading-relaxed line-clamp-2 flex-1">
              {product.description}
            </p>
            <div className="flex items-center gap-1 mt-3 font-mono text-[10px] text-slate-700 group-hover:text-violet-400 transition-colors">
              <span>Explore</span>
              <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

ProductCard.displayName = "ProductCard";

const Products = () => (
  <AnimatedSection className="ds-section">
    <div className="ds-section-header mb-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-violet-400/80 tracking-[0.25em] uppercase mb-2">
            Open Source
          </p>
          <h3 className="text-3xl md:text-4xl font-black text-white">My Products</h3>
        </div>
        <span className="font-mono text-xs text-slate-700 border border-slate-800 px-3 py-1.5 rounded-full flex-shrink-0">
          {products.length} shipped
        </span>
      </div>
    </div>

    <div className="ds-section-wrap pt-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {products.map((product, i) => (
          <ProductCard key={product.name} product={product} index={i} />
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Products;
