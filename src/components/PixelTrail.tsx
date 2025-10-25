"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

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
  const trailId = useRef(uuidv4());
  const [activePixels, setActivePixels] = useState<Map<string, number>>(new Map());

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) / pixelSize);
      const y = Math.floor((e.clientY - rect.top) / pixelSize);

      const key = `${x}-${y}`;
      
      setActivePixels((prev) => {
        const newMap = new Map(prev);
        const now = Date.now();
        
        // Activate this pixel
        newMap.set(key, now);
        
        // Auto-remove after fade duration
        setTimeout(() => {
          setActivePixels((current) => {
            const updated = new Map(current);
            updated.delete(key);
            return updated;
          });
        }, fadeDuration);
        
        return newMap;
      });
    },
    [pixelSize, fadeDuration]
  );

  const columns = containerRef.current 
    ? Math.ceil((containerRef.current.offsetWidth || 0) / pixelSize)
    : 0;
  const rows = containerRef.current 
    ? Math.ceil((containerRef.current.offsetHeight || 0) / pixelSize)
    : 0;

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full ${className}`}
      onMouseMove={handleMouseMove}
    >
      {children}
      
      {columns > 0 && rows > 0 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex">
              {Array.from({ length: columns }).map((_, colIndex) => {
                const key = `${colIndex}-${rowIndex}`;
                const isActive = activePixels.has(key);
                
                return (
                  <motion.div
                    key={key}
                    id={`${trailId.current}-pixel-${colIndex}-${rowIndex}`}
                    className="border border-white/5"
                    style={{
                      width: `${pixelSize}px`,
                      height: `${pixelSize}px`,
                      minWidth: `${pixelSize}px`,
                      minHeight: `${pixelSize}px`,
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
      )}
    </div>
  );
}