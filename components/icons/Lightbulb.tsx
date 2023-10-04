import * as React from 'react'
const SVGComponent = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    fill="#F2FF66"
    width="800px"
    height="800px"
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>{'lightbulb-line'}</title>
    <path
      d="M18,2.25a11,11,0,0,0-11,11,10.68,10.68,0,0,0,1,4.63,16.36,16.36,0,0,0,1.12,1.78,17,17,0,0,1,2,3.47,16.19,16.19,0,0,1,.59,4h2A18.17,18.17,0,0,0,13,22.44a18.46,18.46,0,0,0-2.22-3.92,15.79,15.79,0,0,1-1-1.54A8.64,8.64,0,0,1,9,13.23a9,9,0,0,1,18.07,0A8.64,8.64,0,0,1,26.21,17a15.79,15.79,0,0,1-1,1.54A18.46,18.46,0,0,0,23,22.44a18.17,18.17,0,0,0-.71,4.71h2a16.19,16.19,0,0,1,.59-4,17,17,0,0,1,2-3.47A16.31,16.31,0,0,0,28,17.86a10.68,10.68,0,0,0,1-4.63A11,11,0,0,0,18,2.25Z"
      className="clr-i-outline clr-i-outline-path-1"
    />
    <path
      d="M18.63,15.51a.8.8,0,0,0-1.13,0l-3,3,2.86,3.13v5.54H19V21l-2.24-2.45,1.89-1.89A.8.8,0,0,0,18.63,15.51Z"
      className="clr-i-outline clr-i-outline-path-2"
    />
    <path
      d="M23.86,29.15H12.11a.8.8,0,1,0,0,1.6H23.86a.8.8,0,0,0,0-1.6Z"
      className="clr-i-outline clr-i-outline-path-3"
    />
    <path
      d="M22,32.15H14a.8.8,0,1,0,0,1.6H22a.8.8,0,1,0,0-1.6Z"
      className="clr-i-outline clr-i-outline-path-4"
    />
    <path
      d="M17.32,10.89l-2.73,2.73a.8.8,0,0,0,1.13,1.13L18.45,12a.8.8,0,1,0-1.13-1.13Z"
      className="clr-i-outline clr-i-outline-path-5"
    />
    <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </svg>
)
export default SVGComponent
