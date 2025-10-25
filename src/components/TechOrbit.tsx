"use client";

import { motion } from "framer-motion";

const items = [
  "Figma", "React", "Next.js", "Framer", "Python", 
  "Cursor", "Midjourney", "Runway", "Wan", "Higgsfield"
];

export default function TechOrbit() {
  return (
    <div className="relative mx-auto h-[460px] w-[460px]">
      {items.map((label, i) => {
        const angle = (i / items.length) * Math.PI * 2;
        const r = 180;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        
        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ 
              transform: `translate(calc(50% + ${x}px), calc(50% + ${y}px))` 
            }}
          >
            <div className="rounded-full bg-card border border-white/10 px-4 py-2 text-sm font-medium text-fg hover:border-accent/50 hover:bg-accent/10 transition-all duration-300">
              {label}
            </div>
          </motion.div>
        );
      })}
      
      {/* Center content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <div className="rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 px-6 py-4 backdrop-blur-sm">
          <p className="text-sm text-muted mb-1">Tools & Stack</p>
          <p className="text-xl font-bold gradient-text">Vaneeza</p>
        </div>
      </motion.div>
    </div>
  );
}


