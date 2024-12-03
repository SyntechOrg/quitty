import React from "react";
import type { Metadata } from "next";
import Heading from "@/components/shared/heading/Heading";
import Mission from "@/components/sections/mission/Mission";
import Partners from "@/components/shared/partners/Partners";

export const metadata: Metadata = {
  title: "Quitty | About Us",
  description: "Learn more about Quitty and our mission!",
};

const AboutPage = () => {
  return (
    <>
      <Heading
        title="Heading-title1"
        underTitle="Heading-underTitle1"
        text="Heading-text1"
      />
      <Mission />
      <Partners />
    </>
  );
};

export default AboutPage;
