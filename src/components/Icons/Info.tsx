import React, { SVGProps } from 'react'

const Info = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props} color={props.color ?? '#18181B'}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#2589F4" />
      <path
        d="M15.75 13a1 1 0 0 1 1 1v8.75h3v1.5h-7.5v-1.5h3V14.5H13V13h2.75zM16 7.75a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 16 7.75z"
        fill="#FFF"
      />
    </g>
  </svg>
)

export default Info