import { type FC } from "react";
import { Icon, IconType } from "../icon";
import { Carousel } from "@/components/shared";
import classNames from "classnames";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { useTranslations } from "next-intl";

const SOCIAL_MEDIA = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
  },

  {
    name: "LINKEDIN",
    url: "https://linkedin.com/",
  },
  {
    name: "tiktok",
    url: "https://www.tiktok.com/",
  },
];

type SocialMediaProps = {
  className?: string;
};

export const SocialMedia: FC<SocialMediaProps> = ({ className }) => {
  return (
    <div className={classNames(className)}>
      <FadeIn>
        <SocialMediaHeader />
      </FadeIn>
      <ul className="mt-[88px]">
        {SOCIAL_MEDIA.map((media) => (
          <FadeIn>
            <li
              key={media.name}
              className="group flex h-[90px] max-h-[90px] items-center border-x border-t border-[#35353C] transition-all duration-150 ease-in-out last-of-type:border-b hover:bg-primary lg:h-[200px] lg:max-h-[200px]"
            >
              <div className="h-full w-full bg-transparent">
                <div className="container flex h-full w-full items-center justify-between transition-all duration-150 ease-in-out group-hover:hidden">
                  <div className="text-xl uppercase leading-[20px] lg:text-[40px] lg:leading-[90px]">
                    {media.name}
                  </div>
                  <Icon
                    icon={IconType.ARROW}
                    className="h-[40px] w-[40px] text-primary"
                  />
                </div>
                <div className="hidden h-full w-full overflow-hidden transition-all duration-150 ease-in-out group-hover:flex group-hover:items-center">
                  <Carousel
                    options={{
                      autoplayOptions: {
                        delay: 1000,
                        playOnInit: true,
                      },
                    }}
                  >
                    {Array.from({ length: 10 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex h-full w-full items-center pr-5 lg:pr-0"
                      >
                        <div className="flex h-full w-full max-w-[295px] items-center justify-between">
                          <div className="text-xl uppercase leading-[20px] lg:text-[36px] lg:leading-[20px]">
                            {media.name}
                          </div>
                          <Icon
                            icon={IconType.ARROW}
                            className="h-[24px] w-[24px] text-white lg:h-[34px] lg:min-h-[34px] lg:w-[34px] lg:min-w-[34px]"
                          />
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
};

const SocialMediaHeader: FC = () => {
  const t = useTranslations("Shared");

  return (
    <div className="container text-center">
      <p className="category-text">04- SOCIAL MEDIA</p>
      <p className="mt-[18px] text-[24px] leading-[1.4] tracking-[0.02em] md:mt-[21px] md:text-[32px] lg:mt-[24px] lg:text-[48px]">
        {t("Social media-title-1")}
      </p>
    </div>
  );
};
