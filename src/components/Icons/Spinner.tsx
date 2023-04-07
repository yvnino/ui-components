import React, { SVGProps } from 'react'

const Spinner = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg" {...props} color={props.color ?? '#18181B'}>
    <path
      d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14C8.372 30 2.17 23.9 2.003 16.313L2 16h2c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.525-5.209-11.834-11.695-11.996L16 4V2z"
      fill="currentcolor"
      fillRule="evenodd"
    />
  </svg>
)

export default Spinner
