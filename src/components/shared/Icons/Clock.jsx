import * as React from 'react'
const SvgClock = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 32 32"
		{...props}
	>
		<path
			fill="currentColor"
			d="M16 4C8.268 4 2 10.268 2 18s6.268 14 14 14 14-6.268 14-14S23.732 4 16 4zm0 25.25C9.787 29.25 4.75 24.213 4.75 18S9.787 6.75 16 6.75 27.25 11.787 27.25 18 22.213 29.25 16 29.25zM29.212 8.974a6 6 0 0 0-9.959-6.643 16.011 16.011 0 0 1 9.96 6.643zM12.748 2.331a6 6 0 0 0-9.96 6.643 16.008 16.008 0 0 1 9.96-6.643z"
		/>
		<path fill="currentColor" d="M16 18v-8h-2v10h8v-2z" />
	</svg>
)
export default SvgClock
