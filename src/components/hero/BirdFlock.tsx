"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface BirdFlockProps {
  count?: number;
}

export default function BirdFlock({ count = 120 }: BirdFlockProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Generate 100+ pigeons spread across the sky & header area
  const birdData = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        x: (Math.random() - 0.5) * 28, // Wide horizontal spread
        y: Math.random() * 10 - 1,     // Height spread up to header top zone
        z: -30 - Math.random() * 25,   // Depth layering
        speed: 0.06 + Math.random() * 0.05,
        wingSpeed: 12 + Math.random() * 8,
        arcDirection: Math.random() > 0.5 ? 1 : -1,
        phaseOffset: Math.random() * Math.PI * 2,
        scale: 0.35 + Math.random() * 0.35,
      });
    }
    return data;
  }, [count]);

  // Pigeon silhouette geometry (aerodynamic body + winged V-shape)
  const pigeonGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    // Body & Wings
    shape.moveTo(0, 0.4);
    shape.lineTo(-0.3, 0.1);
    shape.lineTo(-1.2, 0.5); // Left wing tip
    shape.lineTo(-0.4, -0.2);
    shape.lineTo(0, -0.5);   // Tail
    shape.lineTo(0.4, -0.2);
    shape.lineTo(1.2, 0.5);  // Right wing tip
    shape.lineTo(0.3, 0.1);
    shape.closePath();

    const extrudeSettings = { depth: 0.03, bevelEnabled: false };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();

    birdData.forEach((bird, i) => {
      // Z position travel loop
      let zPos = bird.z + ((time * bird.speed * 20 + bird.phaseOffset * 6) % 40);
      
      let xPos = bird.x;
      let yPos = bird.y;

      // Smooth flocking curve as pigeons approach invisible mesh boundary at z = 0
      if (zPos > -10) {
        const proximity = Math.min(1, (zPos + 10) / 10);
        xPos += Math.sin(time * 0.8 + bird.phaseOffset) * 3 * bird.arcDirection * proximity;
        yPos += Math.cos(time * 0.6 + bird.phaseOffset) * 2 * proximity + proximity * 1.5;
      }

      // Dynamic wing flapping movement
      const wingPitch = Math.sin(time * bird.wingSpeed + bird.phaseOffset) * 0.3;

      dummy.position.set(xPos, yPos, zPos);
      dummy.rotation.set(
        -0.15 + Math.sin(time + bird.phaseOffset) * 0.08,
        bird.arcDirection * 0.2 * Math.min(1, Math.max(0, (zPos + 6) / 6)),
        wingPitch
      );
      dummy.scale.set(bird.scale, bird.scale, bird.scale);

      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[pigeonGeometry, undefined, count]}
    >
      <meshBasicMaterial
        color="#1E2E3C"
        side={THREE.DoubleSide}
        transparent
        opacity={0.8}
      />
    </instancedMesh>
  );
}
