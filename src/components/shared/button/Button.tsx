import classNames from "classnames";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode, FC } from "react";

import { Icon, IconType } from "@/components/shared";

const variantClasses = {
  primary:
    "border border-primary text-white group-hover:bg-primary group-active:bg-primary/80 hover:text-white",
  secondary:
    "bg-primary text-white hover:bg-primary/80 active:bg-primary/50 border border-primary duration-200 group-hover:bg-primary/80 group-active:bg-primary/50 hover:text-white",
};

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-[25px] py-[18px] text-[15px] leading-[10px] max-h-[40px] lg:max-h-[48px]",
  lg: "px-6 py-3 text-lg",
};

type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  className?: string;
  onClick?: () => void;
  to?: string;
  icon?: IconType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  className,
  size = "md",
  variant = "primary",
  to,
  icon,
  disabled,
  ...props
}) => {
  const buttonClassNames = classNames(
    "rounded-full flex items-center justify-center cursor-pointer transition-all duration-150 ease-in-out gap-x-2 disabled:opacity-50 disabled:cursor-not-allowed",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  if (to) {
    return (
      <Link href={to} className="group flex items-center gap-x-2">
        <span className={buttonClassNames}>{children}</span>
        {icon && <Icon icon={icon as unknown as IconType} />}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      {...props}
      className={buttonClassNames}
    >
      {children}
      {icon && <Icon icon={icon} />}
    </button>
  );
};
