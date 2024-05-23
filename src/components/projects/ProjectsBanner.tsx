import { type FC } from "react";
import { ProjectInformations } from "./ProjectInformations";
import { Image } from "../shared/image/Image";
import bannerImage from "@/assets/images/projects/project-1/banner.png";
import bannerInnerImage from "@/assets/images/projects/project-1/bannerInnerImage.png";
import { Button, Icon, IconType } from "../shared";
import Link from "next/link";

type ProjectsBannerProps = {
  className?: string;
};

export const ProjectsBanner: FC<ProjectsBannerProps> = () => {
  return (
    <div className="h-screen relative bg-background">
      <Image
        src={bannerImage}
        wrapperClassNames="absolute inset-0 h-screen z-[1]"
        alt="Banner Image"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t z-[2] from-black/80 h-[440px]"></div>
      <ProjectInformations />
      <div className="z-[10] container flex items-center absolute inset-x-0 top-[187px] gap-x-5 justify-between">
        <div>
          <h1 className="text-[45px] leading-[62px] text-white w-full max-w-[522px]">
            Brand identity, design & development for luxury cruise booking
          </h1>
          <Link href="/" className="flex mt-[50px]">
            <Button variant="secondary">See Live</Button>
            <Button variant="secondary">
              <Icon icon={IconType.ARROW} />
            </Button>
          </Link>
        </div>
        <div className="relative h-[463px] w-full max-w-[680px]">
          <Image src={bannerInnerImage} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};
