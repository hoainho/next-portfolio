import clsx from "clsx";

export default function Loading() {
  return (
    <div>
      <div className="pt-10 px-6 !pb-0 bg-bg-default">
        <div className="max-container-blog !min-h-fit flex flex-col gap-y-3 ">
          <div className="h-4 w-16 bg-[#2d333b] rounded animate-pulse mb-16"></div>
          <div className="mt-3 text-fg-default bg-[#2d333b] rounded animate-pulse w-12">
          </div>
          <div className="max-w-[300px] pb-5 bg-[#2d333b] rounded animate-pulse h-11">
          </div>
          <div className="bg-[#2d333b] rounded animate-pulse h-5 max-w-[600px]">
          </div>
        </div>
      </div>
      <div className="max-container-blog py-5">
        <div className="flex flex-col gap-y-5 ">
          <div className="w-full">
            <div className="flex items-center justify-between py-7 border-b border-gray-border mb-5 bg-[#2d333b] rounded animate-pulse max-w-[200px] h-5">
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4">
              {[...Array(9)].map((_, i) => (
                <div className="col-span-1 pt-0 md:pt-5">
                  <div className=" h-[448px] group w-full flex flex-col gap-x-5 gap-3 cursor-pointer py-2 md:py-5 [&:not(:last-child)]:border-b lg:first:pt-0 first:pt-10 border-tertiary" key={i}>
                    <div className="h-48 bg-[#2d333b] rounded animate-pulse py-3"></div>
                    <div className="h-6 bg-[#2d333b] rounded animate-pulse max-w-[300px]"></div>
                    <div className="h-6 bg-[#2d333b] rounded animate-pulse max-w-[300px]"></div>
                    <div className="h-3 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="h-3 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="h-3 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="h-3 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="h-5 bg-[#2d333b] rounded animate-pulse max-w-[150px]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white overflow-hidden pt-16 pb-5">
        <div className="max-container-centre px-5 md:px-0 flex flex-col items-center gap-y-3 !min-h-fit">
          <div className="h-12 w-3/4 bg-[#2d333b] rounded animate-pulse">
          </div>
          <div className="w-3/5 h-6 mt-2 bg-[#2d333b] rounded animate-pulse">
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
  );
}