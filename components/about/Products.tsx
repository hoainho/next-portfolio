'use client'

import { products } from "@/lib/constants";
import BallCanvas from "@/components/models/Ball";
import Link from "next/link";
import { useState } from "react";

type Props = {};

const Products = (props: Props) => {
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
    <div className="py-10 flex flex-col">
      <h3 className="subhead-text">My Products</h3>

      <div className="relative bg-linear-black-to-white py-12 px-4 flex-center flex-row flex-wrap gap-[30px] mt-16">
        <div className="bg-linear-back"></div>
        {products?.map((product, index) => (
          <div
            className="w-full max-w-[350px] flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl p-6 border border-[rgba(255,255,255,0.1)]"
            key={product.name}
            onMouseEnter={() => setHoveredProduct(product.name)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative w-full flex justify-center mb-4">
              {product.tag && (
                <div className={`absolute -top-3 -right-3 z-10`}>
                  <div className={`${getTagColor(product.tag)} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse-slow flex items-center justify-center`}>
                    <span className="animate-shimmer inline-block">{product.tag}</span>
                  </div>
                </div>
              )}
              <div className="h-[180px] w-[180px]">
                <BallCanvas icon={product.badge} />
              </div>
            </div>
            
            <Link href={product.link} target="_blank" className="cursor-pointer group w-full">
              <h3 className="text-white text-center text-xl font-bold capitalize leading-tight tracking-wider group-hover:text-[#60efff] transition-colors duration-300">
                {product.name}
              </h3>
            </Link>
            
            <p className="text-slate-300 text-center mt-3 text-sm leading-relaxed">
              {product.description}
            </p>
            
            <div className={`w-full h-0.5 mt-4 ${hoveredProduct === product.name ? 'bg-gradient-to-r from-transparent via-[#60efff] to-transparent' : 'bg-[rgba(255,255,255,0.1)]'} transition-all duration-500`}></div>
            
            <Link href={product.link} target="_blank" className="mt-4 text-sm text-[#60efff] hover:text-white transition-colors duration-300 flex items-center">
              <span>Explore</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
