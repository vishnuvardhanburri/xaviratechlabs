"use client";
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function GlassCard({ children, delay = 0, className = '' }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay, 
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      // default includes invert-on-hover so cards invert text/icons on hover unless opted out
      className={`relative group group-glass invert-on-hover backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-300 hover:bg-black/80 active:bg-black ${className}`}
    >
      {children}
    </motion.div>
  );
}