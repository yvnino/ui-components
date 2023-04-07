import React, { SVGProps } from 'react'

const SearchGlass: React.FC = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props} color={props.color ?? '#18181B'}>
    <path
      d="M10.5 2.25a8.25 8.25 0 0 1 6.34 13.529l5.44 5.44-1.06 1.061-5.441-5.44A8.25 8.25 0 1 1 10.5 2.25zm0 1.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5z"
      fill="#currentcolor"
      fillRule="evenodd"
    />
  </svg>
)

export default SearchGlass
