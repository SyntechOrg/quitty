import { type FC } from "react";
import { ProjectInformations } from "./ProjectInformations";
import { Image } from "../shared/image/Image";

import { Button, Icon, IconType } from "../shared";

type ProjectsBannerProps = {
  heroText: string;
  heroImage: string;
  heroInsideImage: string;
  services: string[];
  productType: string[];
  expertise: string[];
  release: string[];
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
}) => {
  return (
    <div className="min-h-screen relative bg-background">
      <div className="absolute inset-0 min-h-screen h-full w-full">
        <Image
          src={heroImage}
          alt="Banner Image"
          wrapperClassNames="w-full h-full"
          fill
        />
      </div>
      <div className="flex flex-col justify-between h-full w-full min-h-screen relative z-[2]">
        <div className="container flex lg:flex-row flex-col gap-y-5 lg:gap-y-0 items-center inset-x-0  mt-[120px] lg:mt-[187px] gap-x-5 justify-between">
          <div>
            <h1 className="lg:text-[45px] text-[24px] leading-[34px] lg:leading-[62px] text-white w-full max-w-[522px]">
              {heroText}
            </h1>
            <div className="flex mt-[25px] lg:mt-[50px] group w-max">
              <Button to="/" variant="secondary">
                See Live
              </Button>
              <Button to="/" variant="secondary">
                <Icon icon={IconType.ARROW} />
              </Button>
            </div>
          </div>
          <div className="relative min-h-[231px] lg:h-[463px] w-full max-w-[680px] mb-5 lg:mb-0">
            <Image
              wrapperClassNames="w-full h-full overflow-hidden rounded-[30px]"
              className="md:object-cover object-contain min-h-[231px]"
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
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t z-[1] from-black/80 h-[440px]"></div>
    </div>
  );
};
