"use client";

import { motion } from "framer-motion";

export default function Hero3D() {
  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
      {/* Placeholder background with gradient pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)'
        }} />
      </div>
      
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute inset-x-0 bottom-10 text-center"
      >
        <motion.p 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm text-muted"
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </div>
  );
}


