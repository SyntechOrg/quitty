import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { Icon, IconType } from "@/components/shared";
import Link from "next/link";

interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  year: string;
  slug: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ image, title, year, slug }) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="hover:opacity-90 duration-75 ease-in-out"
    >
      <div className="max-w-[410px] w-full rounded-[30px] border border-gray mx-auto overflow-clip">
        <div>
          <Image
            src={image}
            alt="project-image"
            className="w-full h-full rounded-[30px]"
          />
        </div>
        <div className="flex justify-between md:px-8 px-7 sm:py-3 py-2">
          <div className="flex items-center gap-1">
            <p className="sm:text-[18px] md:text-[21px] text-[14px] leading-[2]">
              {title}
            </p>
            <Icon
              icon={IconType.ARROW}
              className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px] text-primary"
            />
          </div>
          <p className="sm:text-[18px] md:text-[21px] leading-[2]">{year}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
