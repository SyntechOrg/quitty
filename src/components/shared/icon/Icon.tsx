import { type FC, memo } from "react";

import { LogoIcon } from "./icons";
import { IconType } from "./icon-types";

type IconProps = {
  icon: IconType;
  className?: string;
};

const Icon: FC<IconProps> = ({ icon, ...props }) => {
  switch (icon) {
    case IconType.LOGO:
      return <LogoIcon {...props} />;
    default:
      throw new Error("Invalid icon type");
  }
};

export default memo(Icon);
