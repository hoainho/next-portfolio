import HomeInfo from "@/components/home/HomeInfo";
import ThreeProvider from "@/components/home/ThreeProvider";

const LayoutIsland = () => {
  return (
    <div className="w-full h-screen relative">
      <div
        className={`absolute left-0 right-0 z-10 flex items-center justify-center top-28`}
      >
        <HomeInfo />
      </div>
      <ThreeProvider />
    </div>
  );
};

export default LayoutIsland;
