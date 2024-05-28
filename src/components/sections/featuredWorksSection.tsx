import React from 'react';
import AllProjects, {AllProjectsHeader} from "@/components/sections/allProjects";
import {Button, Icon, IconType} from "@/components/shared";

const FeaturedWorksSection = () => {
  return (
    <>
      <AllProjectsHeader />
      <AllProjects itemsToShow={6}/>
      <div className="flex md:hidden items-center justify-center mt-[40px]">
        <Button to="/portfolio">All Cases</Button>
        <Button to="/portfolio">
          <Icon icon={IconType.ARROW} />
        </Button>
      </div>
    </>
  );
};

export default FeaturedWorksSection;
