import React from 'react';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import { Clients } from '@/components';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import OverviewCard from "@/components/cards/OverviewCard";

const AboutPage = () => {
  return (
    <div className="overflow-x-clip">
      <AboutHeroSection />
      <WhatWeDoSection />
      <Clients />
      <OverviewCard />
    </div>
  );
};

export default AboutPage;
