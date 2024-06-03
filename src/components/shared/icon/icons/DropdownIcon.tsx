import { type FC } from "react";
import { IconProps } from "../types";

export const DropdownIcon: FC<IconProps> = (props) => {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.49837 13.1375V0.861328M6.49837 13.1375L1.58789 8.22704M6.49837 13.1375L11.4089 8.22704"
        stroke="white"
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
