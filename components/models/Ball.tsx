"use client";

import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { TextureLoader, DoubleSide } from "three";

import CanvasLoader from "@/components/loader/LoaderWithProgressPercent";

type BallCanvasProps = {
  icon: string;
};

type GlassBlockProps = {
  imageUrl: string;
};

const GlassBlock = ({ imageUrl }: GlassBlockProps) => {
  const texture = useLoader(TextureLoader, imageUrl);
  const aspectRatio = texture.image.width / texture.image.height;

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <mesh castShadow receiveShadow scale={2.5}>
        <boxGeometry args={[aspectRatio * 2, 2, 0.1]} />
        <meshPhysicalMaterial
          color="rgba(255, 255, 255, 0.1)" // RGBA color with 50% opacity for the block
          roughness={0.1} // Low roughness for smoother reflections
          metalness={0.5} // High metalness for more reflective surface
          envMapIntensity={1} // Adjust intensity of environment map reflections
          map={texture}
          transparent // Enable transparency
          side={DoubleSide} // Render both sides of the block
        />
      </mesh>
    </Float>
  );
};

const GlassesBlockCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }} // Ensure alpha is false for background color to apply
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.2} /> {/* Ambient light for background */}
        <directionalLight position={[0, 10, 0]} intensity={0.5} />
        <OrbitControls enableZoom={false} />
        <GlassBlock imageUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default GlassesBlockCanvas;
