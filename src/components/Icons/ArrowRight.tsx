import React, { SVGProps } from 'react'

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props} color={props.color ?? '#18181B'}>
    <path
      d="m9.155 4.72 6.75 6.75a.75.75 0 0 1 .063.99l-.063.07-6.75 6.75-1.06-1.06L14.314 12l-6.22-6.22 1.061-1.06z"
      fill="#currentcolor"
      fillRule="evenodd"
    />
  </svg>
)

export default ArrowRight
