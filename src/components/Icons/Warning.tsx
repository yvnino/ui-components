import React, { SVGProps } from 'react'

const Warning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#FBC937" />
      <path
        d="M16 21.25a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 16 21.25zm.75-13.5V19h-1.5V7.75h1.5z"
        fill="#FFF"
      />
    </g>
  </svg>
)

export default Warning
