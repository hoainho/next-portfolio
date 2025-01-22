import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useGlobalContext } from "@/context/GlobalContext";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { DoubleSide, TextureLoader } from "three";

type GLTFResult = GLTF & {
  nodes: {
    BackWall_BackWall_Mat_0: THREE.Mesh;
    Floor_Floor_Mat_0: THREE.Mesh;
    LeftWall_WallAndRoof_Mat_0: THREE.Mesh;
    Box001_Table_Mat_0: THREE.Mesh;
    Poster06_Poster03_Mat_0: THREE.Mesh;
    Poster02_Poster02_Mat_0: THREE.Mesh;
    Poster01_Poster01_Mat_0: THREE.Mesh;
    Poster04_Poster02_Mat_0: THREE.Mesh;
    Poster05_Poster02_Mat_0: THREE.Mesh;
    Poster03_Poster02_Mat_0: THREE.Mesh;
    Foliage001_Trunk_0: THREE.Mesh;
    Foliage001_Fronds_0: THREE.Mesh;
    ["Box006_18_-_Default_0"]: THREE.Mesh;
    Foliage003_Fronds_0: THREE.Mesh;
    Foliage003_Stalks_0: THREE.Mesh;
    Foliage003_Flowers_0: THREE.Mesh;
    Foliage002_Trunk_0: THREE.Mesh;
    Foliage002_Fronds_0: THREE.Mesh;
    Roof_WallAndRoof_Mat_0: THREE.Mesh;
    Roof_RoofLight_Mat_0: THREE.Mesh;
    RightWall_WallAndRoof_Mat_0: THREE.Mesh;
    Line007_Lamp_Mat_0: THREE.Mesh;
    Line006_Lamp_Mat_0: THREE.Mesh;
    Cylinder002_Lamp_Mat_0: THREE.Mesh;
    Cylinder001_Lamp_Mat_0: THREE.Mesh;
    Sphere001_Lamp_Mat_0: THREE.Mesh;
    Side_Screen_SideScreen_Mat_0: THREE.Mesh;
    ["Lid_03_-_Default_0"]: THREE.Mesh;
    ["Lapbody_02_-_Default_0"]: THREE.Mesh;
    ["keyboard_01_-_Default_0"]: THREE.Mesh;
    ["BackNamePlate_07_-_Default_0"]: THREE.Mesh;
    ["BackNamePlate001_07_-_Default_0"]: THREE.Mesh;
    ["Lapbody001_02_-_Default_0"]: THREE.Mesh;
    ["Lid001_03_-_Default_0"]: THREE.Mesh;
    Side_Screen001_SideScreen_Mat_0: THREE.Mesh;
    ["keyboard001_01_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    BackWall_Mat: THREE.MeshStandardMaterial;
    Floor_Mat: THREE.MeshStandardMaterial;
    WallAndRoof_Mat: THREE.MeshStandardMaterial;
    Table_Mat: THREE.MeshStandardMaterial;
    Poster03_Mat: THREE.MeshStandardMaterial;
    Poster02_Mat: THREE.MeshStandardMaterial;
    Poster01_Mat: THREE.MeshStandardMaterial;
    Trunk: THREE.MeshStandardMaterial;
    Fronds: THREE.MeshStandardMaterial;
    ["18_-_Default"]: THREE.MeshStandardMaterial;
    Fronds_0: THREE.MeshStandardMaterial;
    Stalks: THREE.MeshStandardMaterial;
    Flowers: THREE.MeshStandardMaterial;
    RoofLight_Mat: THREE.MeshStandardMaterial;
    Lamp_Mat: THREE.MeshStandardMaterial;
    SideScreen_Mat: THREE.MeshStandardMaterial;
    ["03_-_Default"]: THREE.MeshStandardMaterial;
    ["02_-_Default"]: THREE.MeshStandardMaterial;
    ["01_-_Default"]: THREE.MeshStandardMaterial;
    ["07_-_Default"]: THREE.MeshStandardMaterial;
  };
};

export function Desk() {
  const deskRef = useRef<THREE.Group>(null);
  const cachedUrl =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_CLOUDFRONT_URL
      : "";
  const { nodes, materials, animations } = useGLTF(
    `${cachedUrl}/3d/claw_gaming_laptop_setup.glb`,
  ) as GLTFResult;

  // Preload the GLTF model to start loading immediately
  useGLTF.preload(`${cachedUrl}/3d/claw_gaming_laptop_setup.glb`);

  const texture = useLoader(TextureLoader, `${cachedUrl}/images/terminal.png`);
  const aspectRatio = texture.image.width / texture.image.height;

  const calendarTexture = useLoader(
    TextureLoader,
    `${cachedUrl}/images/code.png`,
  );
  const calendarAspectRatio = texture.image.width / texture.image.height;

  const AWS_Solution_texture = useLoader(
    TextureLoader,
    `${cachedUrl}/certifications/aws-knowledge-architecture.png`,
  );
  const AWS_Solution_aspectRatio = texture.image.width / texture.image.height;

  const AWS_Essentials_texture = useLoader(
    TextureLoader,
    `${cachedUrl}/certifications/aws-knowledge-cloud-essentials.png`,
  );
  const AWS_Essentials_aspectRatio = texture.image.width / texture.image.height;

  const AWS_EKS_texture = useLoader(
    TextureLoader,
    `${cachedUrl}/certifications/aws-knowledge-amazon-eks.png`,
  );
  const AWS_EKS_aspectRatio = texture.image.width / texture.image.height;

  const AWS_CloudQuest_texture = useLoader(
    TextureLoader,
    `${cachedUrl}/certifications/aws-cloud-practitioner.png`,
  );
  const AWS_CloudQuest_aspectRatio = texture.image.width / texture.image.height;

  const AWS_Data_Analysis_texture = useLoader(
    TextureLoader,
    `${cachedUrl}/certifications/data-analysis-using-python.png`,
  );
  const AWS_Data_Analysis_aspectRatio =
    texture.image.width / texture.image.height;

  const AWS_Data_Science_texture = useLoader(
    TextureLoader,
    `${cachedUrl}/certifications/python-for-data-science.png`,
  );
  const AWS_Data_Science_aspectRatio =
    texture.image.width / texture.image.height;

  const {
    state: { isRotating },
    setCurrentStage,
    setIsRotating,
  } = useGlobalContext();

  const { mixer } = useAnimations(animations, deskRef);

  const { gl, viewport } = useThree();

  // Use a ref for the last mouse x position
  const lastX = useRef(0);
  // Use a ref for rotation speed
  const rotationSpeed = useRef(0);
  // Define a damping factor to control rotation damping
  const dampingFactor = 0.95;

  // Handle pointer (mouse or touch) down event
  const handlePointerDown = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    // Store the current clientX position for reference
    lastX.current = clientX;
  };

  // Handle pointer (mouse or touch) up event
  const handlePointerUp = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };
  // Handle pointer (mouse or touch) move event
  const handlePointerMove = (event: any) => {
    event.stopPropagation();
    event.preventDefault();

    if (isRotating && deskRef.current) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // Calculate the change in clientX position
      const delta = (clientX - lastX.current) / viewport.width;

      // Update the desk's rotation based on the mouse/touch movement
      const newRotationY = deskRef.current.rotation.y + delta * 0.01 * Math.PI;

      // Clamp the rotation within the range [-0.8, 0.8]
      deskRef.current.rotation.y = Math.max(-0.8, Math.min(0.8, newRotationY));

      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  // Handle keydown events
  const handleKeyDown = (event: any) => {
    if (deskRef.current) {
      //Control Character by keyboard
      const spaceBase = 0.002 * Math.PI;
      if (event.key === "ArrowLeft") {
        // if (!isRotating) setIsRotating(true);

        deskRef.current.rotation.y += spaceBase;
        rotationSpeed.current = 0.009;
      } else if (event.key === "ArrowRight") {
        // if (!isRotating) setIsRotating(true);

        deskRef.current.rotation.y -= spaceBase;
        rotationSpeed.current = -0.009;
      } else if (event.key === "ArrowUp") {
        deskRef.current.scale.x -= spaceBase;
        deskRef.current.scale.y -= spaceBase;
        deskRef.current.scale.z -= spaceBase;
        // scaleSpeed.current = 0.003;
      } else if (event.key === "ArrowDown") {
        deskRef.current.scale.x += spaceBase;
        deskRef.current.scale.y += spaceBase;
        deskRef.current.scale.z += spaceBase;
        // scaleSpeed.current = -0.003;
      }
    }
  };

  // Handle keyup events
  const handleKeyUp = (event: any) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  // Touch events for mobile devices
  const handleTouchStart = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
  };

  const handleTouchEnd = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  const handleTouchMove = (event: any) => {
    event.stopPropagation();
    event.preventDefault();

    if (isRotating && deskRef.current) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      if (
        deskRef.current.rotation.y < -0.8 ||
        deskRef.current.rotation.y > 0.8
      ) {
        setIsRotating(false);
        rotationSpeed.current = 0;
        lastX.current = event.touches
          ? event.touches[0].clientX
          : event.clientX;
      } else {
        deskRef.current.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    }
  };

  useEffect(() => {
    const action = mixer?.clipAction(animations[0]);
    action.clampWhenFinished = true;
    action.loop = THREE.LoopOnce;
    action.play();

    return () => {
      action.stop();
    };
  }, [animations, mixer]);

  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);
  // This function is called on each frame update
  useFrame(() => {
    if (deskRef.current) {
      if (!isRotating) {
        // Apply damping factor
        rotationSpeed.current *= dampingFactor;

        // Stop rotation when speed is very small
        if (Math.abs(rotationSpeed.current) < 0.001) {
          rotationSpeed.current = 0;
        }

        deskRef.current.rotation.y += rotationSpeed.current;
        deskRef.current.rotation.y = Math.max(
          -0.8,
          Math.min(0.8, deskRef.current.rotation.y + rotationSpeed.current),
        );
      } else {
        // When rotating, determine the current stage based on desk's orientation
        const rotation = deskRef.current.rotation.y;

        const normalizedRotation =
          ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        // Set the current stage based on the desk's orientation

        switch (true) {
          case normalizedRotation >= 0 && normalizedRotation <= 0.5:
            setCurrentStage(4);
            break;
          case normalizedRotation >= 5.5 && normalizedRotation <= 6:
            setCurrentStage(3);
            break;
          case normalizedRotation >= 0.5 && normalizedRotation <= 0.7:
            setCurrentStage(2);
            break;
          case normalizedRotation >= 3 && normalizedRotation <= 3.3:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(null);
        }
      }
    }
  });
  return (
    //Update edge view at here
    <group
      ref={deskRef}
      dispose={null}
      position={[0, -3.2, 2.2]}
      // position={[0, -3.8, 2]}
      scale={2.3}
      rotation={[0.1, 0, 0]}
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.934}
        >
          <group
            name="4d8ce3d4d4b647bcb143847ea4c8875dfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.025}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="PhotometricLight003"
                  position={[58.962, 48.839, 3.709]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.436}
                >
                  <group name="Object_5" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_6" />
                  </group>
                </group>
                <group
                  name="PhotometricLight004"
                  position={[-37.879, 51.696, 2.921]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.436}
                >
                  <group name="Object_8" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_9" />
                  </group>
                </group>
                <group
                  name="PhotometricLight005"
                  position={[-16.199, 56.969, -0.347]}
                  scale={0.436}
                >
                  <group name="Object_11" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_12" />
                  </group>
                </group>
                <group
                  name="BackWall"
                  position={[3.844, 67.102, -16.795]}
                  scale={0.436}
                >
                  <group name="Object_14" position={[0, 0, -2.5]}>
                    <mesh
                      name="BackWall_BackWall_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.BackWall_BackWall_Mat_0.geometry}
                      material={materials.BackWall_Mat}
                    />
                  </group>
                </group>
                <group
                  name="Floor"
                  position={[3.973, 2.825, 49.036]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.436}
                >
                  <mesh
                    name="Floor_Floor_Mat_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Floor_Floor_Mat_0.geometry}
                    material={materials.Floor_Mat}
                  />

                  {/* <mesh
                    name="BackWall_BackWall_Mat_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.BackWall_BackWall_Mat_0.geometry}
                    material={materials.BackWall_Mat}
                  /> */}
                </group>
                <group
                  name="LeftWall"
                  position={[-83.195, 67.102, 49.33]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={0.436}
                >
                  <group name="Object_19" position={[0, 0, -2.5]}>
                    <mesh
                      name="LeftWall_WallAndRoof_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.LeftWall_WallAndRoof_Mat_0.geometry}
                      material={materials.WallAndRoof_Mat}
                    />
                  </group>
                </group>
                <group
                  name="Box001"
                  position={[5.917, 34.492, 9.982]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.436}
                >
                  <group name="Object_22" position={[0, 0, -2.5]}>
                    <mesh
                      name="Box001_Table_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Box001_Table_Mat_0.geometry}
                      material={materials.Table_Mat}
                    />
                  </group>
                </group>
                <group
                  name="Poster06"
                  position={[29.575, 67.937, -15.405]}
                  scale={0.436}
                >
                  <mesh
                    name="Poster06_Poster03_Mat_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Poster06_Poster03_Mat_0.geometry}
                    material={materials.Poster03_Mat}
                  />
                </group>
                <group
                  name="Poster01"
                  position={[0.381, 74.881, -15.405]}
                  scale={[0.522, 0.552, 0.436]}
                >
                  {/* Certificate AWS EKS */}
                  <mesh
                    castShadow
                    receiveShadow
                    scale={[0.65, 1.2, 1.7]}
                    rotation={[0, 0, 0]}
                    position={[-37, -26, 0]}
                  >
                    <mesh scale={10}>
                      <boxGeometry args={[AWS_EKS_aspectRatio * 2, 2, 0.1]} />
                      <meshPhysicalMaterial
                        color="rgba(255, 255, 255, 0.9)"
                        roughness={0.1}
                        metalness={0.5}
                        envMapIntensity={2}
                        map={AWS_EKS_texture}
                        transparent
                        side={DoubleSide}
                      />
                    </mesh>
                  </mesh>

                  {/* Certificate AWS Essentials */}
                  <mesh
                    castShadow
                    receiveShadow
                    scale={[0.65, 1.2, 1.7]}
                    rotation={[0, 0, 0]}
                    position={[-37, 2, 0]}
                  >
                    <mesh scale={10}>
                      <boxGeometry
                        args={[AWS_Essentials_aspectRatio * 2, 2, 0.1]}
                      />
                      <meshPhysicalMaterial
                        color="rgba(255, 255, 255, 0.9)"
                        roughness={0.1}
                        metalness={0.5}
                        envMapIntensity={2}
                        map={AWS_Essentials_texture}
                        transparent
                        side={DoubleSide}
                      />
                    </mesh>
                  </mesh>
                  {/* Certificate AWS Solution Architect */}
                  <mesh
                    castShadow
                    receiveShadow
                    scale={[0.65, 1.2, 1.7]}
                    rotation={[0, 0, 0]}
                    position={[-12, 2, 0]}
                  >
                    <mesh scale={10}>
                      <boxGeometry
                        args={[AWS_Solution_aspectRatio * 2, 2, 0.1]}
                      />
                      <meshPhysicalMaterial
                        color="rgba(255, 255, 255, 0.9)"
                        roughness={0.1}
                        metalness={0.5}
                        envMapIntensity={2}
                        map={AWS_Solution_texture}
                        transparent
                        side={DoubleSide}
                      />
                    </mesh>
                  </mesh>

                  {/* Cloud Quest */}
                  <mesh
                    castShadow
                    receiveShadow
                    scale={[0.65, 1.2, 1.7]}
                    rotation={[0, 0, 0]}
                    position={[13, 2, 0]}
                  >
                    <mesh scale={10}>
                      <boxGeometry
                        args={[AWS_CloudQuest_aspectRatio * 2, 2, 0.1]}
                      />
                      <meshPhysicalMaterial
                        color="rgba(255, 255, 255, 0.9)"
                        roughness={0.1}
                        metalness={0.5}
                        envMapIntensity={2}
                        map={AWS_CloudQuest_texture}
                        transparent
                        side={DoubleSide}
                      />
                    </mesh>
                  </mesh>

                  {/* IBM Data Analysis */}
                  <mesh
                    castShadow
                    receiveShadow
                    scale={[0.65, 1.2, 1.7]}
                    rotation={[0, 0, 0]}
                    position={[-12, -26, 0]}
                  >
                    <mesh scale={10}>
                      <boxGeometry
                        args={[AWS_Data_Analysis_aspectRatio * 2, 2, 0.1]}
                      />
                      <meshPhysicalMaterial
                        color="rgba(255, 255, 255, 0.9)"
                        roughness={0.1}
                        metalness={0.5}
                        envMapIntensity={2}
                        map={AWS_Data_Analysis_texture}
                        transparent
                        side={DoubleSide}
                      />
                    </mesh>
                  </mesh>

                  {/* IBM Data Science */}
                  <mesh
                    castShadow
                    receiveShadow
                    scale={[0.65, 1.2, 1.7]}
                    rotation={[0, 0, 0]}
                    position={[13, -26, 0]}
                  >
                    <mesh scale={10}>
                      <boxGeometry
                        args={[AWS_Data_Science_aspectRatio * 2, 2, 0.1]}
                      />
                      <meshPhysicalMaterial
                        color="rgba(255, 255, 255, 0.9)"
                        roughness={0.1}
                        metalness={0.5}
                        envMapIntensity={2}
                        map={AWS_Data_Science_texture}
                        transparent
                        side={DoubleSide}
                      />
                    </mesh>
                  </mesh>
                </group>

                {/* Poster centre */}
                <group
                  name="Poster02"
                  position={[-50.753, 76.428, -15.405]}
                  scale={0.436}
                >
                  <mesh
                    name="Poster02_Poster02_Mat_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Poster02_Poster02_Mat_0.geometry}
                    material={materials.Poster02_Mat}
                  />
                </group>
                <group
                  name="Poster04"
                  position={[-50.753, 60.519, -15.405]}
                  scale={0.436}
                >
                  <mesh
                    name="Poster04_Poster02_Mat_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Poster04_Poster02_Mat_0.geometry}
                    material={materials.Poster02_Mat}
                  />
                </group>
                <group
                  name="Poster05"
                  position={[-35.761, 60.519, -15.405]}
                  scale={0.436}
                >
                  <mesh
                    name="Poster05_Poster02_Mat_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Poster05_Poster02_Mat_0.geometry}
                    material={materials.Poster02_Mat}
                  />
                </group>
                <group
                  name="Poster03"
                  position={[-35.761, 76.428, -15.405]}
                  scale={0.436}
                >
                  <mesh
                    name="Poster03_Poster02_Mat_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Poster03_Poster02_Mat_0.geometry}
                    material={materials.Poster02_Mat}
                  />
                </group>
                <group
                  name="Foliage001"
                  position={[46.127, 38.022, -9.596]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.039}
                >
                  <mesh
                    name="Foliage001_Trunk_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Foliage001_Trunk_0.geometry}
                    material={materials.Trunk}
                  />
                  <mesh
                    name="Foliage001_Fronds_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Foliage001_Fronds_0.geometry}
                    material={materials.Fronds}
                  />
                </group>
                <group
                  name="Box006"
                  position={[43.116, 37.371, -11.143]}
                  scale={0.436}
                >
                  <mesh
                    name="Box006_18_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Box006_18_-_Default_0"].geometry}
                    material={materials["18_-_Default"]}
                  />
                </group>
                <group
                  name="Foliage003"
                  position={[43.685, 38.403, -9.772]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.122}
                >
                  <mesh
                    name="Foliage003_Fronds_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Foliage003_Fronds_0.geometry}
                    material={materials.Fronds_0}
                  />
                  <mesh
                    name="Foliage003_Stalks_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Foliage003_Stalks_0.geometry}
                    material={materials.Stalks}
                  />
                  <mesh
                    name="Foliage003_Flowers_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Foliage003_Flowers_0.geometry}
                    material={materials.Flowers}
                  />
                </group>
                <group
                  name="Foliage002"
                  position={[41.232, 38.022, -9.596]}
                  rotation={[-Math.PI / 2, 0, 2.694]}
                  scale={0.063}
                >
                  <mesh
                    name="Foliage002_Trunk_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Foliage002_Trunk_0.geometry}
                    material={materials.Trunk}
                  />
                  <mesh
                    name="Foliage002_Fronds_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Foliage002_Fronds_0.geometry}
                    material={materials.Fronds}
                  />
                </group>
                <group
                  name="Roof"
                  position={[-16.309, 132.806, 49.33]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={0.436}
                >
                  <group name="Object_49" position={[0, 0, -2.5]}>
                    <mesh
                      name="Roof_WallAndRoof_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Roof_WallAndRoof_Mat_0.geometry}
                      material={materials.WallAndRoof_Mat}
                    />
                    <mesh
                      name="Roof_RoofLight_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Roof_RoofLight_Mat_0.geometry}
                      material={materials.RoofLight_Mat}
                    />
                  </group>
                </group>
                <group
                  name="RightWall"
                  position={[91.357, 67.102, 49.33]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={0.436}
                >
                  <group name="Object_53" position={[0, 0, -2.5]}>
                    <mesh
                      name="RightWall_WallAndRoof_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.RightWall_WallAndRoof_Mat_0.geometry}
                      material={materials.WallAndRoof_Mat}
                    />
                  </group>
                </group>
                <group
                  name="Lamp"
                  position={[-21.74, 47.683, -2.913]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group
                    name="Line007"
                    position={[5.523, -2.619, 9.34]}
                    rotation={[Math.PI / 2, -0.268, 0.565]}
                    scale={0.803}
                  >
                    <group name="Object_57" position={[-1.948, 1.038, 0]}>
                      <mesh
                        name="Line007_Lamp_Mat_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Line007_Lamp_Mat_0.geometry}
                        material={materials.Lamp_Mat}
                      />
                    </group>
                  </group>
                  <group
                    name="Line006"
                    position={[0.204, -1.195, 5.62]}
                    rotation={[Math.PI / 2, -0.268, 0]}
                    scale={0.803}
                  >
                    <mesh
                      name="Line006_Lamp_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Line006_Lamp_Mat_0.geometry}
                      material={materials.Lamp_Mat}
                    />
                  </group>
                  <group
                    name="Cylinder002"
                    position={[0.887, -1.409, -11.216]}
                    rotation={[-0.116, -0.398, -0.291]}
                    scale={0.803}
                  >
                    <mesh
                      name="Cylinder002_Lamp_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder002_Lamp_Mat_0.geometry}
                      material={materials.Lamp_Mat}
                    />
                  </group>
                  <group
                    name="Cylinder001"
                    position={[-9.207, -4.567, -10.772]}
                    rotation={[-Math.PI / 2, 0.268, 0]}
                    scale={0.803}
                  >
                    <mesh
                      name="Cylinder001_Lamp_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder001_Lamp_Mat_0.geometry}
                      material={materials.Lamp_Mat}
                    />
                  </group>
                  <group
                    name="Sphere001"
                    position={[0.893, -1.384, -11.327]}
                    rotation={[Math.PI / 2, -0.268, 0]}
                    scale={0.803}
                  >
                    <mesh
                      name="Sphere001_Lamp_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Sphere001_Lamp_Mat_0.geometry}
                      material={materials.Lamp_Mat}
                    />
                  </group>
                </group>

                <group
                  name="Lid"
                  position={[-3.878, 36.479, -3.975]}
                  rotation={[Math.PI / 2, 0, -Math.PI]}
                  scale={-0.539}
                >
                  <group name="Object_71" position={[0.041, 9.49, -0.729]}>
                    <mesh
                      name="Lid_03_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Lid_03_-_Default_0"].geometry}
                      material={materials["03_-_Default"]}
                    />
                    <mesh
                      name="Poster06_Poster03_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Poster06_Poster03_Mat_0.geometry}
                      material={materials.Poster03_Mat}
                      scale={[0.66, 0.32, 1.2]}
                      position={[0, -0.5, 1.1]}
                    />

                    <mesh
                      castShadow
                      receiveShadow
                      scale={0.5}
                      rotation={[0, 0, 0]}
                    >
                      <mesh castShadow receiveShadow scale={20}>
                        <boxGeometry args={[aspectRatio * 2, 2, 0.1]} />
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
                    </mesh>
                  </group>
                </group>
                <group
                  name="Lapbody"
                  position={[-3.878, 35.569, 0.592]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.45}
                >
                  <mesh
                    name="Lapbody_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Lapbody_02_-_Default_0"].geometry}
                    material={materials["02_-_Default"]}
                  />
                </group>

                <group
                  name="BackNamePlate"
                  position={[-3.876, 36.159, -5.165]}
                  rotation={[Math.PI, 0, -Math.PI]}
                  scale={0.436}
                >
                  <mesh
                    name="BackNamePlate_07_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["BackNamePlate_07_-_Default_0"].geometry}
                    material={materials["07_-_Default"]}
                  />
                </group>

                <group
                  position={[19.216, 36.479, 5.219]}
                  rotation={[-Math.PI / 2, 0, -0.471]}
                  scale={0.436}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Lapbody001_02_-_Default_0"].geometry}
                    material={materials["02_-_Default"]}
                  />
                </group>
                <group
                  name="Lid001"
                  position={[21.46, 37.479, 1.21]}
                  rotation={[Math.PI / 2, 0, -Math.PI]}
                  scale={-0.539}
                >
                  <group position={[0.041, 9.49, -0.729]}>
                    <mesh
                      castShadow
                      receiveShadow
                      rotation={[-Math.PI, -3.14, Math.PI]}
                      scale={1}
                      position={[0, -0.5, 1.1]}
                    >
                      <mesh scale={10}>
                        <boxGeometry args={[calendarAspectRatio * 2, 2, 0.1]} />
                        <meshPhysicalMaterial
                          color="rgba(255, 255, 255, 0.9)"
                          roughness={0.1}
                          metalness={0.5}
                          envMapIntensity={2}
                          map={calendarTexture}
                          transparent
                          side={DoubleSide}
                        />
                      </mesh>
                    </mesh>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
