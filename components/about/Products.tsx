'use client'

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/constants";
import BallCanvas from "@/components/models/Ball";
import AnimatedSection from "@/components/shared/AnimatedSection";

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Special":
        return "bg-gradient-to-r from-purple-500 to-indigo-600";
      case "New":
        return "bg-gradient-to-r from-green-400 to-teal-500";
      case "Feature":
        return "bg-gradient-to-r from-orange-400 to-pink-500";
      default:
        return "bg-gradient-to-r from-gray-400 to-gray-600";
    }
  };

  return (
    <AnimatedSection className="py-10 flex flex-col">
      <h3 className="subhead-text">My Products</h3>

      <div className="relative bg-linear-black-to-white py-12 px-4 mt-16 rounded-2xl overflow-hidden">
        <div className="bg-linear-back__top"></div>
        
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {products?.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={product.name}
              className="flex-shrink-0 w-[280px] md:w-full snap-center"
            >
              <div
                className="h-full flex flex-col items-center transition-all duration-300 ease-out bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl p-6 border border-[rgba(255,255,255,0.1)] hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
                onMouseEnter={() => setHoveredProduct(product.name)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative w-full flex justify-center mb-4">
                  {product.tag && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className={`${getTagColor(product.tag)} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse-slow flex items-center justify-center`}>
                        <span className="animate-shimmer inline-block">{product.tag}</span>
                      </div>
                    </div>
                  )}
                  <div className="h-[160px] w-[160px] lg:h-[140px] lg:w-[140px]">
                    <BallCanvas icon={product.badge} />
                  </div>
                </div>
                
                <Link href={product.link} target="_blank" className="cursor-pointer group w-full">
                  <h3 className="text-white text-center text-lg font-bold capitalize leading-tight tracking-wider group-hover:text-[#60efff] transition-colors duration-300">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-slate-300 text-center mt-3 text-sm leading-relaxed flex-grow">
                  {product.description}
                </p>
                
                <div className={`w-full h-0.5 mt-4 ${hoveredProduct === product.name ? 'bg-gradient-to-r from-transparent via-[#60efff] to-transparent' : 'bg-[rgba(255,255,255,0.1)]'} transition-all duration-500`} />
                
                <Link href={product.link} target="_blank" className="mt-4 text-sm text-[#60efff] hover:text-white transition-colors duration-300 flex items-center group">
                  <span>Explore</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Products;
