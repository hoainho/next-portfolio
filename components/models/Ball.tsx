"use client";

import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Preload } from "@react-three/drei";
import { TextureLoader, FrontSide, Group, SpotLight as ThreeSpotLight, Object3D } from "three";

import CanvasLoader from "@/components/loader/LoaderWithProgressPercent";

type BallCanvasProps = {
  icon: string;
  rotateTexture?: number;
  enhancedLighting?: boolean;
  customRotationSpeed?: number;
  customMaxAngle?: number;
};

type GlassBlockProps = {
  imageUrl: string;
  rotateTexture?: number;
  enhancedLighting?: boolean;
  customRotationSpeed?: number;
  customMaxAngle?: number;
};

const WAYPOINTS: [number, number][] = [
  [-2.8,  2.2],
  [ 2.8,  2.2],
  [ 2.8, -2.2],
  [-2.8, -2.2],
];

const GlassBlock = ({
  imageUrl,
  rotateTexture = 0,
  customRotationSpeed,
  customMaxAngle,
}: GlassBlockProps) => {
  const texture = useLoader(TextureLoader, imageUrl);
  const aspectRatio = texture.image.width / texture.image.height;

  if (rotateTexture) {
    texture.center.set(0.5, 0.5);
    texture.rotation = rotateTexture;
  }

  const groupRef = useRef<Group>(null);
  const rotationDirection = useRef(1);
  const rotationSpeed = useRef(customRotationSpeed || 0.0007 + Math.random() * 0.000013);
  const maxAngle = useRef(customMaxAngle || Math.PI / 12 + Math.random() * (Math.PI / 6));
  const initialRotation = useRef(Math.random() * maxAngle.current * 2 - maxAngle.current);

  const spotRef = useRef<ThreeSpotLight>(null);
  const spotTarget = useRef(new Object3D());

  const sweep = useRef({
    seg: Math.floor(Math.random() * WAYPOINTS.length),
    progress: Math.random() * 0.5,
    cx: 0,
    cy: 0,
  });

  useEffect(() => {
    if (groupRef.current) groupRef.current.rotation.y = initialRotation.current;
    if (spotRef.current) spotRef.current.target = spotTarget.current;
    spotTarget.current.position.set(0, 0, 0);
    const [ax, ay] = WAYPOINTS[sweep.current.seg];
    sweep.current.cx = ax;
    sweep.current.cy = ay;
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      if (groupRef.current.rotation.y >= maxAngle.current) rotationDirection.current = -1;
      else if (groupRef.current.rotation.y <= -maxAngle.current) rotationDirection.current = 1;
      groupRef.current.rotation.y += rotationSpeed.current * rotationDirection.current;
    }

    if (spotRef.current) {
      const s = sweep.current;
      s.progress += 0.003;
      if (s.progress >= 1) {
        s.progress = 0;
        s.seg = (s.seg + 1) % WAYPOINTS.length;
      }

      const [ax, ay] = WAYPOINTS[s.seg];
      const [bx, by] = WAYPOINTS[(s.seg + 1) % WAYPOINTS.length];
      const p = s.progress;
      const ease = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;

      s.cx = ax + (bx - ax) * ease;
      s.cy = ay + (by - ay) * ease;

      spotRef.current.position.set(s.cx * 0.5, s.cy * 0.5, 1.8);
      spotTarget.current.position.set(s.cx * 0.48, s.cy * 0.48, 0);
      spotTarget.current.updateMatrixWorld();
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.6}>
      <ambientLight intensity={0.75} color="#ffffff" />

      <primitive object={spotTarget.current} />
      <spotLight
        ref={spotRef}
        position={[0, 1.1, 1.8]}
        angle={0.45}
        penumbra={0.99}
        intensity={22}
        color="#ffffff"
        distance={12}
        decay={2.4}
        castShadow={false}
      />

      <spotLight
        position={[-3, 3, -2]}
        angle={0.6}
        penumbra={1}
        intensity={4}
        color="#3366ff"
        distance={12}
        decay={2}
        castShadow={false}
      />

      <spotLight
        position={[3, -2, -2]}
        angle={0.5}
        penumbra={1}
        intensity={3}
        color="#ff3388"
        distance={10}
        decay={2}
        castShadow={false}
      />

      <group ref={groupRef} scale={2.5}>
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[aspectRatio * 2, 2]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.55}
            metalness={0.05}
            transparent
            side={FrontSide}
          />
        </mesh>
        <mesh position={[0, 0, -0.04]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[aspectRatio * 2, 2]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.55}
            metalness={0.05}
            transparent
            side={FrontSide}
          />
        </mesh>
      </group>
    </Float>
  );
};

const GlassesBlockCanvas = ({
  icon,
  rotateTexture,
  enhancedLighting = false,
  customRotationSpeed,
  customMaxAngle,
}: BallCanvasProps) => {
  const randomRotationSpeed = useRef<number | undefined>(customRotationSpeed || undefined);
  const randomMaxAngle = useRef<number | undefined>(customMaxAngle || undefined);

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <GlassBlock
          imageUrl={icon}
          rotateTexture={rotateTexture}
          enhancedLighting={enhancedLighting}
          customRotationSpeed={randomRotationSpeed.current}
          customMaxAngle={randomMaxAngle.current}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default GlassesBlockCanvas;
