"use client";

import { memo, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/constants";
import BallCanvas from "@/components/models/Ball";
import AnimatedSection from "@/components/shared/AnimatedSection";

type ProductItem = (typeof products)[number];
type TagKey = "Special" | "New" | "Feature";

interface TagConfig {
  hoverColor: string;
  dotColor: string;
  glowColor: string;
  indexGlow: string;
}

const TAG_CONFIG: Record<TagKey, TagConfig> = {
  Special: {
    hoverColor: "#c4b5fd",
    dotColor: "#a78bfa",
    glowColor: "rgba(168,85,247,0.15)",
    indexGlow: "rgba(168,85,247,0.12)",
  },
  New: {
    hoverColor: "#6ee7b7",
    dotColor: "#34d399",
    glowColor: "rgba(52,211,153,0.12)",
    indexGlow: "rgba(52,211,153,0.08)",
  },
  Feature: {
    hoverColor: "#fdba74",
    dotColor: "#f97316",
    glowColor: "rgba(249,115,22,0.10)",
    indexGlow: "rgba(249,115,22,0.06)",
  },
};

const TAG_ORDER: TagKey[] = ["Special", "New", "Feature"];

const NAME_STYLES: Record<TagKey, string> = {
  Special: "text-xl font-black tracking-[-0.01em]",
  New: "text-[17px] font-bold tracking-[-0.005em]",
  Feature: "text-[15px] font-semibold",
};

function getSortedProducts(): ProductItem[] {
  const grouped: Record<TagKey, ProductItem[]> = {
    Special: [],
    New: [],
    Feature: [],
  };
  for (const p of products) {
    const tag = p.tag as TagKey;
    if (grouped[tag]) grouped[tag].push(p);
  }
  return TAG_ORDER.flatMap((t) => grouped[t]);
}

const EditorialHeader = () => (
  <div className="ds-section-header mb-10 md:mb-14">
    <div className="flex items-end gap-4 md:gap-6">
      <div className="flex-1 min-w-0">
        <p className="font-mono text-[11px] text-[#8892a4] tracking-[0.2em] uppercase mb-1.5">
          Open Source
        </p>
        <h3 className="text-3xl md:text-[42px] font-black text-white leading-[1.1] tracking-[-0.02em]">
          My Products
        </h3>
      </div>

      <div className="flex items-center gap-3 flex-shrink-0 pb-1">
        <span className="font-mono text-[12px] text-[#5a6478] tabular-nums">
          {products.length} shipped
        </span>
        <div
          className="hidden sm:block h-[1px] w-16 md:w-32 lg:w-48"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.08), rgba(124,111,239,0.15), transparent)",
          }}
        />
      </div>
    </div>
  </div>
);

const ProductRow = memo(
  ({
    product,
    index,
    globalIndex,
  }: {
    product: ProductItem;
    index: number;
    globalIndex: number;
  }) => {
    const [hovered, setHovered] = useState(false);
    const tag = product.tag as TagKey;
    const cfg = TAG_CONFIG[tag];
    const nameStyle = NAME_STYLES[tag];
    const displayIndex = String(globalIndex + 1).padStart(2, "0");
    const isOdd = globalIndex % 2 === 0;

    return (
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.04,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Link
          href={product.link}
          target="_blank"
          className="group block"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className="relative py-5 md:py-6 transition-colors duration-300"
            style={{
              backgroundColor: hovered
                ? "rgba(255,255,255,0.025)"
                : "transparent",
              borderBottom: isOdd
                ? "1px solid rgba(255,255,255,0.04)"
                : "1px solid transparent",
            }}
          >
            <div className="ds-section-wrap !py-0">
              <span
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 font-black text-[80px] md:text-[120px] leading-none select-none pointer-events-none transition-all duration-500"
                style={{
                  color: "white",
                  opacity: hovered ? 0.09 : 0.04,
                  textShadow: hovered ? `0 0 40px ${cfg.indexGlow}` : "none",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {displayIndex}
              </span>

              <div className="relative z-10 flex items-center gap-4 md:gap-6">
                <div
                  className="w-[72px] h-[72px] md:w-[96px] md:h-[96px] flex-shrink-0 rounded-xl overflow-hidden transition-transform duration-300"
                  style={{
                    background: "transparent",
                    transform: hovered ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <div className="w-full h-full">
                    <BallCanvas icon={product.badge} />
                  </div>
                </div>

                <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
                  <div className="flex-1 min-w-0">
                    <h4
                      className={`${nameStyle} leading-snug transition-colors duration-300 truncate`}
                      style={{
                        color: hovered ? cfg.hoverColor : "#e8ecf4",
                      }}
                    >
                      {product.name}
                    </h4>
                    <p className="text-[12px] md:text-[13px] text-[#5a6478] leading-relaxed mt-0.5 line-clamp-1 md:line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span
                      className="font-mono text-[10px] tracking-[0.08em] uppercase flex items-center gap-1.5"
                      style={{ color: cfg.dotColor }}
                    >
                      <span
                        className="w-1 h-1 rounded-full inline-block"
                        style={{ backgroundColor: cfg.dotColor }}
                      />
                      {product.tag}
                    </span>

                    <svg
                      className="w-4 h-4 text-[#3d4a5c] transition-all duration-300"
                      style={{
                        color: hovered ? cfg.hoverColor : "#3d4a5c",
                        transform: hovered
                          ? "translateX(4px)"
                          : "translateX(0)",
                      }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  },
);
ProductRow.displayName = "ProductRow";

const Products = () => {
  const sorted = getSortedProducts();

  return (
    <AnimatedSection className="ds-section">
      <EditorialHeader />

      <div className="ds-section-wrap !px-0">
        <div
          className="h-[1px] mb-2"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, transparent)",
          }}
        />

        {sorted.map((product, i) => (
          <ProductRow
            key={product.name}
            product={product}
            index={i}
            globalIndex={i}
          />
        ))}

        <div
          className="h-[1px] mt-2"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, transparent)",
          }}
        />
      </div>
    </AnimatedSection>
  );
};

export default Products;
