import { type FC } from "react";
import { IconProps } from "../types";

export const HeroStar: FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="368"
      height="368"
      viewBox="0 0 368 368"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M183.999 367.822C141.214 290.548 77.5694 226.785 0.176758 184C77.4508 141.333 141.214 77.4518 183.999 0.177734C226.784 77.4518 290.429 141.215 367.821 184C290.429 226.785 226.784 290.667 183.999 367.822Z"
        fill="#0000FF"
      />
    </svg>
  );
};
