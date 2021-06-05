import { forwardRef } from 'react';

interface Props {
  width?: number;
  height?: number;
  viewBox?: string;
  onClick?: () => void;
}

export const Menu = forwardRef<SVGSVGElement, Props>(({
  width = 20,
  height = 20,
  viewBox = '0 0 20 20',
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
      d="M2.5 10H17.5"
      stroke="#F5F5F5"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round" />
    <path
      d="M2.5 5H17.5"
      stroke="#F5F5F5"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round" />
    <path
      d="M2.5 15H17.5"
      stroke="#F5F5F5"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round" />
  </svg>
));

Menu.displayName = 'Menu';
