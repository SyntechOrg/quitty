import { type FC } from "react";
import { Icon, IconType } from "../icon";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/">
      <Icon icon={IconType.LOGO} className={className} />
    </Link>
  );
};
