"use client";
import { motion } from "framer-motion";

const items = [
  "Figma","React","Next.js","Framer","Python","Cursor","Midjourney","Runway","Wan","Higgsfield"
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transform: `translate(calc(50% + ${x}px), calc(50% + ${y}px))` }}
          >
            <div className="rounded-full bg-card border border-white/10 px-3 py-1 text-sm">
              {label}
            </div>
          </motion.div>
        );
      })}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="bg-card border border-white/10 px-5 py-3" style={{ borderRadius: "1rem" }}>
          <p className="text-sm text-muted">Tools & Stack</p>
          <p className="text-lg font-semibold">Vaneeza</p>
        </div>
      </div>
    </div>
  );
}


