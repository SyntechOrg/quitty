import React from "react";
import AboutHeroSection from "@/components/sections/AboutHeroSection";
import { Clients } from "@/components";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import OverviewCard from "@/components/cards/OverviewCard";
import { SocialMedia } from "@/components/shared/social-media/SocialMedia";
import ProcessSection from "@/components/sections/ProcessSection";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { Statistics } from "@/components/statistics/Statistics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syntech Solutions AG | About Us",
  description: "Learn more about Syn-Tech and our mission!",
};

const AboutPage = () => {
  return (
    <div className="overflow-x-clip">
      <AboutHeroSection />
      <WhatWeDoSection />
      <Clients backgroundPrimary />
      <Statistics />
      <FadeIn className="container grid h-screen max-h-[1000px] items-center">
        <OverviewCard />
      </FadeIn>
      <ProcessSection />
      <SocialMedia />
    </div>
  );
};

export default AboutPage;
