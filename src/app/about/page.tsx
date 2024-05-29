import React from 'react';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import { Clients } from '@/components';

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <Clients />
    </div>
  );
};

export default AboutPage;
