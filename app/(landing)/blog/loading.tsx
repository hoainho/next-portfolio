import clsx from "clsx";

export default function Loading() {
  return (
    <div className="relative">
      <div className="bg-dark text-white min-h-screen overflow-hidden">
        <div className="fade-in-start max-container-centre py-2 px-5 lg:py-10">
          <div className="relative blog-hero flex flex-col">
            <div className="flex flex-col lg:flex-row w-full gap-x-10 gap-4">
              <div className="md:w-1/2 w-full flex flex-col gap-4">
                <div className="w-full h-[336px] bg-[#2d333b] rounded animate-pulse"></div>
                <div className="w-14 h-2 bg-[#2d333b] rounded animate-pulse"></div>
                <div className="h-8 bg-[#2d333b] rounded animate-pulse"></div>
                <div className="h-8 bg-[#2d333b] rounded animate-pulse"></div>
                <div className="h-4 bg-[#2d333b] rounded animate-pulse"></div>
                <div className="h-3 bg-[#2d333b] rounded animate-pulse"></div>
                <div className="h-3 bg-[#2d333b] rounded animate-pulse"></div>
                <div className="w-1/3 h-5 bg-[#2d333b] rounded animate-pulse"></div>
              </div>
              <div className="flex flex-col w-full lg:w-1/2 gap-7">
                {[...Array(3)].map((_, i) => (
                  <div className="md:flex flex flex-col gap-3" key={i}>
                    <div className="w-1/3 h-28 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="w-full flex flex-col gap-4">
                      <div className="w-10 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                      <div className="w-10/12 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                      <div className="w-10/12 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                      <div className="w-full h-2 bg-[#2d333b] rounded animate-pulse"></div>
                      <div className="w-full h-2 bg-[#2d333b] rounded animate-pulse"></div>
                      <div className="w-full h-2 bg-[#2d333b] rounded animate-pulse"></div>
                      <div className="w-full h-2 bg-[#2d333b] rounded animate-pulse"></div>
                      <div className="w-1/2 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                    </div>
                  </div>
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
            <div className="flex flex-col w-full lg:w-1/2 gap-10">
              <div className="h-10 bg-[#2d333b] rounded animate-pulse"></div>
              {[...Array(3)].map((_, i) => (
                <div className="md:flex flex flex-col gap-3" key={i}>
                  <div className="w-1/3 h-28 bg-[#2d333b] rounded animate-pulse"></div>
                  <div className="w-full flex flex-col gap-4">
                    <div className="w-10 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="w-10/12 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="w-10/12 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="w-full h-2 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="w-full h-2 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="w-1/2 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col w-full lg:w-1/2 gap-10">
              <div className="h-10 bg-[#2d333b] rounded animate-pulse"></div>
              {[...Array(3)].map((_, i) => (
                <div className="md:flex flex flex-col gap-3" key={i}>
                  <div className="w-1/3 h-28 bg-[#2d333b] rounded animate-pulse"></div>
                  <div className="w-full flex flex-col gap-4">
                    <div className="w-10 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="w-10/12 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="w-10/12 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="w-full h-2 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="w-full h-2 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="w-1/2 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white min-h-screen overflow-hidden">

        <div className="fade-in-start max-container-centre py-2 px-5 lg:py-10">
          <div className="relative blog-hero flex flex-col">
            <div className="h-10 bg-[#2d333b] rounded animate-pulse mb-6"></div>
            <div className="flex flex-col lg:flex-row w-full gap-x-10 gap-4">
              <div className="md:w-1/2 w-full flex flex-col gap-4">
                <div className="w-full h-[336px] bg-[#2d333b] rounded animate-pulse"></div>
                <div className="w-14 h-2 bg-[#2d333b] rounded animate-pulse"></div>
                <div className="h-8 bg-[#2d333b] rounded animate-pulse"></div>
                <div className="h-8 bg-[#2d333b] rounded animate-pulse"></div>
                <div className="h-4 bg-[#2d333b] rounded animate-pulse"></div>
                <div className="h-3 bg-[#2d333b] rounded animate-pulse"></div>
                <div className="h-3 bg-[#2d333b] rounded animate-pulse"></div>
                <div className="w-1/3 h-5 bg-[#2d333b] rounded animate-pulse"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full lg:w-1/2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-3 w-full">
                    <div className="w-full h-40 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="w-full flex flex-col gap-4">
                      <div className="w-10 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                      <div className="w-10/12 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                      <div className="w-10/12 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                      <div className="w-full h-2 bg-[#2d333b] rounded animate-pulse"></div>
                      <div className="w-full h-2 bg-[#2d333b] rounded animate-pulse"></div>
                      <div className="w-full h-2 bg-[#2d333b] rounded animate-pulse"></div>
                      <div className="w-full h-2 bg-[#2d333b] rounded animate-pulse"></div>
                      <div className="w-1/2 h-4 bg-[#2d333b] rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
            <div className="w-full flex justify-center h-12  mb-6 mt-8">
              <div className="w-1/2 bg-[#2d333b] rounded animate-puls h-full"></div>
            </div>

            <div className="w-full flex justify-center gap-5 mt-10 flex-row flex-wrap">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className={clsx(
                    "flex flex-col w-full max-w-[260px] items-start justify-between gap-y-10",
                    "bg-black text-white gap-y-3 px-5 py-14 rounded-sm",
                  )}
                >
                  <div className="flex flex-col items-start justify-start gap-y-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2d333b] animate-pulse text-active mb-3">
                    </div>
                    <div className="h-5 w-44 bg-[#2d333b] animate-pulse rounded"></div>
                    <div className="h-5 w-44 bg-[#2d333b] animate-pulse rounded"></div>
                  </div>
                  <div
                    className="flex items-center gap-x-1 text-active mt-8"
                  >
                    <div className="h-5 w-44 bg-[#2d333b] animate-pulse rounded"></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}