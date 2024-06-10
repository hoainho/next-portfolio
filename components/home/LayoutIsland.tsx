'use client'

import React from "react";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import HomeInfo from "@/components/home/HomeInfo";
import Loader from "@/components/loader/Loader";
import { soundoff, soundon } from "@/public/icons";
import { Bird, Plane, IslandSea, Drone } from "@/components/models";
import Image from "next/image";
type Props = {};

const LayoutIsland = (props: Props) => {
  const [currentStage, setCurrentStage] = useState<number | null>(0);
  const [isRotating, setIsRotating] = useState(false);

  const [droneScale, setDroneScale] = useState(1);
  const [dronePosition, setDronePosition] = useState<[number, number, number]>([0, -1.5, 0]);
  const [seaScale, setSeaScale] = useState(-0.09);
  const [seaPosition, setSeaPosition] = useState<[number, number, number]>([0, -10, -50]);

  useEffect(() => {
    const adjustDroneForScreenSize = (): [number, [number, number, number]] => {
      if (window.innerWidth < 768) {
        return [0.9, [0, -1.5, 0]];
      } else {
        return [1, [0, -1.5, 0]];
      }
    };

    const adjustIslandForScreenSize = (scale: number | null, position: number | null): [number, [number, number, number]] => {
      let screenScale, screenPosition: [number, number, number];

      if (window.innerWidth < 768) {
        screenScale = scale ?? -0.13;
        screenPosition = [0, -4.25, -55];
      } else {
        screenScale = scale ?? -0.09;
        screenPosition = [0, -10, -50];
      }

      return [screenScale, screenPosition];
    };

    const [droneScale, dronePosition] = adjustDroneForScreenSize();
    const [seaScale, seaPosition] = adjustIslandForScreenSize(null, null);

    setDroneScale(droneScale);
    setDronePosition(dronePosition);
    setSeaScale(seaScale);
    setSeaPosition(seaPosition);
  }, []);
  return (
    <div>
      <div className={`absolute left-0 right-0 z-10 flex items-center justify-center top-28`}>
        {currentStage !== null && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={1} />
          <hemisphereLight groundColor="#000000" intensity={1} />
          <Bird setCurrentStage={setCurrentStage} />
          <Plane />
          <IslandSea
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={seaPosition}
            rotation={[0.5, Math.PI, Math.PI]}
            scale={seaScale}
          />
          <Drone
            isRotating={isRotating}
            scale={droneScale}
            position={dronePosition}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default LayoutIsland;
