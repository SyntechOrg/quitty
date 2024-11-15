import classNames from "classnames";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode, FC } from "react";

import { Icon, IconType } from "@/components/shared";

const variantClasses = {
  contact:
    "bg-text text-white rounded-[16px] h-10 px-[16px] text-[16px] leading-[24px] text-center hover:text-background hover:bg-primary",
  primary:
    "bg-[rgba(0,201,165,0.10)] text-white leading-[20px] text-[20px] h-[64px] px-8 rounded-[100px] bg-blur-[10px] border border-primary hover:bg-primary",
};

type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof variantClasses;
  className?: string;
  onClick?: () => void;
  to?: string;
  icon?: IconType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  to,
  icon,
  disabled,
  ...props
}) => {
  const buttonClassNames = classNames(
    "flex items-center justify-center cursor-pointer transition-all duration-150 ease-in-out gap-x-2 disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    className,
  );

  if (to) {
    return (
      <Link href={to} className="group flex items-center gap-x-2.5">
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
