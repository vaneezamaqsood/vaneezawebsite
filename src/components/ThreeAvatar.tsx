"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ColorfulCharacter() {
  const group = useRef<THREE.Group>(null);
  
  // Head
  const headGeometry = new THREE.SphereGeometry(1, 32, 32);
  const headMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x6366f1,
    shininess: 100
  });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.y = 2;

  // Body
  const bodyGeometry = new THREE.CylinderGeometry(0.8, 1, 2, 32);
  const bodyMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x8b5cf6,
    shininess: 100
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.y = 0;

  // Arms
  const armGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1.5, 16);
  const armMaterial = new THREE.MeshPhongMaterial({ 
    color: 0xec4899,
    shininess: 100
  });

  const leftArm = new THREE.Mesh(armGeometry, armMaterial);
  leftArm.position.set(-1.2, 0.5, 0);
  leftArm.rotation.z = Math.PI / 4;

  const rightArm = new THREE.Mesh(armGeometry, armMaterial);
  rightArm.position.set(1.2, 0.5, 0);
  rightArm.rotation.z = -Math.PI / 4;

  return (
    <group ref={group} rotation={[0, 0, 0]}>
      <primitive object={head} />
      <primitive object={body} />
      <primitive object={leftArm} />
      <primitive object={rightArm} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.6}
      />
    </group>
  );
}

export default function ThreeAvatar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full max-w-[500px] h-[500px] rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 flex items-center justify-center">
        <div className="text-muted">Loading 3D Avatar...</div>
      </div>
    );
  }

  return (
    <div className="hero-visual w-full max-w-[500px] h-[500px]">
      <Canvas 
        camera={{ position: [0, 2, 8], fov: 75 }} 
        className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, 5, 5]} intensity={1} color={0x6366f1} />
        <ColorfulCharacter />
      </Canvas>
    </div>
  );
}
