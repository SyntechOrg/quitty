import React, { FC, ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button, Icon, IconType } from '@/components/shared';

interface BasicServiceCardProps {
  title: ReactNode;
  description: string;
  image: StaticImageData;
  categories: string[];
  href: string;
}

const BasicServiceCard: FC<BasicServiceCardProps> = ({
  title,
  description,
  image,
  categories,
}) => {
  return (
    <div
      className="relative flex flex-col lg:flex-row justify-between max-w-[1300px] w-full bg-[#0F0F13] border border-gray
      lg:px-[90px] lg:py-[55px] md:p-[60px] sm:p-[50px] px-0 py-8 rounded-[30px] overflow-clip"
    >
      <div className="w-11/12 lg:w-[55%] mx-auto max-sm:text-center">
        <h4 className="lg:text-[48px] md:text-[36px] text-[24px] leading-[1.16]">
          {title}
        </h4>
        <p className="lg:mt-[40px] max-sm:text-[15px] text-[17px] md:mt-8 mt-5 leading-[1.5] text-[#a6a6b1] max-w-[630px]">
          {description}
        </p>
        <div className="flex flex-wrap items-center max-sm:justify-center gap-2 lg:mt-[100px] md:mt-[50px] mt-7">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-3xl lg:px-7 px-5 lg:h-[40px] h-[36px] bg-[#15151b] border border-gray grid place-content-center w-fit"
            >
              <span className="md:text-[16px] text-[14px] leading-[1]">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full lg:w-[45%] max-lg:flex max-lg:flex-col-reverse">
        <Image
          src={image}
          alt="service"
          className="lg:absolute relative lg:top-[100px] md:top-[75px] sm:top-[65px] top-[45px] right-0 w-11/12 h-full
           max-w-[380px] max-h-[340px] max-lg:mx-auto object-contain"
        />
        <div className="group flex items-center lg:absolute lg:right-0 relative sm:ml-auto max-sm:mx-auto mt-10">
          <Button to="/portfolio">Read More</Button>
          <Button to="/portfolio">
            <Icon icon={IconType.ARROW} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasicServiceCard;
