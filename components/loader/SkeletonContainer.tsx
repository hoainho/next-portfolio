import clsx from "clsx"

type CardLoadingProp = {
  cardKey?: number,
  flex?: boolean,
}

const FeaturedLoading = () => {
  return (
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
  )
}

const CardLoading = ({
  cardKey,
  flex,
}: CardLoadingProp) => {
  return (
    <div className={`flex flex-col ${flex ? 'md:flex-row' : 'md:flex-col'} gap-3`} key={cardKey}>
      <div className={`${flex ? ' w-1/3' : 'w-full h-40'} h-28 bg-[#2d333b] rounded animate-pulse`}></div>
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
  )
}

const PlatformLoading = () => {
  return (
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
  )
}

export {
  FeaturedLoading,
  CardLoading,
  PlatformLoading,
}
