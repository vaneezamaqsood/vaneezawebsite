"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/testimonials";
import { useState, useEffect } from "react";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl md:text-2xl font-medium text-fg mb-6"
              >
                &ldquo;{testimonial.quote}&rdquo;
              </motion.blockquote>
              <div className="text-muted">
                <p className="font-semibold">{testimonial.author}</p>
                {testimonial.role && testimonial.company && (
                  <p className="text-sm">{testimonial.role}, {testimonial.company}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-accent" : "bg-muted/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
