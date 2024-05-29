import { type FC } from 'react';
import { IconProps } from '../types';

export const ArrowIcon: FC<IconProps> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.9063 5.09444L5.09374 12.907M12.9063 5.09444L12.9063 11.3445M12.9063 5.09444L6.65624 5.09445"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
