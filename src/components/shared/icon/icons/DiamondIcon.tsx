import { type FC } from 'react';
import { IconProps } from '../types';

export const DiamondIcon: FC<IconProps> = (props) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 10C3.84058 7.89855 2.10145 6.15942 0 5C2.10145 3.84058 3.84058 2.10145 5 0C6.15942 2.10145 7.89855 3.84058 10 5C7.89855 6.15942 6.15942 7.89855 5 10Z"
        fill="#0000FF"
      />
    </svg>
  );
};
