"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type AnimationDirection = "up" | "down" | "left" | "right";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: AnimationDirection;
  className?: string;
  once?: boolean;
}

const directionVariants = {
  up: { y: 40, opacity: 0 },
  down: { y: -40, opacity: 0 },
  left: { x: 40, opacity: 0 },
  right: { x: -40, opacity: 0 },
};

const AnimatedSection = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
