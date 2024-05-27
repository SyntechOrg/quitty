import React from 'react';
import {Button, Icon, IconType} from "@/components/shared";
import QuickCard from "@/components/cards/quickCard";

const AboutSection = () => {
  return (
    <div className="container flex lg:gap-[50px] gap-[80px] lg:flex-row flex-col justify-between lg:mt-[100px] mt-[60px] max-lg:text-center">
      <div>
        image
      </div>
      <div className="lg:w-1/2 w-full max-lg:mx-auto">
        <p className="category-text">
          03- ABOUT US
        </p>
        <h4
          className="lg:text-[48px] md:text-[32px] text-[24px] leading-[1.4] tracking-[0.02em] lg:mt-[20px] md:mt-[16px]
        mt-[14px] w-11/12 max-lg:mx-auto"
        >
          We Strive To Innovate
        </h4>
        <p className="lg:text-[18px] text-[15px] leading-[1.666] text-text lg:mt-[18px] md:mt-[14px] mt-[12px] w-11/12 max-lg:mx-auto">
          We are a hyper-creative collective with multifaceted experience partnering exclusively with the ambitiously
          bold. We craft custom brands, websites and Apps for companies who dare to be different. We embody our values
          and design using our tried and tested approach to deliver truly magnetic and disruptive design.
        </p>
        <div className="flex items-center max-lg:justify-center group lg:mt-[32px] md:mt-[24px] mt-[20px]">
          <Button to="about">More about us</Button>
          <Button to="about">
            <Icon icon={IconType.ARROW}/>
          </Button>
        </div>
        <div className="flex items-center flex-wrap max-lg:justify-center lg:mt:[40px] md:mt-[28px] mt-[21px] gap-1.5">
          <QuickCard
            statistic="+200"
            description="Completed projects"
          />
          <QuickCard
            statistic="+10"
            description="Years of experience"
          />
          <QuickCard
            statistic="10K"
            description="User reviews"
          />
          <QuickCard
            statistic="+20"
            description="Team members"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
