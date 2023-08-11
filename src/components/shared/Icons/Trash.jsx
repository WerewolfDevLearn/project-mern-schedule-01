import * as React from 'react'
const SvgTrash = (props) => (
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
			d="M12 4h8M4 8h24M6.667 8l.801 12.018c.149 2.231.223 3.347.588 4.243a6 6 0 0 0 3.672 3.435c.919.304 2.037.304 4.273.304v0c2.236 0 3.354 0 4.273-.304a5.999 5.999 0 0 0 3.671-3.435c.365-.896.439-2.012.588-4.243L25.334 8"
		/>
	</svg>
)
export default SvgTrash
