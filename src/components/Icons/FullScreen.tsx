import React, { SVGProps } from 'react'

const FullScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props} color={props.color ?? '#18181B'}>
    <path
      d="M20.25 3a.75.75 0 0 1 .745.663L21 3.75v4.5h-1.5V4.5h-3.75V3h4.5zM4.5 15.75v3.75h3.75V21h-4.5a.75.75 0 0 1-.745-.663L3 20.25v-4.5h1.5z"
      fill="#currentcolor"
      fillRule="evenodd"
    />
  </svg>
)

export default FullScreen
