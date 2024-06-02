import React, { type FC } from "react";
import { SecondaryHeroSection } from "@/components/sections/SecondaryHeroSection";
import { SocialMedia } from "@/components/shared/social-media/SocialMedia";
import AllProjects, {
  AllProjectsHeader,
} from "@/components/sections/AllProjects";

const PortfolioPage: FC = () => {
  return (
    <div>
      <SecondaryHeroSection
        title={"Portfolio.Portfolio first-title"}
        text={"Portfolio.Portfolio first-text"}
      />
      <AllProjectsHeader disableButton />
      <AllProjects />
      <SocialMedia className="mt-[60px] md:mt-[100px] lg:mt-[150px]" />
    </div>
  );
};

export default PortfolioPage;
