import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { DoubleSide, TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_27: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_32: THREE.Mesh;
  };
  materials: {
    Black_Glass: THREE.MeshStandardMaterial;
    Black_Plastic: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    Space_Grey: THREE.MeshStandardMaterial;
    ["Space_Grey.001"]: THREE.MeshStandardMaterial;
    Camera_Light: THREE.MeshStandardMaterial;
    Caps_Lock_Light: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Keys.001"]: THREE.MeshStandardMaterial;
    Keys: THREE.MeshStandardMaterial;
    ["Touch_Bar_Shot_2021-04-02_at_18.13.28"]: THREE.MeshStandardMaterial;
  };
};

export function Laptop() {
  const texture = useLoader(TextureLoader, "/images/profile-screen.png");
  const aspectRatio = texture.image.width / texture.image.height;
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/3d/macbook_pro_13_inch_2020.glb"
  ) as GLTFResult;
  const { mixer } = useAnimations(animations, group);
  useEffect(() => {
    //Override Properties to able Pause action
    const action = mixer?.clipAction(animations[0]);
    action.clampWhenFinished = true;
    action.loop = THREE.LoopOnce;
    action.play();
  }, []);
  return (
    <group ref={group} dispose={null} position={[-1, -1.5, 2]} scale={3}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Bevels_2"
                position={[0, 0.008, -0.104]}
                scale={0.275}
              >
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Black_Glass}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Glass}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials["Material.002"]}
                />
                {/* Screen laptop */}
                <mesh castShadow receiveShadow scale={1} rotation={[0, 0, 0]}>
                  {/* <boxGeometry args={[aspectRatio * 2, 2, 0.1]} /> */}
                  <meshPhysicalMaterial
                    color="rgba(255, 255, 255, 0.9)"
                    roughness={0.1}
                    metalness={0.5}
                    envMapIntensity={2}
                    map={texture}
                    transparent
                    side={DoubleSide}
                  />
                </mesh>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Space_Grey}
                />
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials["Space_Grey.001"]}
                />
                <group
                  name="Empty_1"
                  position={[0, 0.001, 0]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[-0.039, 0.039, 0.039]}
                >
                  <group
                    name="Camera_Light_0"
                    position={[0, 0.077, -0.044]}
                    rotation={[-1.192, 0, 0]}
                    scale={[-25.381, 25.381, 25.381]}
                  >
                    <mesh
                      name="Object_12"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_12.geometry}
                      material={materials.Camera_Light}
                    />
                  </group>
                </group>
              </group>
              <group
                name="Caps_Lock_Light_3"
                position={[0, -0.014, 0]}
                scale={0.275}
              >
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Caps_Lock_Light}
                />
              </group>
              <group
                name="Macbook_Pro_4"
                position={[0, 0.008, -0.104]}
                rotation={[1.949, 0, 0]}
                scale={0.275}
              >
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Main_Body_5" position={[0, -0.014, 0]} scale={0.275}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Space_Grey}
                />
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials["Keys.001"]}
                />
              </group>
              <group name="Touch_Bar_6" position={[0, -0.014, 0]} scale={0.275}>
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.Black_Glass}
                />
                <mesh
                  name="Object_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.Keys}
                />
              </group>
              <group
                name="Touch_Bar_Shot_7"
                position={[0, -0.014, 0]}
                scale={0.275}
              >
                <mesh
                  name="Object_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials["Touch_Bar_Shot_2021-04-02_at_18.13.28"]}
                />
              </group>
              <group name="Keyboard_8" position={[0, -0.014, 0]} scale={0.275}>
                <mesh
                  name="Object_29"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_29.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.Keys}
                />
              </group>
              <group name="Cube_9" position={[0, -0.014, 0]}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.Black_Plastic}
                />
              </group>
              <group
                name="Circle001_12"
                position={[0.203, 0.008, -0.104]}
                rotation={[0.011, -0.75, 1.274]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
