import classNames from "classnames";
import Link from "next/link";
import React, {ButtonHTMLAttributes, ReactNode, type FC} from "react";
import {Icon, IconType} from "@/components/shared";

const variantClasses = {
  primary: "border border-primary text-white group-hover:bg-primary hover:bg-primary hover:text-white",
  secondary: "bg-primary text-white",
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
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
                                          children,
                                          className,
                                          size = "md",
                                          variant = "primary",
                                          to,
                                          ...props
                                        }) => {
  const buttonClassNames = classNames([
    "rounded-full flex items-center justify-center cursor-pointer transition-all duration-150 ease-in-out",
    sizeClasses[size],
    variantClasses[variant],
    className,
  ]);

  if (to) {
    return (
      <div className="group flex items-center">
        <Link href={to} className={buttonClassNames}>
          {children}
        </Link>
        <Link href={to} className={buttonClassNames}>
          <Icon icon={IconType.ARROW}/>
        </Link>
      </div>
    );
  }

  return (
    <button {...props} className={buttonClassNames}>
      {children}
    </button>
  );
};
