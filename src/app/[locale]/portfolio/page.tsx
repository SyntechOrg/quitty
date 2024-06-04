import React, { type FC } from "react";
import { SecondaryHeroSection } from "@/components/sections/SecondaryHeroSection";
import { SocialMedia } from "@/components/shared/social-media/SocialMedia";
import AllProjects, {
  AllProjectsHeader,
} from "@/components/sections/AllProjects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syntech Solutions AG | Portfolio",
  description: "Explore our impressive projects and works!",
};

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
