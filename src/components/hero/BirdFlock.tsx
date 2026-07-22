"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface BirdFlockProps {
  count?: number;
}

export default function BirdFlock({ count = 10000 }: BirdFlockProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Pre-allocated typed arrays for 10,000 flying pigeons with white/red color attributes
  const { flockData, colorArray } = useMemo(() => {
    const data = new Float32Array(count * 8); // x, y, z, speed, wingSpeed, phase, scale, arcDir
    const colors = new Float32Array(count * 3); // r, g, b per pigeon

    for (let i = 0; i < count; i++) {
      const idx = i * 8;
      data[idx + 0] = (Math.random() - 0.5) * 48; // Wide horizontal spread
      data[idx + 1] = (Math.random() - 0.5) * 22 + 2; // Vertical height spread
      data[idx + 2] = -65 + Math.random() * 70; // Layered depth from -65 to +5
      data[idx + 3] = 0.08 + Math.random() * 0.09; // Flight speed
      data[idx + 4] = 12 + Math.random() * 10; // Wing flap frequency
      data[idx + 5] = Math.random() * Math.PI * 2; // Phase offset
      data[idx + 6] = 0.16 + Math.random() * 0.26; // Scale
      data[idx + 7] = Math.random() > 0.5 ? 1 : -1; // Arc direction

      // Color assignment: 70% crisp pure White (#FFFFFF), 30% vibrant Red (#FF3B30 / #EF4444)
      const isRed = Math.random() < 0.3;
      const cIdx = i * 3;
      if (isRed) {
        colors[cIdx + 0] = 0.98; // Red
        colors[cIdx + 1] = 0.22; // Green
        colors[cIdx + 2] = 0.22; // Blue
      } else {
        colors[cIdx + 0] = 1.0; // Pure White
        colors[cIdx + 1] = 1.0;
        colors[cIdx + 2] = 1.0;
      }
    }
    return { flockData: data, colorArray: colors };
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
    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);

    // Attach instanced color attribute
    geom.setAttribute(
      "color",
      new THREE.InstancedBufferAttribute(colorArray, 3)
    );
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

      // Continuous flight loop along Z depth
      const zRange = 70;
      let currentZ = ((originZ + time * speed * 25 + phase * 10) % zRange) - 65;

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
        vertexColors
        side={THREE.DoubleSide}
        transparent
        opacity={0.9}
      />
    </instancedMesh>
  );
}
