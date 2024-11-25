import { type FC, memo } from "react";

import {
  BurgerMenuIcon,
  CloseIcon,
  KleidungOutline,
  LebensmittelOutline,
  LogoIcon,
  LogoIconOnly,
  MoebelOutline,
  RestaurantOutline, SportOutline,
} from "./icons";
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
    case IconType.LOGO_ONLY:
      return <LogoIconOnly {...props} />;
    case IconType.MOEBEL_OUTLINE:
      return <MoebelOutline {...props} />;
    case IconType.LEBENSMITTEL_OUTLINE:
      return <LebensmittelOutline {...props} />;
    case IconType.KLEIDUNG_OUTLINE:
      return <KleidungOutline {...props} />;
    case IconType.RESTAURANT_OUTLINE:
      return <RestaurantOutline {...props} />;
    case IconType.SPORT_OUTLINE:
      return <SportOutline {...props} />;
    default:
      throw new Error("Invalid icon type");
  }
};

export default memo(Icon);
