import React, {type FC} from "react";
import {SecondaryHeroSection} from "@/components/sections/secondaryHeroSection";
import {SocialMedia} from "@/components/shared/social-media/SocialMedia";

type PortfolioPageProps = {};

const PortfolioPage: FC<PortfolioPageProps> = () => {
  return <div>
    <SecondaryHeroSection
      title="We choose a different → starting point"
      text="Every project is a chance to try something new. Look at something with a fresh perspective.
      Do something for the first time."
    />
    <SocialMedia/>
  </div>;
};

export default PortfolioPage;
