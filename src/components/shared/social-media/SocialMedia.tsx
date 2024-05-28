import { type FC } from "react";
import { Icon, IconType } from "../icon";
import { Carousel } from "../carousel/Carousel";
import classNames from "classnames";

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
      <div className="container text-center">
        <p className="category-text">
          04- SOCIAL MEDIA
        </p>
        <p className="lg:text-[48px] md:text-[32px] text-[24px] leading-[1.4] tracking-[0.02em] lg:mt-[24px] md:mt-[21px] mt-[18px]">
          Follow us on social media
        </p>
      </div>
      <ul className="mt-[88px]">
        {SOCIAL_MEDIA.map((media) => (
          <li
            key={media.name}
            className="border-t flex items-center border-x border-[#35353C] last-of-type:border-b group hover:bg-primary transition-all duration-150 ease-in-out lg:max-h-[200px] h-[90px] max-h-[90px] lg:h-[200px]"
          >
            <div className="bg-transparent w-full h-full">
              <div className="flex items-center justify-between group-hover:hidden w-full h-full container duration-150 ease-in-out transition-all">
                <div className="text-xl lg:text-[40px] uppercase leading-[20px] lg:leading-[90px]">
                  {media.name}
                </div>
                <Icon
                  icon={IconType.ARROW}
                  className="w-[40px] h-[40px] text-primary"
                />
              </div>
              <div className="hidden group-hover:flex overflow-hidden transition-all duration-150 ease-in-out w-full h-full group-hover:items-center">
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
                      className="flex items-center w-full h-full pr-5 lg:pr-0"
                    >
                      <div className="flex items-center justify-between max-w-[295px] w-full h-full">
                        {/* //INFO: left on purpose this font size here, it looks better */}
                        <div className="text-xl leading-[20px] lg:leading-[20px] lg:text-[36px] uppercase">
                          {media.name}
                        </div>
                        <Icon
                          icon={IconType.ARROW}
                          className="w-[24px] h-[24px] lg:w-[34px] lg:h-[34px] lg:min-h-[34px] lg:min-w-[34px] text-white"
                        />
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
