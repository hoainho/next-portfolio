"use client"

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import HomeInfo from "@/components/home/HomeInfo";
import Loader from "@/components/loader/Loader";
import { soundoff, soundon } from "@/public/icons";
import { Bird, Plane, IslandSea, Drone } from "@/components/models";
import Image from "next/image";

const Home = () => {
  const audioRef = useRef(new Audio('/audio/sakura.mp3'));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [moveX, setMoveX] = useState(0);
  const [scaleIsland, setScaleIsland] = useState(null);
  const [activeIsland, setActiveIsland] = useState(false);
  const [currentStage, setCurrentStage] = useState<number| null>(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [camera] = useState(1000);

  useEffect(() => {
    if (isPlayingMusic && audioRef.current) {
      audioRef.current
        .play()
        .then(() => console.log("Play audio"))
        .catch((e) => console.log(e));
    }
    return () => audioRef.current.pause();
  }, [isPlayingMusic]);

  useEffect(() => {
    if (moveX >= 13.9) {
      setActiveIsland(true);
      setMoveX(0);
    }
  }, [moveX]);

  const adjustDroneForScreenSize = () : [number, number[]] => {
    // If screen width is less than 768px, adjust the scale and position
    return [window.innerWidth < 768 ? 0.9 : 1, [0, -1.5, 0]];
  };

  const adjustIslandForScreenSize = (scale: number | null, position: number | null): [number, number[] | number] => {
    let screenScale, screenPosition: number | number[] = 0;

    if (window.innerWidth < 768) {
      screenScale = scale ?? -0.13;
      screenPosition = position ?? [0, -4.25, -55];
    } else {
      screenScale = scale ?? -0.09;
      screenPosition = position ?? [0, -10, -50];
    }

    return [screenScale, screenPosition];
  };

  const [droneScale, dronePosition] = adjustDroneForScreenSize();
  const [seaScale, seaPosition] = adjustIslandForScreenSize(null, scaleIsland);

  return (
    <section className="w-full h-[100dvh] relative">
      <div
        className={`absolute left-0 right-0 z-10 flex items-center justify-center top-28`}
      >
        {currentStage !== null && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: camera }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
          />
          <hemisphereLight
            // skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird setCurrentStage={setCurrentStage} />
          <Plane />
          <IslandSea
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={seaPosition as [number, number, number]}
            rotation={[0.5, Math.PI, Math.PI]}
            scale={seaScale}
          />
          <Drone
            isRotating={isRotating}
            scale={droneScale}
            position={
              moveX > 0
                ? [moveX, dronePosition[1], (dronePosition[2]) - moveX * 2] as [number, number, number]
                : dronePosition as [number, number, number]
            }
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <Image
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          id="sound-icon"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
