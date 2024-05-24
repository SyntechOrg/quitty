import React from 'react';
import ProjectCard from "@/components/cards/projectCard";
import SpandoekmanImage from "../../../public/assets/images/spandoekman-project.png";
import ReputyImage from "../../../public/assets/images/reputy-project.png";
import QonsultantImage from "../../../public/assets/images/qonsultant-project.png";
import SoxeyImage from "../../../public/assets/images/soxey-project.png";
import EleUznachImage from "../../../public/assets/images/ele-uznach-project.png";
import FacedripImage from "../../../public/assets/images/facedrip-project.png";


const AllProjects = () => {
  return (
    <div
      className="container grid gap-x-5 lg:gap-y-[50px] gap-y-10 mt-[60px] sm:mt-[100px]
          md:grid-cols-auto-fit-lg grid-cols-auto-fit"
    >
      <ProjectCard
        title="Spandoekman.nl"
        image={SpandoekmanImage}
        year="2024"
        href=""
      />
      <ProjectCard
        title="Reputy"
        image={ReputyImage}
        year="2024"
        href=""
      />
      <ProjectCard
        title="Qonsultant"
        image={QonsultantImage}
        year="2024"
        href=""
      />
      <ProjectCard
        title="Soxey"
        image={SoxeyImage}
        year="2024"
        href=""
      />
      <ProjectCard
        title="ELE Uznach"
        image={EleUznachImage}
        year="2024"
        href=""
      />
      <ProjectCard
        title="Facedrip"
        image={FacedripImage}
        year="2024"
        href=""
      />
    </div>
  );
};

export default AllProjects;
