import React from 'react';
import { Button, Icon, IconType } from '@/components/shared';
import QuickCard from '@/components/cards/QuickCard';
import BubbleAboutImage from '../../../public/assets/images/bubble-about-section.png';
import Image from 'next/image';

const quickCardData = [
  { statistic: '+200', description: 'Completed projects' },
  { statistic: '+10', description: 'Years of experience' },
  { statistic: '10K', description: 'User reviews' },
  { statistic: '+20', description: 'Team members' },
];

const AboutSection = () => {
  return (
    <div
      className="container flex lg:gap-[80px] gap-[40px] lg:flex-row flex-col justify-between lg:mt-[150px] mt-[100px]
      max-lg:text-center"
    >
      <div className="backdrop-blur-[1px] max-w-[565px] max-lg:mx-auto">
        <Image
          src={BubbleAboutImage}
          alt="about"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="lg:w-1/2 w-full max-lg:mx-auto">
        <p className="category-text">03- ABOUT US</p>
        <h4
          className="lg:text-[48px] md:text-[32px] text-[24px] leading-[1.4] tracking-[0.02em] lg:mt-[20px] md:mt-[16px]
        mt-[14px] w-11/12 max-lg:mx-auto"
        >
          We Strive To Innovate
        </h4>
        <p
          className="lg:text-[18px] text-[15px] leading-[1.666] text-text lg:mt-[18px] md:mt-[14px] mt-[12px]
          sm:w-[80%] max-lg:mx-auto"
        >
          We are a hyper-creative collective with multifaceted experience
          partnering exclusively with the ambitiously bold. We craft custom
          brands, websites and Apps for companies who dare to be different. We
          embody our values and design using our tried and tested approach to
          deliver truly magnetic and disruptive design.
        </p>
        <div className="flex items-center max-lg:justify-center group lg:mt-[32px] md:mt-[24px] mt-[20px]">
          <Button to="/about">More about us</Button>
          <Button to="/about" className="px-[21px]">
            <Icon icon={IconType.ARROW} />
          </Button>
        </div>
        <div className="flex items-center flex-wrap max-lg:justify-center lg:mt:[40px] md:mt-[28px] mt-[21px] gap-1.5 text-left">
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
