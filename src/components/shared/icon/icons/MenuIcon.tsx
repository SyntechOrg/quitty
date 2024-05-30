import { type FC } from "react";
import { IconProps } from "../types";

export const MenuIcon: FC<IconProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.875 7.12988H4.12501"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M19.875 12.0049H10.125"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M19.875 16.8787H7.125"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};
