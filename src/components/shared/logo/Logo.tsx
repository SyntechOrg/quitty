import { type FC } from "react";
import { Icon, IconType } from "../icon";
import Link from "next/link";
import classNames from "classnames";

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className="w-full max-w-[130px] lg:max-w-[140px]">
      <Icon icon={IconType.LOGO} className={classNames("w-full", className)} />
    </Link>
  );
};
