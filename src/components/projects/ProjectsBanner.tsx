import { type FC } from "react";
import { ProjectInformations } from "./ProjectInformations";
import { Image } from "../shared/image/Image";
import bannerImage from "@/assets/images/projects/project-1/banner.png";

type ProjectsBannerProps = {};

export const ProjectsBanner: FC<ProjectsBannerProps> = () => {
  return (
    <div className="h-screen relative bg-background">
      <Image src={bannerImage} alt="Banner Image" />
      <ProjectInformations />
    </div>
  );
};
