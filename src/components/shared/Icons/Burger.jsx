import * as React from 'react'
const SvgBurger = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 32 32"
		{...props}
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2.353}
			d="M4 16h24M4 8h24M4 24h24"
		/>
	</svg>
)
export default SvgBurger
