import React from "react";
import type { Metadata } from "next";
import Heading from "@/components/shared/heading/Heading";
import Mission from "@/components/sections/mission/Mission";
import Partners from "@/components/shared/partners/Partners";
import PackagesSection from "@/components/sections/PackagesSection/PackagesSection";
import FeedbackStacked from "@/components/sections/feedback/FeedbackStacked";
import ImpactSection from "@/components/ImpactSection/ImpactSection";
import TeamSection from "@/components/TeamSection/TeamSection";
import CoreValuesSection from "@/components/core-values/CoreValuesSection";

export const metadata: Metadata = {
  title: "Quitty | About Us",
  description: "Learn more about Quitty and our mission!",
};

const AboutPage = () => {
  return (
    <div className="container">
      <Partners />
      <Heading
        title="Heading-title1"
        underTitle="Heading-underTitle1"
        text="Heading-text1"
      />
      <Mission />
      <CoreValuesSection />
      <TeamSection />
      <ImpactSection />
      <FeedbackStacked />
      <PackagesSection />
    </div>
  );
};

export default AboutPage;
