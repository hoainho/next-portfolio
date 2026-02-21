"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  showValue?: boolean;
  className?: string;
}

const ProgressBar = ({
  value,
  max,
  label,
  showValue = true,
  className = "",
}: ProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div ref={ref} className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-slate-700">{label}</span>
          {showValue && (
            <span className="text-xs text-slate-500">{value} yrs</span>
          )}
        </div>
      )}
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-full"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
