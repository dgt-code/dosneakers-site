import { forwardRef } from 'react';

interface Props {
  width?: number;
  height?: number;
  viewBox?: string;
  onClick?: () => void;
}

export const X = forwardRef<SVGSVGElement, Props>(({
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  onClick
}, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={viewBox}
    onClick={onClick}
    fill="none">
    <path
      d="M18 6L6 18"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round" />
    <path
      d="M6 6L18 18"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round" />
  </svg>
));

X.displayName = 'X';
