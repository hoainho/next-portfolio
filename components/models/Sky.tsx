import React, { useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useGlobalContext } from "@/context/GlobalContext";
import { ActionModelType } from "@/app/types";

type Props = {};

function Sky({}: Props) {
  const skyRef = useRef<Mesh>(null);
  const {
    state: { isRotating },
  } = useGlobalContext();
  const { scene } = useGLTF("/3d/sky.glb");
  useFrame((_, delta) => {
    if (skyRef.current) {
      if (isRotating) {
        skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
      }
    }
  });
  return (
    <mesh ref={skyRef} scale={1}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Sky;
