"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface BirdFlockProps {
  count?: number;
}

export default function BirdFlock({ count = 16 }: BirdFlockProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Generate bird initial trajectory positions and speed parameters
  const birdData = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        x: (Math.random() - 0.5) * 16,
        y: (Math.random() - 0.5) * 8 + 2,
        z: -25 - Math.random() * 20, // Start far back in dusk sky
        speed: 0.08 + Math.random() * 0.04,
        wingSpeed: 10 + Math.random() * 6,
        arcDirection: Math.random() > 0.5 ? 1 : -1,
        arcFactor: 0.8 + Math.random() * 0.8,
        phaseOffset: Math.random() * Math.PI * 2,
      });
    }
    return data;
  }, [count]);

  // Simple low-poly bird geometry (V-shaped winged silhouette)
  const birdGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(-0.4, -0.15);
    shape.lineTo(-0.8, 0.2);
    shape.lineTo(0, -0.05);
    shape.lineTo(0.8, 0.2);
    shape.lineTo(0.4, -0.15);
    shape.closePath();

    const extrudeSettings = { depth: 0.02, bevelEnabled: false };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();

    birdData.forEach((bird, i) => {
      // Calculate current Z position
      let zPos = bird.z + ((time * bird.speed * 20 + bird.phaseOffset * 5) % 35);
      
      // Calculate smooth avoidance curve as bird approaches invisible mesh (around z = 0)
      let xPos = bird.x;
      let yPos = bird.y;

      // As z approaches 0 (the invisible mesh at z = 0.5), arc smoothly up/left/right away
      if (zPos > -8) {
        const proximity = Math.min(1, (zPos + 8) / 8);
        xPos += Math.sin(time + bird.phaseOffset) * 2 * bird.arcDirection * proximity;
        yPos += Math.cos(time * 0.5 + bird.phaseOffset) * 1.5 * proximity + proximity * 1.2;
      }

      // Smooth wing flapping simulation via X-scale/rotation oscillation
      const wingFlap = Math.sin(time * bird.wingSpeed + bird.phaseOffset) * 0.25;

      dummy.position.set(xPos, yPos, zPos);

      // Orient bird towards direction of flight with slight wing pitch
      dummy.rotation.set(
        -0.1 + Math.sin(time + bird.phaseOffset) * 0.1,
        bird.arcDirection * 0.15 * Math.min(1, Math.max(0, (zPos + 5) / 5)),
        wingFlap
      );
      dummy.scale.set(0.6, 0.6, 0.6);

      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[birdGeometry, undefined, count]}
    >
      <meshBasicMaterial color="#162432" side={THREE.DoubleSide} transparent opacity={0.85} />
    </instancedMesh>
  );
}
