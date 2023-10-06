import * as React from 'react'
const SVGComponent = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      data-testid="geist-icon"
      fill="none"
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <path
        fillRule="evenodd"
        stroke="#00618A"
        clipRule="evenodd"
        d="M12 2L2 19.7778H22L12 2Z"
        strokeWidth="1.5"
      />
    </svg>
  )
}
export default SVGComponent
