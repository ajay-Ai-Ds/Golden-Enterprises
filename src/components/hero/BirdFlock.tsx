"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface BirdFlockProps {
  count?: number;
}

export default function BirdFlock({ count = 10000 }: BirdFlockProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Pre-allocated typed arrays for 10,000 flying pigeons to maintain 60 FPS
  const flockData = useMemo(() => {
    const data = new Float32Array(count * 8); // x, y, z, speed, wingSpeed, phase, scale, arcDir
    for (let i = 0; i < count; i++) {
      const idx = i * 8;
      data[idx + 0] = (Math.random() - 0.5) * 45; // Wide horizontal spread (-22.5 to 22.5)
      data[idx + 1] = (Math.random() - 0.5) * 20 + 2; // Vertical height spread
      data[idx + 2] = -60 + Math.random() * 65; // Layered depth from -60 to +5
      data[idx + 3] = 0.08 + Math.random() * 0.08; // Flight speed
      data[idx + 4] = 12 + Math.random() * 10; // Wing flap frequency
      data[idx + 5] = Math.random() * Math.PI * 2; // Phase offset
      data[idx + 6] = 0.15 + Math.random() * 0.25; // Scale
      data[idx + 7] = Math.random() > 0.5 ? 1 : -1; // Arc direction
    }
    return data;
  }, [count]);

  // Lightweight 6-vertex low-poly pigeon geometry for GPU instancing
  const pigeonGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.3);
    shape.lineTo(-0.25, 0.05);
    shape.lineTo(-0.9, 0.35); // Left wing tip
    shape.lineTo(-0.3, -0.15);
    shape.lineTo(0, -0.4); // Tail
    shape.lineTo(0.3, -0.15);
    shape.lineTo(0.9, 0.35); // Right wing tip
    shape.lineTo(0.25, 0.05);
    shape.closePath();

    const extrudeSettings = { depth: 0.02, bevelEnabled: false };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const idx = i * 8;
      const originX = flockData[idx + 0];
      const originY = flockData[idx + 1];
      const originZ = flockData[idx + 2];
      const speed = flockData[idx + 3];
      const wingSpeed = flockData[idx + 4];
      const phase = flockData[idx + 5];
      const scale = flockData[idx + 6];
      const arcDir = flockData[idx + 7];

      // Infinite continuous flight loop along Z depth
      const zRange = 65;
      let currentZ = ((originZ + time * speed * 25 + phase * 10) % zRange) - 60;

      let currentX = originX;
      let currentY = originY;

      // Smooth flocking curve when pigeons near the invisible wire mesh at Z = 0
      if (currentZ > -12) {
        const proximity = Math.min(1, (currentZ + 12) / 12);
        currentX += Math.sin(time * 0.7 + phase) * 2.5 * arcDir * proximity;
        currentY += Math.cos(time * 0.5 + phase) * 1.8 * proximity + proximity * 1.2;
      }

      // Dynamic wing flapping
      const wingFlap = Math.sin(time * wingSpeed + phase) * 0.35;

      dummy.position.set(currentX, currentY, currentZ);
      dummy.rotation.set(
        -0.12 + Math.sin(time + phase) * 0.06,
        arcDir * 0.15 * Math.min(1, Math.max(0, (currentZ + 8) / 8)),
        wingFlap
      );
      dummy.scale.set(scale, scale, scale);

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[pigeonGeometry, undefined, count]}
      frustumCulled={false}
    >
      <meshBasicMaterial
        color="#1A2836"
        side={THREE.DoubleSide}
        transparent
        opacity={0.75}
      />
    </instancedMesh>
  );
}
