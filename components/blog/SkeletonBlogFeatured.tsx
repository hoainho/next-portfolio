import React from "react";
import SkeletonLoader from "../skeleton/skeleton";

type SkeletonBlogFeaturedProps = {
	isFullWidth: boolean
}

const SkeletonBlogFeatured = ({ isFullWidth }: SkeletonBlogFeaturedProps) => {
	return (
		!isFullWidth ? (
			<div className="w-full h-full">
				<SkeletonLoader count={1} height={338} />
				<SkeletonLoader count={1} height={10} width={100} />
				<SkeletonLoader count={3} height={20} />
				<SkeletonLoader count={4} height={10} />
				<SkeletonLoader count={1} height={10} width={220} />
			</div>
		) : (
			<React.Fragment>
				<SkeletonLoader count={1} height={300} />
			</React.Fragment>
		)
	)
}
export default SkeletonBlogFeatured;