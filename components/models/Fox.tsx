/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */
"use client";

import React, { useRef, useEffect } from "react";

import { Group, SkinnedMesh, Material } from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Globals } from "@react-spring/shared";
import { GroupProps } from "@react-three/fiber";
import { ActionModelType } from "@/app/types";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

Globals.assign({
  frameLoop: "demand",
});

interface FoxModelProps extends GroupProps {
  currentAnimation: string;
}

// Extend GLTF to include the specific nodes and materials structure
interface ExtendedGLTF extends GLTF {
  nodes: {
    GLTF_created_0_rootJoint: Group;
    Object_7: SkinnedMesh;
    Object_8: SkinnedMesh;
    Object_9: SkinnedMesh;
    Object_10: SkinnedMesh;
    Object_11: SkinnedMesh;
  };
  materials: {
    PaletteMaterial001: Material;
  };
}
// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
export function Fox({ currentAnimation, ...props }: FoxModelProps) {
  const group = useRef<Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "https://res.cloudinary.com/dgzdswdgg/image/upload/v1750576259/fox_i9zrbb.glb",
  ) as unknown as ExtendedGLTF;
  const { actions }: { actions: ActionModelType } = useAnimations(
    animations,
    group,
  );

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    // if (!actions.length) return;
    Object.values(actions).forEach((action) => action?.stop());
    if (currentAnimation === "all") {
      Object.values(actions).forEach((action) => action?.play());
    }
    if (actions[currentAnimation]) {
      actions[currentAnimation]?.play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("https://res.cloudinary.com/dgzdswdgg/image/upload/v1750576259/fox_i9zrbb.glb");
