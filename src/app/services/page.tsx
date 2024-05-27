import React from 'react';
import {SocialMedia} from "@/components/shared/social-media/SocialMedia";
import {SecondaryHeroSection} from "@/components/sections/secondaryHeroSection";

const ServicesPage = () => {
  return (
    <div>
      <SecondaryHeroSection
        title="Expertise"
        text="Focusing on core areas, we combine our creative and technical expertise to reveal the essence of brands,
         redesigning websites, building web applications, and delivering e-commerce solutions."
      />
      <SocialMedia/>
    </div>
  );
};

export default ServicesPage;
