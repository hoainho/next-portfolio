'use client'

import { useState } from "react";
import Button from "../buttons/Button"
import { FaLink } from "react-icons/fa";

type ButtonCopyProps = {
	slug: string,
}

const ButtonCopyURL = ({ slug }: ButtonCopyProps) => {
	const [isShowCopy, setIsShowCopy] = useState(false)

	const handelCopyLink = async () => {
		const url = `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/blog/${slug}`
		await navigator.clipboard.writeText(url);
		setIsShowCopy(true)

		setTimeout(() => {
			setIsShowCopy(false)
		}, 2000)
	}

	return (
		<div className="relative">
			{isShowCopy && (<span className="absolute bottom-9 -right-2.5 border z-10 p-2 rounded-xl bg-[#233b51] text-white">Copied!</span>)}
			<Button
				className="flex items-center border rounded-full gap-1 !px-2 !text-[#007bff]"
				onClick={() => handelCopyLink()}
			>
				<FaLink className="inline-block text-base" />
			</Button>
		</div>
	)
}
export default ButtonCopyURL;