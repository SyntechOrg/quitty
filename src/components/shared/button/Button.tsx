import classNames from "classnames";
import Link from "next/link";
import { ReactNode, type FC } from "react";

const variantClasses = {
  primary: "border border-primary text-white",
  secondary: "bg-secondary text-white",
};

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-[25px] py-[18px] text-[15px] leading-[10px] max-h-[48px]",
  lg: "px-6 py-3 text-lg",
};

type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  className?: string;
  onClick?: () => void;
  to?: string;
};

export const Button: FC<ButtonProps> = ({
  children,
  className,
  size = "md",
  variant = "primary",
  to,
  ...props
}) => {
  const buttonClassNames = classNames([
    "rounded-full flex items-center justify-center cursor-pointer",
    sizeClasses[size],
    variantClasses[variant],
    className,
  ]);

  if (to) {
    return (
      <Link href={to} {...props} className={buttonClassNames}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={buttonClassNames}>
      {children}
    </button>
  );
};
