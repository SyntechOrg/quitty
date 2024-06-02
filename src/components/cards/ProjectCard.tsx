import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { Icon, IconType } from "@/components/shared";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  year: string;
  slug: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ image, title, year, slug }) => {
  return (
    <Link
      href="" // href={`/projects/${slug}`}
      className="mx-auto w-full max-w-[410px] transform overflow-clip rounded-[30px] border border-gray
      transition-all duration-300 ease-in-out hover:-translate-y-5 hover:scale-105 active:opacity-75"
    >
      <div>
        <Image
          src={image}
          alt="project-image"
          className="h-full w-full rounded-[30px]"
        />
      </div>
      <div className="flex justify-between px-7 py-2 sm:py-3 md:px-8">
        <div className="flex items-center gap-1">
          <p className="text-[14px] leading-[2] sm:text-[18px] md:text-[21px]">
            {title}
          </p>
          <Icon
            icon={IconType.ARROW}
            className="h-[24px] w-[24px] text-primary sm:h-[26px] sm:w-[26px] md:h-[28px] md:w-[28px]"
          />
        </div>
        <p className="leading-[2] sm:text-[18px] md:text-[21px]">{year}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
