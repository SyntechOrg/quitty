import { type FC } from "react";
import { Icon, IconType } from "../icon";
import Link from "next/link";
import classNames from "classnames";

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/">
      <Icon
        icon={IconType.LOGO}
        className={classNames(
          "w-full max-w-[200px] lg:max-w-[240px]",
          className
        )}
      />
    </Link>
  );
};
