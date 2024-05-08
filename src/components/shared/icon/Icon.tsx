import { memo, type FC } from "react";

import { LogoIcon, ArrowIcon, DiamondIcon } from "./icons";
import { IconType } from "./icon-types";

type IconProps = {
  icon: IconType;
  className?: string;
};

const Icon: FC<IconProps> = ({ icon, className }) => {
  switch (icon) {
    case IconType.LOGO:
      return <LogoIcon />;
    case IconType.ARROW:
      return <ArrowIcon />;
    case IconType.DIAMOND:
      return <DiamondIcon />;
    default:
      throw new Error("Invalid icon type");
  }
};

export default memo(Icon);
