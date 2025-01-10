"use client";

import React, { useEffect } from "react";
import type { Metadata } from "next";
import Heading from "@/components/shared/heading/Heading";
import Mission from "@/components/sections/mission/Mission";
import Partners from "@/components/shared/partners/Partners";
import PackagesSection from "@/components/sections/PackagesSection/PackagesSection";
import FeedbackStacked from "@/components/sections/feedback/FeedbackStacked";
import ImpactSection from "@/components/ImpactSection/ImpactSection";
import TeamSection from "@/components/sections/team-section/TeamSection";
import CoreValuesSection from "@/components/core-values/CoreValuesSection";
import VideoSection from "@/components/sections/video-section/video-section";
import AboutHero from "@/components/sections/about-hero/AboutHero";
import withAuth from "@/components/hocs/withAuth";
// export const metadata: Metadata = {
//   title: "Quitty | About Us",
//   description: "Learn more about Quitty and our mission!",
// };

const AboutPage = () => {
  return (
    <div className="container">
      <AboutHero />
      <Partners />
      <Heading
        title="Heading-title1"
        underTitle="Heading-underTitle1"
        text="Heading-text1"
      />
      <Mission />
      <VideoSection url="https://www.youtube.com/embed/YZ84iQrbYjw?si=NsmS-Uwu1xz690W0" />
      <CoreValuesSection />
      <TeamSection />
      <ImpactSection />
      <FeedbackStacked />
      <PackagesSection />
    </div>
  );
};

export default withAuth(AboutPage);
