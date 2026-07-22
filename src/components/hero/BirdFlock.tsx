"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface BirdFlockProps {
  count?: number;
}

export default function BirdFlock({ count = 180 }: BirdFlockProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Pre-allocated typed array for high-performance 60 FPS flight (180 pigeons max)
  const { flockData, colorArray } = useMemo(() => {
    const data = new Float32Array(count * 8);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const idx = i * 8;
      data[idx + 0] = (Math.random() - 0.5) * 36; // Horizontal spread
      data[idx + 1] = (Math.random() - 0.5) * 16 + 2; // Vertical height spread
      data[idx + 2] = -45 + Math.random() * 50; // Depth range
      data[idx + 3] = 0.06 + Math.random() * 0.05; // Speed
      data[idx + 4] = 10 + Math.random() * 6; // Wing flap frequency
      data[idx + 5] = Math.random() * Math.PI * 2; // Phase
      data[idx + 6] = 0.35 + Math.random() * 0.3; // Scale
      data[idx + 7] = Math.random() > 0.5 ? 1 : -1; // Arc direction

      // 70% Pure White (#FFFFFF), 30% Red (#FF3B30)
      const isRed = Math.random() < 0.3;
      const cIdx = i * 3;
      if (isRed) {
        colors[cIdx + 0] = 0.98;
        colors[cIdx + 1] = 0.22;
        colors[cIdx + 2] = 0.22;
      } else {
        colors[cIdx + 0] = 1.0;
        colors[cIdx + 1] = 1.0;
        colors[cIdx + 2] = 1.0;
      }
    }
    return { flockData: data, colorArray: colors };
  }, [count]);

  // Ultra-lightweight low-poly pigeon shape
  const pigeonGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.3);
    shape.lineTo(-0.25, 0.05);
    shape.lineTo(-0.9, 0.35);
    shape.lineTo(-0.3, -0.15);
    shape.lineTo(0, -0.4);
    shape.lineTo(0.3, -0.15);
    shape.lineTo(0.9, 0.35);
    shape.lineTo(0.25, 0.05);
    shape.closePath();

    const extrudeSettings = { depth: 0.02, bevelEnabled: false };
    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geom.setAttribute("color", new THREE.InstancedBufferAttribute(colorArray, 3));
    return geom;
  }, [colorArray]);

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

      // Smooth loop flight
      const currentZ = ((originZ + time * speed * 20 + phase * 6) % 50) - 45;

      let currentX = originX;
      let currentY = originY;

      if (currentZ > -10) {
        const proximity = Math.min(1, (currentZ + 10) / 10);
        currentX += Math.sin(time * 0.8 + phase) * 2 * arcDir * proximity;
        currentY += Math.cos(time * 0.5 + phase) * 1.5 * proximity + proximity * 1.2;
      }

      const wingFlap = Math.sin(time * wingSpeed + phase) * 0.3;

      dummy.position.set(currentX, currentY, currentZ);
      dummy.rotation.set(
        -0.1 + Math.sin(time + phase) * 0.05,
        arcDir * 0.15 * Math.min(1, Math.max(0, (currentZ + 6) / 6)),
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
      frustumCulled={true}
    >
      <meshBasicMaterial vertexColors side={THREE.DoubleSide} transparent opacity={0.85} />
    </instancedMesh>
  );
}
