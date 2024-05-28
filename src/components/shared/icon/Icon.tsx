import {memo, type FC} from "react";

import {LogoIcon, ArrowIcon, DiamondIcon, LogoBackgroundIcon} from "./icons";
import {IconType} from "./icon-types";
import {SyntechHeroText} from "@/components/shared/icon/icons/SyntechHeroText";
import {HeroStar} from "@/components/shared/icon/icons/HeroStar";
import {HeroLeftArrow} from "@/components/shared/icon/icons/HeroLeftArrow";
import {HeroRightArrow} from "@/components/shared/icon/icons/HeroRightArrow";

type IconProps = {
  icon: IconType;
  className?: string;
};

const Icon: FC<IconProps> = ({icon, ...props}) => {
  switch (icon) {
    case IconType.LOGO:
      return <LogoIcon {...props} />;
    case IconType.ARROW:
      return <ArrowIcon {...props} />;
    case IconType.DIAMOND:
      return <DiamondIcon {...props} />;
    case IconType.LOGO_BACKGROUND:
      return <LogoBackgroundIcon {...props} />;
    case IconType.SYNTECH_HERO_TEXT:
      return <SyntechHeroText {...props} />;
    case IconType.HERO_STAR:
      return <HeroStar {...props} />;
    case IconType.HERO_ARROW_LEFT:
      return <HeroLeftArrow {...props} />;
    case IconType.HERO_ARROW_RIGHT:
      return <HeroRightArrow {...props} />;
    default:
      throw new Error("Invalid icon type");
  }
};

export default memo(Icon);
