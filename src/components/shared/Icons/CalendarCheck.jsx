import * as React from 'react'
const SvgCalendarCheck = (props) => (
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
			d="M28 13.333H4m24 3.334v-4.933c0-2.24 0-3.36-.436-4.216a3.991 3.991 0 0 0-1.748-1.748c-.856-.436-1.976-.436-4.216-.436H10.4c-2.24 0-3.36 0-4.216.436a3.991 3.991 0 0 0-1.748 1.748C4 8.374 4 9.494 4 11.734v11.2c0 2.24 0 3.36.436 4.216a3.991 3.991 0 0 0 1.748 1.748c.856.436 1.976.436 4.216.436H16m5.333-26.667V8M10.667 2.667V8m8.666 17.333L22 28l6-6"
		/>
	</svg>
)
export default SvgCalendarCheck
