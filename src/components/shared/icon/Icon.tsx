import { type FC, memo } from "react";

import {
  ArrowDiagonal,
  Bill,
  BillActive,
  BurgerMenuIcon,
  CarouselLeft,
  CarouselRight,
  ChineseCoin,
  ChineseCoinActive,
  CloseIcon,
  KleidungOutline,
  LebensmittelOutline,
  LogoIcon,
  LogoIconOnly,
  MoebelOutline,
  MoneyBag,
  MoneyBagActive,
  RestaurantOutline,
  Reward,
  RewardActive,
  SportOutline, Star,
  Unlock,
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
    case IconType.BILL:
      return <Bill {...props} />;
    case IconType.REWARD:
      return <Reward {...props} />;
    case IconType.CHINESE_COIN:
      return <ChineseCoin {...props} />;
    case IconType.MONEY_BAG:
      return <MoneyBag {...props} />;
    case IconType.BILL_ACTIVE:
      return <BillActive {...props} />;
    case IconType.REWARD_ACTIVE:
      return <RewardActive {...props} />;
    case IconType.CHINESE_COIN_ACTIVE:
      return <ChineseCoinActive {...props} />;
    case IconType.MONEY_BAG_ACTIVE:
      return <MoneyBagActive {...props} />;
    case IconType.ARROW_DIAGONAL:
      return <ArrowDiagonal {...props} />;
    case IconType.UNLOCK:
      return <Unlock {...props} />;
    case IconType.CAROUSEL_LEFT:
      return <CarouselLeft {...props} />;
    case IconType.CAROUSEL_RIGHT:
      return <CarouselRight {...props} />;
    case IconType.STAR:
      return <Star {...props} />;
    default:
      throw new Error("Invalid icon type");
  }
};

export default memo(Icon);
