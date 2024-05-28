import React, {FC, ReactNode} from 'react';
import Image, {StaticImageData} from "next/image";
import {Button, Icon, IconType} from "@/components/shared";

interface ServiceCardProps {
  title: ReactNode,
  description: string[],
  image: StaticImageData,
  FAQ: { question: string, answer: string }[],
  href: string
}

const ServiceCard: FC<ServiceCardProps> = ({title, description, image, FAQ, href}) => {
  return (
    <div
      className="relative flex flex-col lg:flex-row justify-between max-w-[1300px] w-full bg-[#0F0F13] border border-gray
      lg:px-[90px] lg:py-[55px] md:p-[60px] sm:p-[50px] px-0 py-8 rounded-[30px] overflow-clip"
    >
      <div className="w-11/12 lg:w-[46%] max-lg:mx-auto max-sm:text-center">
        <h2 className="lg:text-[50px] md:text-[36px] text-[24px] leading-[1.33] lg:min-h-[260px]">
          {title}
        </h2>
        <p
          className="lg:mt-[40px] max-sm:text-[15px] text-[17px] md:mt-8 mt-5 leading-[1.5] text-[#a6a6b1] max-w-[630px]">
          {description.map((desc, index) => (
            <span key={index}>
              {desc}
              {index !== description.length - 1 && (
                <>
                  <br/>
                  <br/>
                </>
              )}
            </span>
          ))}
        </p>
      </div>
      <div className="relative w-11/12 lg:w-[46%] max-lg:mx-auto max-lg:flex flex-col-reverse lg:mt-0 mt-14 ">
        <div className="lg:max-w-[350px] lg:max-h-[280px] max-w-[280px] max-h-[320px] mx-auto lg:absolute top-0 left-[-100px]
        w-11/12 h-full max-lg:mx-auto lg:mb-0 md:mb-[-75px] sm:mb-[-60px] mb-[-45px] lg:mt-0 mt-14">
          <Image
            src={image}
            alt="service"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <div
            className="group flex items-center lg:absolute lg:right-0 lg:top-[-20px] relative w-fit sm:ml-auto max-sm:mx-auto mt-10"
          >
            <Button to="/portfolio">Choose service</Button>
            <Button to="/portfolio">
              <Icon icon={IconType.ARROW}/>
            </Button>
          </div>
        </div>
        <div className="w-full lg:mt-[310px] bg-red-950">
          questions and answers
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

