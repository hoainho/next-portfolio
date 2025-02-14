import CardLoading from "@/components/loader/CardLoading";

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4">
              {[...Array(9)].map((_, i) => (
                <div className="col-span-1 pt-0 md:pt-5">
                  <CardLoading  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}