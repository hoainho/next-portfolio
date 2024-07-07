import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center className="flex-center flex-col">
      <span className="canvas-loader"></span>
      <p className="text-[18px] text-[#40c9ff] font-extrabold mt-[40px]">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
