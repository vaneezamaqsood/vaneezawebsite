"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

function Avatar() {
  const { scene } = useGLTF("/models/model.glb"); // TODO: replace with your GLB
  return <primitive object={scene} position={[0, -1.1, 0]} />;
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
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden border border-white/10" style={{ borderRadius: "1rem" }}>
      <Canvas camera={{ position: [0, 0, 3.2], fov: 42 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1.1} />
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
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
    </div>
  );
}


