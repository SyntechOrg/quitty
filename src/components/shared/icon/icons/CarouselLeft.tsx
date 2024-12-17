import { type FC } from "react";
import { IconProps } from "../types";

export const CarouselLeft: FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="12"
      height="18"
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g id="Component 1">
        <path
          id="Vector"
          d="M1.78125 1.09375L10.2176 8.99963L1.78125 16.9055"
          stroke="#0C1726"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
