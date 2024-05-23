import { memo, type FC } from "react";

import { LogoIcon, ArrowIcon, DiamondIcon, LogoBackgroundIcon } from "./icons";
import { IconType } from "./icon-types";

type IconProps = {
  icon: IconType;
  className?: string;
};

const Icon: FC<IconProps> = ({ icon, ...props }) => {
  switch (icon) {
    case IconType.LOGO:
      return <LogoIcon {...props} />;
    case IconType.ARROW:
      return <ArrowIcon {...props} />;
    case IconType.DIAMOND:
      return <DiamondIcon {...props} />;
    case IconType.LOGO_BACKGROUND:
      return <LogoBackgroundIcon {...props} />;
    default:
      throw new Error("Invalid icon type");
  }
};

export default memo(Icon);
