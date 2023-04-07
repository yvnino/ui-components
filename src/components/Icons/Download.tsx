import React, { SVGProps } from 'react'

const Download = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props} color={props.color ?? '#18181B'}>
    <path
      d="m19.28 11.78-1.06-1.06-5.47 5.469V1.5h-1.5v14.689l-5.47-5.47-1.06 1.061 6.75 6.75a.75.75 0 0 0 .99.063l.07-.063 6.75-6.75zM4.5 21h15v1.5h-15V21z"
      fill="#currentcolor"
      fillRule="evenodd"
    />
  </svg>
)

export default Download
