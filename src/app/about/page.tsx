import React from 'react';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import { Clients } from '@/components';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';

const AboutPage = () => {
  return (
    <div className="overflow-x-clip">
      <AboutHeroSection />
      <WhatWeDoSection />
      <Clients />
    </div>
  );
};

export default AboutPage;
