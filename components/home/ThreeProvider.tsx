'use client'

import React from 'react'
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bird, Plane } from "@/components/models";
import CanvasLoader from "@/components/loader/LoaderWithProgressPercent";
import SeaAndDroneRender from "./SeaAndDroneRender";
type Props = {}

const ThreeProvider = (props: Props) => {
  return (
    <Canvas
        className={`w-full h-screen bg-transparent cursor-grab`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
          />
          <hemisphereLight groundColor="#000000" intensity={1} />
          <Suspense fallback={<CanvasLoader />}>
            <Bird />
          </Suspense>
          <Suspense fallback={<CanvasLoader />}>
            <Plane />
          </Suspense>
          <SeaAndDroneRender />
        </>
      </Canvas>
  )
}

export default ThreeProvider