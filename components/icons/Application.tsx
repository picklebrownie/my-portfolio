import * as React from "react";
const SVGComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="#7732FF"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M224,56.00586v144a7.99977,7.99977,0,0,1-8,8H40a7.99977,7.99977,0,0,1-8-8v-144a7.99977,7.99977,0,0,1,8-8H216A7.99977,7.99977,0,0,1,224,56.00586Z"
      opacity={0.2}
    />
    <path d="M216,40.00586H40a16.01833,16.01833,0,0,0-16,16v144a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16v-144A16.01833,16.01833,0,0,0,216,40.00586Zm0,160H40v-144H216l.00977,143.99951Zm-136-116a12,12,0,1,1-12-12A12,12,0,0,1,80,84.00586Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,120,84.00586Z" />
  </svg>
);
export default SVGComponent;
