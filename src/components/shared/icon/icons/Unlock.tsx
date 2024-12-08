import { type FC } from "react";
import { IconProps } from "../types";

export const Unlock: FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g id="Component 1">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.1992 55.7598H18.7995C15.8823 55.7598 13.5195 53.397 13.5195 50.4798V29.36C13.5195 26.4429 15.8823 24.0801 18.7995 24.0801H45.1992C48.1164 24.0801 50.4792 26.4429 50.4792 29.36V50.4798C50.4792 53.397 48.1164 55.7598 45.1992 55.7598Z"
          fill="#0C1726"
          stroke="#0C1726"
          strokeWidth="3.62707"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M21.4395 23.9033V18.6234C21.4395 12.7917 26.1676 8.06348 31.9994 8.06348C36.5969 8.06348 40.5085 11.0021 41.9583 15.1034"
          stroke="#0C1726"
          strokeWidth="3.47264"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M31.9944 38.5996C31.2658 38.5996 30.6744 39.191 30.6797 39.9196C30.6797 40.6482 31.2711 41.2396 31.9997 41.2396C32.7283 41.2396 33.3197 40.6482 33.3197 39.9196C33.3197 39.191 32.7283 38.5996 31.9944 38.5996Z"
          stroke="white"
          strokeWidth="3.71247"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
