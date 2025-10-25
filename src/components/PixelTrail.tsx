"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";

interface PixelTrailProps {
  pixelSize?: number;
  fadeDuration?: number;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function PixelTrail({
  pixelSize = 40,
  fadeDuration = 800,
  delay = 0,
  className = "",
  children,
}: PixelTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trigger, setTrigger] = useState(0);
  const activePixelsRef = useRef<Set<string>>(new Set());

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) / pixelSize);
      const y = Math.floor((e.clientY - rect.top) / pixelSize);

      const key = `${x}-${y}`;
      
      if (!activePixelsRef.current.has(key)) {
        activePixelsRef.current.add(key);
        setTrigger(prev => prev + 1);
        
        setTimeout(() => {
          activePixelsRef.current.delete(key);
          setTrigger(prev => prev + 1);
        }, fadeDuration);
      }
    },
    [pixelSize, fadeDuration]
  );

  if (!containerRef.current) return null;

  const columns = Math.ceil(
    (containerRef.current?.offsetWidth || 0) / pixelSize
  );
  const rows = Math.ceil(
    (containerRef.current?.offsetHeight || 0) / pixelSize
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full ${className}`}
      onMouseMove={handleMouseMove}
    >
      {children}
      
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex">
            {Array.from({ length: columns }).map((_, colIndex) => {
              const key = `${colIndex}-${rowIndex}`;
              const isActive = activePixelsRef.current.has(key);
              
              return (
                <motion.div
                  key={key}
                  className="border border-white/5"
                  style={{
                    width: `${pixelSize}px`,
                    height: `${pixelSize}px`,
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    backgroundColor: isActive 
                      ? "rgba(99, 102, 241, 0.5)" 
                      : "transparent",
                  }}
                  transition={{
                    duration: fadeDuration / 1000,
                    delay: delay / 1000,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}