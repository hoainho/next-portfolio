import CardLoading from "@/components/loader/CardLoading";

export default function Loading() {
  return (
    <div className="relative">
      <div className="bg-dark text-white min-h-screen overflow-hidden">
        <div className="fade-in-start max-container-centre py-2 px-5 lg:py-10">
          <div className="relative blog-hero flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row w-full gap-x-10 gap-4">
              <div className="md:w-1/2 w-full flex flex-col gap-4">
              <CardLoading countItem={5}/>
              </div>
              <div className="flex flex-col w-full lg:w-1/2 gap-7">
                {[...Array(3)].map((_, i) => (
                  <CardLoading flex />
                ))}
              </div>
            </div>
            <div className="w-full !p-5 lg:p-10 xl:p-12 z-10 mt-10">
              <div className=" h-40 bg-[#2d333b] rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}