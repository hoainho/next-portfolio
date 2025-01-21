
'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import { FaRegCopy } from "react-icons/fa6";

type BlogHTMLProps = {
	content: string;
};

const BlogHTML = ({ content }: BlogHTMLProps) => {

	useEffect(() => {
		hljs.highlightAll();

		const preBlocks = document.querySelectorAll('.wp-block-code') as NodeListOf<HTMLElement>

		preBlocks.forEach((preBlock) => {
			preBlock.style.position = 'relative'
			const codeBlock = preBlock.querySelector('code')

			if (codeBlock && !codeBlock.querySelector('.copy-icon-container')) {
				const container = document.createElement("div");
				container.className = "copy-icon-container";
				container.style.position = 'absolute'
				container.style.bottom = '35px'
				container.style.right = '10px'
				container.style.width = 'max-content'
				container.style.cursor = 'pointer'

				codeBlock.appendChild(container);

				const CopyIcon = () => {
					const handleCopy = async() => {
						const code = codeBlock.textContent;
						if (code) {
							await navigator.clipboard.writeText(code);
							const notification = document.createElement("div");
							notification.textContent = "Copied";
							notification.style.width = "50px";
							notification.style.position = "absolute";
							notification.style.bottom = "60px";
							notification.style.right = "20px";
							notification.style.background = "rgb(125 121 121)";
							notification.style.color = "#fff";
							notification.style.display = "flex";
							notification.style.alignItems = "center";
							notification.style.justifyContent = "center";
							notification.style.padding = "5px 10px";
							notification.style.borderRadius = "4px";
							notification.style.fontSize = "12px";
							notification.style.zIndex = "10";
							notification.style.whiteSpace = "nowrap";

							const parent = container.parentElement; 
							if (parent) {
								parent.appendChild(notification);
							}

							setTimeout(() => {
								notification.remove();
							}, 2000);
						}
					}
					return (
						<div className='relative'>
							<FaRegCopy
								className="copy-icon w-14 text-xl relative"
								onClick={handleCopy}
							/>
						</div>
					)
				}
				ReactDOM.render(<CopyIcon />, container,);
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
