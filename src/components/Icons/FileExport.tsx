import React, { SVGProps } from 'react'

const FileExport = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props} color={props.color ?? '#18181B'}>
    <path
      d="M8.262 1.499 15 1.5a1.5 1.5 0 0 1 1.496 1.388L16.5 3v9.75H15V3H9v4.5a1.5 1.5 0 0 1-1.356 1.493L7.5 9H3v12h12v-3.75h1.5V21a1.5 1.5 0 0 1-1.388 1.496L15 22.5H3a1.5 1.5 0 0 1-1.496-1.388L1.5 21V8.25l-.001-.018a.727.727 0 0 1 .14-.42l.08-.092 6-6a.734.734 0 0 1 .543-.221zm11.072 9.789 3.182 3.182a.75.75 0 0 1 .062.99l-.062.07-3.182 3.182-1.061-1.06 1.9-1.903-9.93.001v-1.5h9.93l-1.9-1.902 1.06-1.06zM7.5 4.06 4.06 7.5H7.5V4.06z"
      fill="currentcolor"
      fillRule="evenodd"
    />
  </svg>
)

export default FileExport
