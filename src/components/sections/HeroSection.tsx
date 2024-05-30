import React from "react";
import { AosTransition } from "@/components/shared/aos/aos-transition";

const HeroSection = () => {
  return (
    <div className="container mx-auto flex min-h-screen w-10/12 max-w-[850px] items-center justify-center">
      <h1
        data-aos="fade-up"
        className="text-center text-[22px] leading-[1.66] sm:text-[36px] md:text-[42px] lg:text-[52px]"
      >
        We are a digital agency, specialized in immersive and experiential
        marketing
      </h1>
    </div>
  );
};

export default HeroSection;
