import React, {FC} from 'react';
import Image, {StaticImageData} from "next/image";
import {Button, Icon, IconType} from "@/components/shared";

interface BasicServiceCardProps {
  title: string,
  description: string,
  image: StaticImageData,
  categories: string[],
  href: string
}

const BasicServiceCard: FC<BasicServiceCardProps> = ({title, description, image, categories}) => {
  return (
    <div
      className="relative flex flex-col lg:flex-row justify-between max-w-[1300px] w-full bg-[#0F0F13] border border-gray
      lg:px-[100px] lg:py-[60px] md:p-[60px] sm:p-[50px] px-0 py-8 rounded-[30px] overflow-clip"
    >
      <div className="w-11/12 lg:w-1/2 mx-auto max-sm:text-center">
        <h4 className="lg:text-[50px] md:text-[36px] text-[32px]">
          {title}
        </h4>
        <p className="lg:mt-[45px] md:mt-8 mt-5 leading-[1.5]">
          {description}
        </p>
        <div className="flex flex-wrap items-center max-sm:justify-center gap-2.5 lg:mt-[100px] md:mt-[50px] mt-7">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-3xl px-[30px] h-[40px] bg-[#15151b] border border-gray grid place-content-center w-fit"
            >
              <span className="md:text-[18px] text-[16px] leading-[1]">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 max-lg:flex max-lg:flex-col-reverse">
        <Image
          src={image}
          alt="service"
          className="lg:absolute relative md:top-[60px] sm:top-[50px] top-[40px] w-full h-full max-lg:max-w-[400px] max-lg:mx-auto object-contain"
        />
        <div className="group flex items-center lg:absolute lg:right-0 relative sm:ml-auto max-sm:mx-auto mt-10">
          <Button to="portfolio">Read More</Button>
          <Button to="portfolio">
            <Icon icon={IconType.ARROW}/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasicServiceCard;
