"use client";

import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Preload } from "@react-three/drei";
import { TextureLoader, FrontSide, Group } from "three";

import CanvasLoader from "@/components/loader/LoaderWithProgressPercent";

type BallCanvasProps = {
  icon: string;
  rotateTexture?: number; // Optional rotation for texture in radians
  enhancedLighting?: boolean; // Option to use enhanced lighting for products
  customRotationSpeed?: number; // Optional custom rotation speed
  customMaxAngle?: number; // Optional custom maximum rotation angle
};

type GlassBlockProps = {
  imageUrl: string;
  rotateTexture?: number; // Optional rotation for texture in radians
  enhancedLighting?: boolean; // Option to use enhanced lighting for products
  customRotationSpeed?: number; // Optional custom rotation speed
  customMaxAngle?: number; // Optional custom maximum rotation angle
};

const GlassBlock = ({ 
  imageUrl, 
  rotateTexture = 0, 
  enhancedLighting = false,
  customRotationSpeed,
  customMaxAngle
}: GlassBlockProps) => {
  const texture = useLoader(TextureLoader, imageUrl);
  const aspectRatio = texture.image.width / texture.image.height;
  
  // Apply rotation to texture if specified
  if (rotateTexture) {
    texture.center.set(0.5, 0.5); // Set rotation center to middle of texture
    texture.rotation = rotateTexture;
  }
  
  // Reference for gentle limited back-and-forth rotation with randomization
  const groupRef = useRef<Group>(null);
  const rotationDirection = useRef<number>(1); // 1 for clockwise, -1 for counter-clockwise
  
  // Use custom values or generate random ones if not provided
  const rotationSpeed = useRef<number>(customRotationSpeed || (0.0007 + Math.random() * 0.000013)); // Even slower rotation
  const maxAngle = useRef<number>(customMaxAngle || (Math.PI / 12 + Math.random() * Math.PI / 6)); // Random between 15 and 45 degrees
  
  // Random initial rotation to ensure each product starts at a different position
  const initialRotation = useRef<number>(Math.random() * (maxAngle.current * 2) - maxAngle.current);
  
  // References for point light random movement
  const pointLightRef = useRef<any>(null);
  const pointLightPosition = useRef<{
    x: number;
    y: number;
    z: number;
    targetX: number;
    targetY: number;
    targetZ: number;
    speed: number;
  }>({ 
    x: 0, 
    y: 0, 
    z: 5, 
    targetX: (Math.random() * 4) - 2, // Random target between -2 and 2
    targetY: (Math.random() * 4) - 2, // Random target between -2 and 2
    targetZ: 4 + (Math.random() * 2), // Random target between 4 and 6
    speed: 0.005 + (Math.random()) // Very slow random speed
  });
  
  // Set initial rotation on first render
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = initialRotation.current;
    }
  }, []);
  
  // Animation frame update
  useFrame(() => {
    // Update group rotation
    if (groupRef.current) {
      // Change direction when reaching the max angle in either direction
      if (groupRef.current.rotation.y >= maxAngle.current) {
        rotationDirection.current = -1;
      } else if (groupRef.current.rotation.y <= -maxAngle.current) {
        rotationDirection.current = 1;
      }
      
      // Apply rotation based on current direction and custom speed
      groupRef.current.rotation.y += rotationSpeed.current * rotationDirection.current;
    }
    
    // Update point light position with smooth movement
    if (pointLightRef.current) {
      const p = pointLightPosition.current;
      
      // Move current position slightly toward target position
      p.x += (p.targetX - p.x) * p.speed;
      p.y += (p.targetY - p.y) * p.speed;
      p.z += (p.targetZ - p.z) * p.speed;
      
      // Update point light position
      pointLightRef.current.position.set(p.x, p.y, p.z);
      
      // Generate new random target when close to current target
      const distanceToTarget = Math.sqrt(
        Math.pow(p.x - p.targetX, 2) + 
        Math.pow(p.y - p.targetY, 2) + 
        Math.pow(p.z - p.targetZ, 2)
      );
      
      if (distanceToTarget < 0.1) {
        p.targetX = (Math.random() * 4) - 2; // Random between -2 and 2
        p.targetY = (Math.random() * 4) - 2; // Random between -2 and 2
        p.targetZ = 4 + (Math.random() * 2); // Random between 4 and 6
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      {/* Enhanced lighting setup for products */}
      {enhancedLighting && (
        <>
          <ambientLight intensity={1.0} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-5, 5, 5]} intensity={1.2} color="#a0d8ef" />
          
          {/* Enhanced center spotlight with random movement */}
          <pointLight 
            ref={pointLightRef}
            position={[0, 0, 5]} 
            intensity={10} 
            color="#ffffff" 
            distance={50} 
            decay={0.8} 
          />
          
          {/* Main spotlight with tighter focus */}
          <spotLight 
            position={[0, 5, 5]} 
            angle={0.25} 
            penumbra={0.8} 
            intensity={2.0} 
            castShadow 
            color="#ffffff"
            distance={10}
            decay={1}
          />
          
          {/* Additional spotlight directly from front for better center illumination - larger and softer */}
          <spotLight 
            position={[0, 0, 5]} 
            angle={0.9} /* Even larger angle for wider coverage */
            penumbra={0.9} /* Increased penumbra for much softer edges */
            intensity={3.0} /* Slightly reduced intensity for softer effect */
            castShadow 
            color="#ffffff"
            distance={15} /* Increased distance for larger coverage */
            decay={2.0} /* Increased decay for more gradual falloff */
          />
          
          {/* Top light for additional brightness */}
          <spotLight 
            position={[0, 5, 0]} 
            angle={0.5} 
            penumbra={0.5} 
            intensity={2.0} 
            castShadow 
            color="#ffffff"
            distance={10}
            decay={1}
          />
        </>
      )}
      
      <group ref={groupRef} scale={2.5}>
        {/* Front face */}
        <mesh position={[0, 0, 0.051]} castShadow receiveShadow>
          <planeGeometry args={[aspectRatio * 2, 2]} />
          <meshPhysicalMaterial
            color="rgba(255, 255, 255, 0.1)"
            roughness={0.1}
            metalness={0.5}
            envMapIntensity={enhancedLighting ? 3 : 2}
            map={texture}
            transparent
            side={FrontSide}
            clearcoat={enhancedLighting ? 1 : 0}
            clearcoatRoughness={0.1}
          />
        </mesh>
        
        {/* Back face - using the same texture but flipped */}
        <mesh position={[0, 0, -0.051]} rotation={[0, Math.PI, 0]} castShadow receiveShadow>
          <planeGeometry args={[aspectRatio * 2, 2]} />
          <meshPhysicalMaterial
            color="rgba(255, 255, 255, 0.1)"
            roughness={0.1}
            metalness={0.5}
            envMapIntensity={enhancedLighting ? 3 : 2}
            map={texture} 
            transparent
            side={FrontSide}
            clearcoat={enhancedLighting ? 1 : 0}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
};

const GlassesBlockCanvas = ({ icon, rotateTexture, enhancedLighting = false, customRotationSpeed, customMaxAngle }: BallCanvasProps) => {
  // Generate random values for each instance if not provided
  const randomRotationSpeed = useRef<number | undefined>(customRotationSpeed || undefined);
  const randomMaxAngle = useRef<number | undefined>(customMaxAngle || undefined);
  
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        alpha: true // Enable transparency for the canvas background
      }}
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Base lighting only used when enhanced lighting is off */}
        {!enhancedLighting && (
          <>
            <ambientLight intensity={0.8} /> 
            <directionalLight position={[0, 10, 0]} intensity={1.2} />
            <pointLight position={[0, 0, 20]} intensity={5.0} color="#ffffff" distance={50} decay={0.8} />
            <spotLight 
              position={[0, 5, 0]} 
              angle={0.5} 
              penumbra={0.5} 
              intensity={1.8} 
              color="#ffffff"
              distance={10}
              decay={1}
            />
          </>
        )}
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
