import React, { SVGProps } from 'react'

const Success = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#62D26E" />
      <path
        d="m22.97 10.97 1.06 1.06-9.75 9.75a.751.751 0 0 1-.99.063l-.07-.063-5.25-5.25 1.06-1.06 4.72 4.719 9.22-9.22z"
        fill="#FFF"
      />
    </g>
  </svg>
)

export default Success
