"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BirdFlock from "./BirdFlock";
import InvisibleMesh from "./InvisibleMesh";

function CameraRig({ setScrollProgress }: { setScrollProgress: (p: number) => void }) {
  const cameraGroupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const st = ScrollTrigger.create({
      trigger: "#hero-section",
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
        if (cameraGroupRef.current) {
          // Camera moves closer to mesh and shifts slightly on scroll
          cameraGroupRef.current.position.z = 10 - self.progress * 4;
          cameraGroupRef.current.position.y = -self.progress * 1.5;
        }
      },
    });

    return () => st.kill();
  }, [setScrollProgress]);

  useFrame(({ clock }) => {
    if (!cameraGroupRef.current) return;
    const time = clock.getElapsedTime();
    // Gentle camera drift
    cameraGroupRef.current.rotation.y = Math.sin(time * 0.2) * 0.02;
    cameraGroupRef.current.rotation.x = Math.cos(time * 0.25) * 0.015;
  });

  return <group ref={cameraGroupRef} position={[0, 0, 10]} />;
}

export default function HeroCanvas() {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        {/* Dusk Sky Gradient Fog */}
        <color attach="background" args={["#0A1218"]} />
        <fog attach="fog" args={["#0A1218", 6, 28]} />

        {/* Ambient Dusk Light */}
        <ambientLight intensity={0.4} color="#162432" />

        {/* Sweeping Light Source that catches wire mesh */}
        <directionalLight
          position={[10 * Math.cos(scrollProgress * 2), 8, 12]}
          intensity={1.2 + scrollProgress * 1.5}
          color="#2E86FF"
        />
        <pointLight position={[-8, -4, 5]} intensity={0.8} color="#C7CDD3" />

        <CameraRig setScrollProgress={setScrollProgress} />

        {/* Low-poly Flocking Pigeons (120 Pigeons in 3D Sky) */}
        <BirdFlock count={120} />

        {/* Sparse Invisible Wire Mesh Plane */}
        <InvisibleMesh scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
