import { type FC, memo } from "react";

import {BurgerMenuIcon, CloseIcon, LogoIcon} from "./icons";
import { IconType } from "./icon-types";

type IconProps = {
  icon: IconType;
  className?: string;
};

const Icon: FC<IconProps> = ({ icon, ...props }) => {
  switch (icon) {
    case IconType.LOGO:
      return <LogoIcon {...props} />;
    case IconType.BURGER_MENU:
      return <BurgerMenuIcon {...props} />;
    case IconType.CLOSE:
      return <CloseIcon {...props} />;
    default:
      throw new Error("Invalid icon type");
  }
};

export default memo(Icon);
