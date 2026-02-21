"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Product3DProps {
  title: string;
  description: string;
  color: string;
}

export default function Product3D({ title, description, color }: Product3DProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="glass-effect rounded-3xl p-8 relative overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`} />
        
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary-300 to-lilac-300 opacity-20 blur-2xl"
          style={{ transform: "translateZ(50px)" }}
        />
        
        <div className="relative z-10" style={{ transform: "translateZ(75px)" }}>
          <h3 className="text-2xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
