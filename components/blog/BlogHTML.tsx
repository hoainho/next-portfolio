"use client";

import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import 'highlight.js/styles/github-dark.css';
import { CopyBlock, dracula } from 'react-code-blocks';

type BlogHTMLProps = {
	content: string;
};

const BlogHTML = ({ content }: BlogHTMLProps) => {
	console.log('🌈 HTML Content', content);
	
	useEffect(() => {
		const preBlocks = document.querySelectorAll('.wp-block-code') as NodeListOf<HTMLElement>;

		preBlocks.forEach((preBlock) => {
			preBlock.style.position = 'relative';
			const codeBlock = preBlock.querySelector('code');

			if (codeBlock) {
				const textBlock = codeBlock.textContent;

				if (textBlock) {
					const CopyBlockComponent = (
						<CopyBlock
							text={textBlock}
							theme={dracula}
							language="jsx"
							codeBlock
							showLineNumbers={false}
						/>
					);
					ReactDOM.render(CopyBlockComponent, preBlock);
				}
			}
		});
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
