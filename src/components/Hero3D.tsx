"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Simple colorful character similar to the static design
function SimpleAvatar() {
  return (
    <group rotation={[0, 0, 0]}>
      {/* Head */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="#6366f1" shininess={100} />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 1, 2, 32]} />
        <meshPhongMaterial color="#8b5cf6" shininess={100} />
      </mesh>
      
      {/* Left Arm */}
      <mesh position={[-1.2, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.2, 0.2, 1.5, 16]} />
        <meshPhongMaterial color="#ec4899" shininess={100} />
      </mesh>
      
      {/* Right Arm */}
      <mesh position={[1.2, 0.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <cylinderGeometry args={[0.2, 0.2, 1.5, 16]} />
        <meshPhongMaterial color="#ec4899" shininess={100} />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  const [hasModel, setHasModel] = useState<boolean | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch("/models/model.glb", { method: "HEAD" })
      .then((r) => {
        if (!isMounted) return;
        setHasModel(r.ok);
      })
      .catch(() => {
        if (!isMounted) return;
        setHasModel(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
      <Canvas camera={{ position: [0, 2, 8], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, 5, 5]} intensity={1} color={0x6366f1} />
        {hasModel ? (
          <Suspense fallback={null}>
            {/* We'll keep the original model loading logic if you have a model */}
            <SimpleAvatar />
            <Environment preset="city" />
          </Suspense>
        ) : (
          <>
            <SimpleAvatar />
            <Environment preset="city" />
          </>
        )}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.6}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      
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


