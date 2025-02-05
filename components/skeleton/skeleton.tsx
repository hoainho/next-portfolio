import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type SkeletonLoaderProps = {
	color?: string;
	highlightColor?: string;
	count: number
	className?: string,
	width?: string | number,
	height?: string | number
};

const SkeletonLoader = ({
	color = '#202020',
	highlightColor = '#444',
	count,
	className,
	width = '100%',
	height,
}: SkeletonLoaderProps) => {
	return (
		<SkeletonTheme baseColor={color} highlightColor={highlightColor}>
			<p>
				<Skeleton
					width={width}
					height={height}
					count={count}
					className={className}
				/>
			</p>
		</SkeletonTheme>
	);
}
export default SkeletonLoader;