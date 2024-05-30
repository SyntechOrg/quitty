import React from "react";
import { Button, Icon, IconType } from "@/components/shared";
import QuickCard from "@/components/cards/QuickCard";
import BubbleAboutImage from "../../../public/assets/images/bubble-about-section.png";
import Image from "next/image";

const quickCardData = [
  { statistic: "+200", description: "Completed projects" },
  { statistic: "+10", description: "Years of experience" },
  { statistic: "10K", description: "User reviews" },
  { statistic: "+20", description: "Team members" },
];

const AboutSection = () => {
  return (
    <div
      data-aos="fade-up"
      className="container mt-[100px] flex flex-col justify-between gap-[40px] max-lg:text-center lg:mt-[150px] lg:flex-row
      lg:gap-[80px]"
    >
      <div className="max-w-[565px] backdrop-blur-[1px] max-lg:mx-auto">
        <Image
          src={BubbleAboutImage}
          alt="about"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="w-full max-lg:mx-auto lg:w-1/2">
        <p className="category-text">03- ABOUT US</p>
        <h4
          className="mt-[14px] w-11/12 text-[24px] leading-[1.4] tracking-[0.02em] max-lg:mx-auto md:mt-[16px]
        md:text-[32px] lg:mt-[20px] lg:text-[48px]"
        >
          We Strive To Innovate
        </h4>
        <p
          className="mt-[12px] text-[15px] leading-[1.666] text-text max-lg:mx-auto sm:w-[80%] md:mt-[14px]
          lg:mt-[18px] lg:text-[18px]"
        >
          We are a hyper-creative collective with multifaceted experience
          partnering exclusively with the ambitiously bold. We craft custom
          brands, websites and Apps for companies who dare to be different. We
          embody our values and design using our tried and tested approach to
          deliver truly magnetic and disruptive design.
        </p>
        <div className="group mt-[20px] flex items-center max-lg:justify-center md:mt-[24px] lg:mt-[32px]">
          <Button to="/about">More about us</Button>
          <Button to="/about" className="px-[21px]">
            <Icon icon={IconType.ARROW} />
          </Button>
        </div>
        <div className="lg:mt:[40px] mt-[21px] flex flex-wrap items-center gap-1.5 text-left max-lg:justify-center md:mt-[28px]">
          {quickCardData.map((card, index) => (
            <QuickCard
              key={index}
              statistic={card.statistic}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
