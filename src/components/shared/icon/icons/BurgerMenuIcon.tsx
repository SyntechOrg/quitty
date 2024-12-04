import { type FC } from "react";
import { IconProps } from "../types";

export const BurgerMenuIcon: FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="22"
      height="10"
      viewBox="0 0 22 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g id="Hamburger">
        <rect id="Rectangle 5" y="8" width="17" height="2" fill="#0C1726" />
        <rect id="Rectangle 6" width="22" height="2" fill="#0C1726" />
      </g>
    </svg>
  );
};
