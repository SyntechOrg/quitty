import { ReactNode, type FC } from "react";
import { ProjectInformations } from "./ProjectInformations";
import { Image } from "../shared/image/Image";

import { Button, Icon, IconType } from "../shared";
import { FadeIn } from "../fade-in/FadeIn";
import { useTranslations } from "next-intl";

type ProjectsBannerProps = {
  heroText: ReactNode;
  heroImage: string;
  heroInsideImage: string;
  services: string[];
  productType: string[];
  expertise: string[];
  release: string[];
  liveUrl: string;
  className?: string;
};

export const ProjectsBanner: FC<ProjectsBannerProps> = ({
  heroText,
  heroImage,
  heroInsideImage,
  expertise,
  productType,
  release,
  services,
  liveUrl,
}) => {
  const t = useTranslations("Projects");

  return (
    <FadeIn className="relative min-h-screen bg-background">
      <div className="absolute inset-0 h-full min-h-screen w-full">
        <Image
          src={heroImage}
          alt="Banner Image"
          wrapperClassNames="w-full h-full"
          fill
          loading="eager"
        />
      </div>
      <div className="relative z-[2] flex h-full min-h-screen w-full flex-col justify-between">
        <div className="container inset-x-0 mt-[120px] flex flex-col items-center justify-between gap-x-5  gap-y-5 lg:mt-[187px] lg:flex-row lg:gap-y-0">
          <div>
            <h1 className="w-full max-w-[522px] text-[24px] leading-[34px] text-white lg:text-[45px] lg:leading-[62px]">
              {heroText}
            </h1>
            {liveUrl && (
              <div className="group mt-[25px] flex w-max lg:mt-[50px]">
                <Button to={liveUrl} variant="secondary">
                  {t("SeeLive")}
                </Button>
                <Button to={liveUrl} variant="secondary">
                  <Icon icon={IconType.ARROW} />
                </Button>
              </div>
            )}
          </div>
          <div className="relative mb-5 h-[90vw] max-h-[400px] min-h-[231px] w-full max-w-[680px] overflow-hidden rounded-[30px] lg:mb-0 lg:h-[463px]">
            <Image
              wrapperClassNames="w-full h-full"
              className="w-full object-contain object-center"
              src={heroInsideImage}
              alt="Banner Image"
              fill
            />
          </div>
        </div>
        <ProjectInformations
          expertise={expertise}
          productType={productType}
          release={release}
          services={services}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-[1] h-[440px] bg-gradient-to-t from-black/80"></div>
    </FadeIn>
  );
};
