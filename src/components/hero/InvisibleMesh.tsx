"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface InvisibleMeshProps {
  scrollProgress?: number;
}

export default function InvisibleMesh({ scrollProgress = 0 }: InvisibleMeshProps) {
  const lineRef = useRef<THREE.LineSegments>(null);
  const materialRef = useRef<THREE.LineBasicMaterial>(null);

  // Generate sparse steel wire lattice geometry (vertical invisible grills + subtle diamond mesh)
  const lineGeometry = useMemo(() => {
    const points: number[] = [];
    const width = 14;
    const height = 9;
    
    // Vertical Invisible Grill Wires (Sparse 50mm spacing equivalent)
    const vertCols = 16;
    for (let i = 0; i <= vertCols; i++) {
      const x = -width / 2 + (width / vertCols) * i;
      points.push(x, -height / 2, 0);
      points.push(x, height / 2, 0);
    }

    // Horizontal tensioning cables
    const horizRows = 6;
    for (let j = 0; j <= horizRows; j++) {
      const y = -height / 2 + (height / horizRows) * j;
      points.push(-width / 2, y, 0);
      points.push(width / 2, y, 0);
    }

    // Sparse diamond netting accents
    const netCount = 8;
    for (let k = 0; k < netCount; k++) {
      const x1 = -width / 2 + (width / netCount) * k;
      const x2 = x1 + width / netCount;
      points.push(x1, -height / 2, 0);
      points.push(x2, height / 2, 0);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(points, 3)
    );
    return geometry;
  }, []);

  useFrame(({ clock }) => {
    if (!materialRef.current) return;
    const time = clock.getElapsedTime();

    // Wave pattern of light catching the wires
    // Increases catch-light intensity on scroll
    const wave = Math.sin(time * 1.5 + scrollProgress * Math.PI * 2) * 0.5 + 0.5;
    const scrollGlow = scrollProgress * 0.6;
    
    // Base transparency: nearly invisible (0.12), catches light up to 0.65
    materialRef.current.opacity = 0.12 + wave * 0.25 + scrollGlow;

    // Shift color between chrome steel (#C7CDD3) and cyan (#2E86FF) as light catches
    const lerpFactor = (wave + scrollProgress) % 1;
    materialRef.current.color.setHSL(0.6, 0.8, 0.5 + lerpFactor * 0.3);
  });

  return (
    <group position={[0, 0, 0.5]}>
      {/* Invisible Wire Grid Line Segments */}
      <lineSegments ref={lineRef} geometry={lineGeometry}>
        <lineBasicMaterial
          ref={materialRef}
          color="#C7CDD3"
          transparent
          opacity={0.15}
          linewidth={1}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Subtle Light reflection nodes at wire intersections */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[14, 9]} />
        <meshBasicMaterial
          color="#2E86FF"
          transparent
          opacity={0.03 + scrollProgress * 0.05}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
