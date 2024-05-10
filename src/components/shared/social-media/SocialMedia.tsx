import { type FC } from "react";
import { Icon, IconType } from "../icon";
import { Carousel } from "../carousel/Carousel";

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

type SocialMediaProps = {};

export const SocialMedia: FC<SocialMediaProps> = () => {
  return (
    <div>
      <div className="container text-center">
        <p className="text-base text-primary mb-[18px]">04- SOCIAL MEDIA</p>
        <p className="text-[50px] text-white">Follow us on social media</p>
      </div>
      <ul className="mt-[88px]">
        {SOCIAL_MEDIA.map((media) => (
          <li
            key={media.name}
            className="border-t flex items-center border-x border-[#35353C] last-of-type:border-b group hover:bg-primary transition-all duration-150 ease-in-out max-h-[200px] h-[200px]"
          >
            <div className="bg-transparent w-full h-full">
              <div className="flex items-center justify-between group-hover:hidden w-full h-full container duration-150 ease-in-out transition-all">
                <div className="text-[40px] uppercase">{media.name}</div>
                <Icon
                  icon={IconType.ARROW}
                  className="w-[40px] h-[40px] text-primary"
                />
              </div>
              <div className="hidden group-hover:flex overflow-hidden transition-all duration-150 ease-in-out w-full h-full group-hover:items-center">
                <Carousel
                  options={{
                    autoplayOptions: {
                      delay: 2000,
                      playOnInit: true,
                    },
                  }}
                >
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center w-full h-full pr-5 lg:pr-0"
                    >
                      <div className="flex items-center justify-between max-w-[295px] w-full h-full">
                        {/* //INFO: left on purpose this font size here, it looks better */}
                        <div className="text-[24px] lg:text-[36px] uppercase">
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
