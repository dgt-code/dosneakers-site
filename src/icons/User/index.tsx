import { forwardRef } from 'react';

interface Props {
  width?: number;
  height?: number;
  viewBox?: string;
  onClick?: () => void;
}

export const User = forwardRef<SVGSVGElement, Props>(({
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
      d="M12 12C14.6509 12 16.7999 9.85099 16.7999 7.20002C16.7999 4.54906 14.6509 2.40002 12 2.40002C9.34898 2.40002 7.19995 4.54906 7.19995 7.20002C7.19995 9.85099 9.34898 12 12 12Z"
      fill="#F5F5F5" />
    <path
      d="M19.2 19.8V17.8C19.2 16.7392 18.7891 15.7218 18.0577 14.9716C17.3263 14.2215 16.3343 13.8 15.3 13.8H7.49998C6.46563 13.8 5.47365 14.2215 4.74226 14.9716C4.01087 15.7218 3.59998 16.7392 3.59998 17.8V19.8"
      fill="#F5F5F5" />
    <path
      d="M3.59998 19.8C3.59998 19.4687 3.8686 19.2 4.19998 19.2H18.6C18.9313 19.2 19.2 19.4687 19.2 19.8V20.4C19.2 20.7314 18.9313 21 18.6 21H4.19998C3.86861 21 3.59998 20.7314 3.59998 20.4V19.8Z"
      fill="#F5F5F5" />
  </svg>
));

User.displayName = 'User';
