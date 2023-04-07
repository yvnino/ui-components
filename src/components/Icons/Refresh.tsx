import React, { SVGProps } from 'react'

const Refresh = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props} color={props.color ?? '#18181B'}>
    <path
      d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75c-5.308 0-9.625-4.241-9.747-9.52L2.25 12h1.5a8.25 8.25 0 1 0 1.334-4.5H9V9H3.75a.75.75 0 0 1-.745-.663L3 8.25V3h1.5v2.769A9.742 9.742 0 0 1 12 2.25z"
      fill="currentcolor"
      fillRule="evenodd"
    />
  </svg>
)

export default Refresh
