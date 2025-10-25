"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  children: React.ReactNode;
}

export default function ImageGallery({ images, children }: ImageGalleryProps) {
  const [hoverImage, setHoverImage] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    
    setPosition({ x: clientX, y: clientY });
    
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setHoverImage(randomImage);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setHoverImage(null);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div onMouseMove={handleMouseMove} className="relative w-full h-full">
      {children}
      
      <AnimatePresence>
        {hoverImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: "fixed",
              left: position.x + 20,
              top: position.y - 100,
              pointerEvents: "none",
              zIndex: 1000,
            }}
            className="w-64 h-64 rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl"
          >
            <Image
              src={hoverImage}
              alt="Work sample"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              unoptimized
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
