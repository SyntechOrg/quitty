import {memo, type FC} from "react";

import {LogoIcon, ArrowIcon, DiamondIcon, LogoBackgroundIcon, QuittyLogoIcon, FacedripLogoIcon, EleUznachLogoIcon, SpandoekmanLogoIcon, ReputyLogoIcon, SoxeyLogoIcon, SyntechHeroText, HeroStar, HeroLeftArrow, HeroRightArrow, QonsultantLogoIcon} from "./icons";
import {IconType} from "./icon-types";

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
    case IconType.QUITTY_LOGO:
      return <QuittyLogoIcon {...props} />;
    case IconType.FACEDRIP_LOGO:
      return <FacedripLogoIcon {...props} />;
    case IconType.ELE_UZNACH_LOGO:
      return <EleUznachLogoIcon {...props} />;
    case IconType.SPANDOEKMAN_LOGO:
      return <SpandoekmanLogoIcon {...props} />;
    case IconType.REPUTY_LOGO:
      return <ReputyLogoIcon {...props} />;
    case IconType.SOXEY_LOGO:
      return <SoxeyLogoIcon {...props} />;
    case IconType.QONSULTANT_LOGO:
      return <QonsultantLogoIcon {...props} />;
    
    default:
      throw new Error("Invalid icon type");
  }
};

export default memo(Icon);
