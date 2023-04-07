import React, { SVGProps } from 'react'

const Forward = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props} color={props.color ?? '#18181B'}>
    <path
      d="M14.25 4.653a.75.75 0 0 1 .494.185l7.11 6.223a.75.75 0 0 1 0 1.128l-7.11 6.223a.75.75 0 0 1-1.244-.565V15.01c-4.912.126-9.272 1.523-12 5.241.517-6.3 5.655-11.588 12-11.977v-2.87a.75.75 0 0 1 .75-.75zm5.971 6.971L15 7.055v2.629l-1.408.086c-3.824.235-7.204 2.522-9.079 5.77l-.091.162c2.399-1.351 5.311-2.053 8.677-2.18l.362-.012L15 13.47v2.724l5.221-4.57z"
      fill="#currentcolor"
      fillRule="evenodd"
    />
  </svg>
)

export default Forward
