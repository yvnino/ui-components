import React, { SVGProps } from 'react'

const VerticalActionsMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg" {...props} color={props.color ?? '#18181B'}>
    <g fill="none" fillRule="evenodd">
      <rect width={32} height={32} rx={2} />
      <path
        d="M10 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
        fill="#18181B"
      />
    </g>
  </svg>
)

export default VerticalActionsMenu
