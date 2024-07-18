import { Html, useProgress } from "@react-three/drei";
import { Progress } from "@/components/ui/progress";

const CanvasLoader = () => {
  const data = useProgress();
  return (
    <Html as="div" center className="flex-center flex-col">
      <p className="animate-bounce text-[22px] text-[#40c9ff] font-extrabold mt-[40px]">
        {data.loaded} / {data.total}
      </p>
      <div className="flex-center gap-[10px]">
        <Progress value={data.progress} className="w-[200px] sm:w-[280px]" />
        <p className="text-[18px] text-[#40c9ff] font-black">
          {data.progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
