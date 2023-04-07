import React, { SVGProps } from 'react'

const Spinner24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props} color={props.color ?? '#18181B'}>
    <path
      d="M12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5c-5.72 0-10.373-4.575-10.497-10.266L1.5 12H3a9 9 0 1 0 9.229-8.997L12 3V1.5z"
      fill="currentcolor"
      fillRule="evenodd"
    />
  </svg>
)

export default Spinner24
