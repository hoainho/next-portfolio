import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress, item } = useProgress();
  let loader;
  switch (true) {
    case item.includes("/3d/"):
    case item.includes("/images/"):
    case item.includes("/certifications/"):
      loader = null;
      break;
    default:
      loader = (
        <Html as="div" center className="flex-center flex-col">
          <span className="canvas-loader"></span>
          <p className="text-[18px] text-[#40c9ff] font-extrabold mt-[40px]">
            {progress.toFixed(2)}%
          </p>
        </Html>
      );
      break;
  }
  return loader;
};

export default CanvasLoader;
