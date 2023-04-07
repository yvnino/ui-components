import React, { SVGProps } from 'react'

const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg" {...props} color={props.color ?? '#18181B'}>
    <g fill="none" fillRule="evenodd">
      <rect width={32} height={32} rx={2} />
      <path
        d="m21.47 9.47 1.06 1.06L17.06 16l5.47 5.47-1.06 1.06L16 17.06l-5.47 5.47-1.06-1.06L14.939 16l-5.47-5.47 1.061-1.06L16 14.939l5.47-5.47z"
        fill="currentcolor"
        fillRule="evenodd"
      />
    </g>
  </svg>
)

export default Close
