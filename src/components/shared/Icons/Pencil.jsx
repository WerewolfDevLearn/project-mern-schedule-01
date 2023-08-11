import * as React from 'react'
const SvgPencil = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 32 32"
		{...props}
	>
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2.6}
			d="m3.333 28.667 7.399-2.846c.473-.182.71-.273.931-.392.197-.106.384-.227.56-.364.198-.154.378-.333.736-.692l15.04-15.04A3.77 3.77 0 1 0 22.666 4L7.626 19.04c-.359.359-.538.538-.692.736a3.902 3.902 0 0 0-.364.561c-.119.221-.21.458-.392.931l-2.846 7.399zm0 0 2.744-7.135c.196-.511.295-.766.463-.883a.665.665 0 0 1 .505-.107c.201.038.395.232.782.619l3.012 3.012c.387.387.58.58.619.782a.665.665 0 0 1-.107.505c-.117.168-.372.267-.883.463l-7.135 2.744z"
		/>
	</svg>
)
export default SvgPencil
