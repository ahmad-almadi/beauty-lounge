"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -10 } : {}}
      className={`glass-effect rounded-3xl p-8 transition-all duration-300 ${
        hover ? "hover:shadow-2xl" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
