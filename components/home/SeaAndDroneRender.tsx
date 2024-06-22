"use client";

import { Suspense, useEffect, useState } from "react";
import { Drone, IslandSea } from "../models";
import CanvasLoader from "../loader/LoaderWithProgressPercent";
import { useGlobalContext } from "@/context/GlobalContext";

type Props = {};

const SeaAndDroneRender = (props: Props) => {
  const {
    state: { isRotating },
    setCurrentStage,
    setIsRotating,
  } = useGlobalContext();

  const [droneScale, setDroneScale] = useState(1);
  const [dronePosition, setDronePosition] = useState<[number, number, number]>([
    0, -1.5, 0,
  ]);
  const [seaScale, setSeaScale] = useState(-0.09);
  const [seaPosition, setSeaPosition] = useState<[number, number, number]>([
    0, -10, -50,
  ]);
  useEffect(() => {
    const adjustDroneForScreenSize = (): [number, [number, number, number]] => {
      if (window.innerWidth < 768) {
        return [0.9, [0, -1.5, 0]];
      } else {
        return [1, [0, -1.5, 0]];
      }
    };

    const adjustIslandForScreenSize = (): [
      number,
      [number, number, number]
    ] => {
      let screenScale, screenPosition: [number, number, number];

      if (window.innerWidth < 768) {
        screenScale = -0.13;
        screenPosition = [0, -4.25, -55];
      } else {
        screenScale = -0.09;
        screenPosition = [0, -10, -50];
      }

      return [screenScale, screenPosition];
    };

    const [droneScale, dronePosition] = adjustDroneForScreenSize();
    const [seaScale, seaPosition] = adjustIslandForScreenSize();

    setDroneScale(droneScale);
    setDronePosition(dronePosition);
    setSeaScale(seaScale);
    setSeaPosition(seaPosition);
  }, []);
  return (
    <>
      <Suspense fallback={<CanvasLoader />}>
        <IslandSea
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          position={seaPosition}
          rotation={[0.5, Math.PI, Math.PI]}
          scale={seaScale}
        />
      </Suspense>
      <Suspense fallback={<CanvasLoader />}>
        <Drone
          isRotating={isRotating}
          scale={droneScale}
          position={dronePosition}
        />
      </Suspense>
    </>
  );
};

export default SeaAndDroneRender;
