"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  children: React.ReactNode;
}

interface ImageItem {
  id: number;
  src: string;
  x: number;
  y: number;
}

export default function ImageGallery({ images, children }: ImageGalleryProps) {
  const [displayedImages, setDisplayedImages] = useState<ImageItem[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const lastMoveTime = useRef(0);
  const imageIdCounter = useRef(0);
  const throttleDelay = 150; // Show new image every 150ms

  const smoothMouseX = useSpring(mouseX, {
    damping: 25,
    stiffness: 200,
  });

  const smoothMouseY = useSpring(mouseY, {
    damping: 25,
    stiffness: 200,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);

    // Throttle image creation
    if (now - lastMoveTime.current < throttleDelay) {
      return;
    }

    lastMoveTime.current = now;

    // Pick a random image
    const randomImage = images[Math.floor(Math.random() * images.length)];
    
    const newImage: ImageItem = {
      id: imageIdCounter.current++,
      src: randomImage,
      x: e.clientX,
      y: e.clientY,
    };

    setDisplayedImages((prev) => [...prev, newImage]);

    // Remove image after 1.5 seconds
    setTimeout(() => {
      setDisplayedImages((prev) => prev.filter((img) => img.id !== newImage.id));
    }, 1500);
  };

  useEffect(() => {
    return () => {
      setDisplayedImages([]);
    };
  }, []);

  return (
    <div onMouseMove={handleMouseMove} className="relative w-full h-full">
      {children}

      {/* Floating Images */}
      <AnimatePresence>
        {displayedImages.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1], // Custom easing for smooth effect
            }}
            style={{
              position: "fixed",
              left: image.x - 150, // Center the image on cursor
              top: image.y - 150,
              pointerEvents: "none",
              zIndex: 1000,
            }}
            className="w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative w-full h-full border-4 border-white/10 rounded-2xl overflow-hidden">
              <Image
                src={image.src}
                alt="Work sample"
                fill
                className="object-cover"
                unoptimized
                sizes="300px"
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
