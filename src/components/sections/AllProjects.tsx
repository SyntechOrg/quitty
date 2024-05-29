import React, { FC } from 'react';
import ProjectCard from '@/components/cards/ProjectCard';
import SpandoekmanImage from '../../../public/assets/images/spandoekman-project.png';
import ReputyImage from '../../../public/assets/images/reputy-project.png';
import QonsultantImage from '../../../public/assets/images/qonsultant-project.png';
import SoxeyImage from '../../../public/assets/images/soxey-project.png';
import EleUznachImage from '../../../public/assets/images/ele-uznach-project.png';
import FacedripImage from '../../../public/assets/images/facedrip-project.png';
import { Button, Icon, IconType } from '@/components/shared';

const projectData = [
  { title: 'Spandoekman.nl', image: SpandoekmanImage, year: '2024', href: '' },
  { title: 'Reputy', image: ReputyImage, year: '2024', href: '' },
  { title: 'Qonsultant', image: QonsultantImage, year: '2024', href: '' },
  { title: 'Soxey', image: SoxeyImage, year: '2024', href: '' },
  { title: 'ELE Uznach', image: EleUznachImage, year: '2024', href: '' },
  { title: 'Facedrip', image: FacedripImage, year: '2024', href: '' },
];

interface AllProjectsProps {
  itemsToShow?: number;
}

const AllProjects: FC<AllProjectsProps> = ({ itemsToShow }) => {
  const projectsToShow =
    itemsToShow && itemsToShow < projectData.length
      ? projectData.slice(0, itemsToShow)
      : projectData;

  return (
    <div
      className="container mt-[40px] grid grid-cols-auto-fit gap-x-5 gap-y-10 md:grid-cols-auto-fit-lg
          lg:mt-[100px] lg:gap-y-[50px]"
    >
      {projectsToShow.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          image={project.image}
          year={project.year}
          href={project.href}
        />
      ))}
    </div>
  );
};
export default AllProjects;

interface AllProjectsHeaderProps {
  disableButton?: boolean;
}

export const AllProjectsHeader: FC<AllProjectsHeaderProps> = ({
  disableButton,
}) => {
  return (
    <div className="mx-auto flex w-10/12 max-w-[1000px] items-center justify-between">
      <div>
        <p className="category-text">01- PROJECTS</p>
        <h3 className="text-[24px] leading-[1.4] md:text-[32px] lg:text-[48px]">
          Our featured works
        </h3>
      </div>
      {!disableButton && (
        <div className="group hidden items-center md:flex">
          <Button to="/portfolio">All Cases</Button>
          <Button to="/portfolio">
            <Icon icon={IconType.ARROW} />
          </Button>
        </div>
      )}
    </div>
  );
};
