"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

function Avatar() {
  const group = useRef<any>();
  const { scene } = useGLTF("/models/model.glb");
  
  return (
    <primitive 
      ref={group} 
      object={scene} 
      position={[0, -1.1, 0]} 
      rotation={[0, 0.4, 0]}
    />
  );
}
useGLTF.preload("/models/model.glb");

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
      <Canvas camera={{ position: [0, 0, 3.5], fov: 40 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1.2} />
        {hasModel ? (
          <Suspense fallback={null}>
            <Avatar />
            <Environment preset="city" />
          </Suspense>
        ) : (
          <>
            <mesh>
              <icosahedronGeometry args={[1, 1]} />
              <meshStandardMaterial color="#8ab4ff" roughness={0.35} metalness={0.25} />
            </mesh>
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


