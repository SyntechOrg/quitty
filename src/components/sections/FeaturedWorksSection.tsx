import React from 'react';
import { Button, Icon, IconType } from '@/components/shared';
import AllProjects, {
  AllProjectsHeader,
} from '@/components/sections/AllProjects';

const FeaturedWorksSection = () => {
  return (
    <>
      <AllProjectsHeader />
      <AllProjects itemsToShow={6} />
      <div className="mt-[40px] flex items-center justify-center md:hidden">
        <Button to="/portfolio">All Cases</Button>
        <Button to="/portfolio">
          <Icon icon={IconType.ARROW} />
        </Button>
      </div>
    </>
  );
};

export default FeaturedWorksSection;
