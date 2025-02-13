import { FeaturedLoading, CardLoading, PlatformLoading } from "@/components/loader/SkeletonContainer";

export default function Loading() {
  return (
    <div className="relative">
      <div className="bg-dark text-white min-h-screen overflow-hidden">
        <div className="fade-in-start max-container-centre py-2 px-5 lg:py-10">
          <div className="relative blog-hero flex flex-col">
            <div className="flex flex-col lg:flex-row w-full gap-x-10 gap-4">
              <FeaturedLoading />
              <div className="flex flex-col w-full lg:w-1/2 gap-7">
                {[...Array(3)].map((_, i) => (
                  <CardLoading cardKey={i} flex />
                ))}
              </div>
            </div>
            <div className="w-full p-5 lg:p-10 xl:p-12 z-10 ">
              <div className="h-40 bg-[#2d333b] rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white text-black">
        <div className="fade-in-start max-container-centre py-14 px-5 lg:py-10">
          <div className="flex gap-10 flex-col lg:flex-row">
            {[...Array(2)].map((_, i) => (
              <div className="flex flex-col w-full lg:w-1/2 gap-10" key={i}>
                <div className="h-10 bg-[#2d333b] rounded animate-pulse"></div>
                {[...Array(3)].map((_, i) => (
                  <CardLoading cardKey={i} flex />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-dark py-5 px-5">
        <PlatformLoading />
      </div>
    </div>
  );
}