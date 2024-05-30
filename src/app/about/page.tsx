import React from 'react';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import { Clients } from '@/components';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import OverviewCard from '@/components/cards/OverviewCard';
import { SocialMedia } from '@/components/shared/social-media/SocialMedia';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

const AboutPage = () => {
  return (
    <div className="overflow-x-clip">
      <AboutHeroSection />
      <WhatWeDoSection />
      <Clients backgroundPrimary />
      <div className="container grid h-screen max-h-[1000px] items-center">
        <OverviewCard />
      </div>
      <TestimonialsSection />
      <SocialMedia />
    </div>
  );
};

export default AboutPage;
