import React, {FC} from 'react';
import Image, {StaticImageData} from "next/image";
import {Icon, IconType} from "@/components/shared";

interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  year: string;
  href: string;
}

const ProjectCard: FC<ProjectCardProps> = ({image, title, year}) => {
  return (
    <div className="max-w-[560px] w-full rounded-[30px] border border-gray mx-auto overflow-clip">
      <div>
        <Image src={image} alt="project-image" className="w-full h-full rounded-[30px]"/>
      </div>
      <div className="flex justify-between px-6 py-4">
        <div className="flex items-center gap-1">
          <p className="md:text-[21px] leading-[2]">
            {title}
          </p>
          <Icon
            icon={IconType.ARROW}
            className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] text-primary"
          />
        </div>
        <p className="md:text-[21px] leading-[2]">
          {year}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
