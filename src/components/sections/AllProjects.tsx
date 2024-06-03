"use client";
import React, { FC, useEffect, useState } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import SpandoekmanImage from "../../../public/assets/images/spandoekman-project.png";
import ReputyImage from "../../../public/assets/images/reputy-project.png";
import QonsultantImage from "../../../public/assets/images/qonsultant-project.png";
import SoxeyImage from "../../../public/assets/images/soxey-project.png";
import EleUznachImage from "../../../public/assets/images/ele-uznach-project.png";
import FacedripImage from "../../../public/assets/images/facedrip-project.png";
import { Button, Icon, IconType } from "@/components/shared";
import { FadeIn } from "../fade-in/FadeIn";
import { useTranslations } from "next-intl";
import {useLocale} from "use-intl";

const projectData = [
  {
    title: "Spandoekman.nl",
    image: SpandoekmanImage,
    year: "2024",
    slug: "spandoekman",
  },
  {
    title: "Reputy",
    image: ReputyImage,
    year: "2024",
    slug: "reputy-solutions",
  },
  {
    title: "Qonsultant",
    image: QonsultantImage,
    year: "2024",
    slug: "qonsultant",
  },
  {
    title: "Soxey",
    image: SoxeyImage,
    year: "2024",
    slug: "soxey",
  },
  {
    title: "ELE Uznach",
    image: EleUznachImage,
    year: "2024",
    slug: "ele-uznach",
  },
  {
    title: "Facedrip",
    image: FacedripImage,
    year: "2024",
    slug: "facedrip",
  },
];

const shuffleArray = (array: typeof projectData) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

interface AllProjectsProps {
  itemsToShow?: number;
  random?: boolean;
  slug?: string;
}

const AllProjects: FC<AllProjectsProps> = ({ itemsToShow, random, slug }) => {
  const [projectsToDisplay, setProjectsToDisplay] = useState<
    typeof projectData
  >([]);

  useEffect(() => {
    let shuffledProjects = projectData.filter(
      (project) => project.slug !== slug,
    );

    if (random) {
      shuffledProjects = shuffleArray(shuffledProjects);
    }

    if (itemsToShow && itemsToShow < shuffledProjects.length) {
      shuffledProjects = shuffledProjects.slice(0, itemsToShow);
    }

    setProjectsToDisplay(shuffledProjects);
  }, [itemsToShow, random, slug]);

  return (
    <FadeIn
      className="container mt-[40px] grid grid-cols-auto-fit gap-x-5 gap-y-10 md:grid-cols-auto-fit-lg
          lg:mt-[100px] lg:gap-y-[50px]"
    >
      {projectsToDisplay.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </FadeIn>
  );
};
export default AllProjects;

interface AllProjectsHeaderProps {
  disableButton?: boolean;
}

export const AllProjectsHeader: FC<AllProjectsHeaderProps> = ({
  disableButton,
}) => {
  const t = useTranslations("Shared");
  const localActive = useLocale();

  return (
    <FadeIn className="mx-auto flex w-10/12 max-w-[1000px] items-center justify-between">
      <div>
        <p className="category-text">{t("01- PROJECTS")}</p>
        <h3 className="text-[24px] leading-[1.4] md:text-[32px] lg:text-[48px]">
          {t("Our featured works")}
        </h3>
      </div>
      {!disableButton && (
        <div className="group hidden items-center md:flex">
          <Button to={`/${localActive}/portfolio`}>{t("All Cases-2")}</Button>
          <Button to={`/${localActive}/portfolio`}>
            <Icon icon={IconType.ARROW} />
          </Button>
        </div>
      )}
    </FadeIn>
  );
};
