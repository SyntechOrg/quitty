import React from 'react';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import { Clients } from '@/components';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import OverviewCard from '@/components/cards/OverviewCard';

const AboutPage = () => {
  return (
    <div className="overflow-x-clip">
      <AboutHeroSection />
      <WhatWeDoSection />
      <Clients />
      <div className="container grid h-screen max-h-[1000px] items-center">
        <OverviewCard />
      </div>
    </div>
  );
};

export default AboutPage;
