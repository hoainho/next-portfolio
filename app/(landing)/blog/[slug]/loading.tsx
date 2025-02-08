export default function Loading() {
  return (
    <div className="blog bg-bg-default">
      <div className="blog-title relative">
        <div className="max-container-blog pt-10 !pb-0">
          {/* Breadcrumb skeleton */}
          <div className="flex gap-2 items-center mb-6">
            <div className="h-4 w-16 bg-[#2d333b] rounded animate-pulse"></div>
            <div className="h-4 w-4 bg-[#2d333b] rounded animate-pulse"></div>
            <div className="h-4 w-16 bg-[#2d333b] rounded animate-pulse"></div>
          </div>

          {/* Title skeleton */}
          <div className="h-12 w-3/4 bg-gradient-to-r from-[#2d333b] to-[#373e47] rounded mb-4 animate-pulse"></div>

          {/* Excerpt skeleton */}
          <div className="space-y-2 mb-10">
            <div className="h-4 w-full bg-[#2d333b] rounded animate-pulse"></div>
            <div className="h-4 w-2/3 bg-[#2d333b] rounded animate-pulse"></div>
          </div>

          {/* Featured image skeleton */}
          <div className="relative min-h-[180px] xs:min-h-[250px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] h-full w-full z-10">
            <div className="aspect-[4/2.4] rounded-md h-fit w-full absolute top-0 left-0 right-0 z-1 bg-gradient-to-br from-[#2d333b] via-[#373e47] to-[#2d333b] animate-pulse"></div>
          </div>
          <div className="h-24 w-full absolute bottom-0 left-0 right-0"></div>
        </div>
      </div>

      <div className="pt-2 md:pt-5 xl:pt-10">
        <div className="max-container-blog px-0">
          {/* Author info skeleton */}
          <div className="flex justify-between items-center py-5 border-b-2 border-[#545df0] mt-4 mb-8">
            <div className="flex flex-col gap-3">
              <div className="h-5 w-48 bg-gradient-to-r from-[#2d333b] to-[#373e47] rounded animate-pulse"></div>
              <div className="h-4 w-64 bg-[#2d333b] rounded animate-pulse"></div>
            </div>
            <div className="flex gap-3">
              <div className="h-8 w-8 bg-[#373e47] rounded-full animate-pulse"></div>
              <div className="h-8 w-8 bg-[#373e47] rounded-full animate-pulse"></div>
              <div className="h-8 w-8 bg-[#373e47] rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="flex gap-10">
            {/* Main content skeleton */}
            <div className="xl:max-w-[calc(100%-224px)] flex flex-col gap-y-5 w-full">
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 w-full bg-gradient-to-r from-[#2d333b] to-[#373e47] rounded animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-[#2d333b] rounded animate-pulse"></div>
                    <div className="h-4 w-4/6 bg-[#2d333b] rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar skeleton */}
            <div className="hidden xl:flex flex-col gap-5 max-w-56">
              <div className="flex flex-wrap gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-6 w-16 bg-[#373e47] rounded animate-pulse"></div>
                ))}
              </div>
              <div className="h-64 w-full bg-gradient-to-b from-[#2d333b] via-[#373e47] to-[#2d333b] rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
