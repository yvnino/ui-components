import React, { SVGProps } from 'react'

const Error = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#DF2020" />
      <path
        d="m21.47 9.47 1.06 1.06L17.06 16l5.47 5.47-1.06 1.06L16 17.06l-5.47 5.47-1.06-1.06L14.94 16l-5.47-5.47 1.06-1.06L16 14.94l5.47-5.47z"
        fill="#FFF"
      />
    </g>
  </svg>
)

export default Error
