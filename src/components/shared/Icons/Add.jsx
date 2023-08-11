import * as React from 'react'
const SvgAdd = (props) => (
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
			strokeWidth={2.667}
			d="M16 10.667v10.667M10.667 16h10.667m7.999 0c0 7.364-5.97 13.333-13.333 13.333S2.667 23.363 2.667 16C2.667 8.636 8.637 2.667 16 2.667S29.333 8.637 29.333 16z"
		/>
	</svg>
)
export default SvgAdd
