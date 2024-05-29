import React, {type FC} from "react";
import {SecondaryHeroSection} from "@/components/sections/SecondaryHeroSection";
import {SocialMedia} from "@/components/shared/social-media/SocialMedia";
import AllProjects, {AllProjectsHeader} from "@/components/sections/AllProjects";

const PortfolioPage: FC = () => {
  return <div>
    <SecondaryHeroSection
      title="We choose a different → starting point"
      text="Every project is a chance to try something new. Look at something with a fresh perspective.
      Do something for the first time."
    />
    <AllProjectsHeader disableButton/>
    <AllProjects />
    <div className="lg:mt-[150px] md:mt-[100px] mt-[60px]">
      <SocialMedia/>
    </div>
  </div>;
};

export default PortfolioPage;
