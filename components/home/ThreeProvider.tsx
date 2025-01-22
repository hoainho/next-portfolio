"use client";

import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "@/components/loader/LoaderWithProgressPercent";
import { Desk } from "@/components/models/Desk";
type Props = {};

const ThreeProvider = (props: Props) => {
  return (
    <Canvas
      className={`w-full h-screen bg-transparent cursor-grab`}
      camera={{ near: 1, far: 100000 }}
      shadows
    >
      <directionalLight
        position={[-0.1, 0.08, 0]}
        intensity={6}
        castShadow
        receiveShadow
      />
      <ambientLight intensity={0} />
      <hemisphereLight groundColor="#00c1e8" intensity={1} />

      {/* Back Desk */}
      <spotLight
        position={[0, -3, 2.5]}
        angle={0.7}
        penumbra={0.9}
        intensity={200}
        color={"#00c1e8"}
      />

      {/* Roof top */}
      <spotLight
        position={[3, 3, 2.5]}
        angle={0.7}
        penumbra={0.9}
        intensity={200}
        color={"#00c1e8"}
      />
      <spotLight
        position={[0, 3, 2.5]}
        angle={0.7}
        penumbra={0.9}
        intensity={200}
        color={"#00c1e8"}
      />
      <spotLight
        position={[-3, 3, 2.5]}
        angle={0.7}
        penumbra={0.9}
        intensity={200}
        color={"#00c1e8"}
      />

      {/* Focus feature */}
      <spotLight
        position={[0.001, 0.0032, -0.005]}
        angle={0.1}
        penumbra={0.1}
        intensity={100}
        color={"#ffffff"}
      />
      <spotLight
        position={[0.001, 0.0036, -0.005]}
        angle={0.22}
        penumbra={0.3}
        intensity={100}
        color={"#f0b442"}
      />
      {/* Green */}
      <spotLight
        position={[-0.0013, 0.0029, -0.0044]}
        angle={0.1}
        penumbra={0.3}
        intensity={100}
        color={"#50a327"}
      />
      <Suspense fallback={<CanvasLoader />}>
        <Desk />
      </Suspense>
    </Canvas>
  );
};

export default ThreeProvider;
