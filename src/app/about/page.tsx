import React from 'react';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import { Clients } from '@/components';
import WhatWeDoSection from '@/components/sections/whatWeDoSection';

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <WhatWeDoSection />
      <Clients />
    </div>
  );
};

export default AboutPage;
