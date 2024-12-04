import { type FC } from "react";
import { IconProps } from "../types";

export const CloseIcon: FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M13 1L1 13"
        stroke="#0C1726"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 13L1 1"
        stroke="#0C1726"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
