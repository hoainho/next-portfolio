import clsx from 'clsx'
import 'react-loading-skeleton/dist/skeleton.css'

type CardLoadingProp = {
  cardKey?: number,
  flex?: boolean,
  countItem?: number
  classNames?: string,
}

const CardLoading = ({
  cardKey,
  flex,
  countItem = 4,
  classNames,
}: CardLoadingProp) => {
  return (
    <div className={clsx(`flex flex-col ${flex ? 'md:flex-row' : 'md:flex-col'} gap-3`, classNames)} key={cardKey}>
      <div className={`${flex ? ' w-1/3' : 'w-full md:h-48'} h-28 bg-[#2d333b] rounded animate-pulse`}></div>
      <div className="w-full flex flex-col gap-4">
        {[...Array(countItem)].map((_, i) => (
          <div className={` ${flex ? 'w-4/5' : 'w-full'} h-3 bg-[#2d333b] rounded animate-pulse`} key={i}></div>
        ))}
      </div>
    </div>
  );
}

export default CardLoading;
