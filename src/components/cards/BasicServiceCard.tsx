import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { Button, Icon, IconType } from "@/components/shared";

interface BasicServiceCardProps {
  id: number;
  title: string[];
  description: string;
  image: StaticImageData;
  categories: string[];
  href: string;
}

const BasicServiceCard: FC<BasicServiceCardProps> = ({
  id,
  title,
  description,
  image,
  categories,
}) => {
  return (
    <div
      // data-aos={`${id % 2 === 0 ? "fade-left" : "fade-right"}`}
      data-aos="fade-up"
      className="relative flex w-full max-w-[1300px] flex-col justify-between overflow-clip rounded-[30px] border border-gray
      bg-[#0F0F13] px-0 py-8 sm:p-[50px] md:p-[60px] lg:flex-row lg:px-[90px] lg:py-[55px]"
    >
      <div className="mx-auto w-11/12 max-sm:text-center lg:w-[55%]">
        <h4 className="text-[24px] leading-[1.16] md:text-[36px] lg:text-[48px]">
          {title.map((title, index) => (
            <span key={index}>
              {title}
              {index !== title.length - 1 && (
                <>
                  <br />
                </>
              )}
            </span>
          ))}
        </h4>
        <p className="mt-5 max-w-[630px] text-[17px] leading-[1.5] text-[#a6a6b1] max-sm:text-[15px] md:mt-8 lg:mt-[40px]">
          {description}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-2 max-sm:justify-center md:mt-[50px] lg:mt-[100px]">
          {categories.map((category, index) => (
            <div
              key={index}
              className="grid h-[36px] w-fit place-content-center rounded-3xl border border-gray bg-[#15151b] px-5 lg:h-[40px] lg:px-7"
            >
              <span className="text-[14px] leading-[1] md:text-[16px]">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full max-lg:flex max-lg:flex-col-reverse lg:w-[45%]">
        <Image
          src={image}
          alt="service"
          className="relative right-0 top-[45px] h-full max-h-[340px] w-11/12 max-w-[380px] object-contain max-lg:mx-auto
           sm:top-[65px] md:top-[75px] lg:absolute lg:top-[100px]"
        />
        <div className="group relative mt-10 flex items-center max-sm:mx-auto sm:ml-auto lg:absolute lg:right-0">
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
