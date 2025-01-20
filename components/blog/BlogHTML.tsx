'use client';

import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import { FaRegCopy } from "react-icons/fa6";

type BlogHTMLProps = {
	content: string;
};

const BlogHTML = ({ content }: BlogHTMLProps) => {
	console.log(content)
	useEffect(() => {
		hljs.highlightAll();

		const preBlocks = document.querySelectorAll('.wp-block-code') as NodeListOf<HTMLElement>

		preBlocks.forEach((preBlock) => {
			const codeBlock = preBlock.querySelector('code')

			if (codeBlock && !codeBlock.querySelector('.copy-icon-container')) {
				const container = document.createElement("div");
				container.className = "copy-icon-container";
				container.style.display = 'flex'
				container.style.width = '100%';
				container.style.justifyContent = 'flex-end'

				codeBlock.appendChild(container);

				const CopyIcon = () => {
					const handleCopy = () => {
						const code = codeBlock.textContent;
						console.log(code)
						if (code) {
							const containerNotifi = document.createElement("div");
							containerNotifi.className = 'notifi-container'
							containerNotifi.style.position = 'absolute'
							containerNotifi.style.top = '0'
							containerNotifi.style.right = '0'
							containerNotifi.innerText = 'Copied'

							// navigator.clipboard.writeText(code).then(result => {
							// 	const containerNotifi = document.createElement("div");
							// 	containerNotifi.className = 'notifi-container'
							// 	containerNotifi.style.position = 'absolute'
							// 	containerNotifi.style.top = '0'
							// 	container.style.right = '0'
							// })
						}
					}
					return (
						<FaRegCopy
							className="copy-icon w-14 text-xl relative"
							style={{
								width: '50px'
							}}
							onClick={handleCopy}
						/>
					)
				}
				ReactDOM.render(<CopyIcon />, container);
			}
		})
	}, [content]);

	return (
		<div className='w-full flex gap-x-5 relative overflow-hidden'>
			<div
				className='blog-html w-full flex flex-col gap-y-5 flex-wrap'
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
};

export default BlogHTML;
