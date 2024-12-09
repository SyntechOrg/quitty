import React, { FC } from "react";
import flame from "public/assets/images/flameIcon.png";
import Image from "next/image";
import { Button } from "@/components/shared";
import AppleLogoWhite from "../../../../public/assets/images/apple-logo-white.png";
import GooglePlayLogoWhite from "../../../../public/assets/images/google-play-logo-white.png";
import { FadeIn } from "@/components/fade-in/FadeIn";

interface PackageCardProps {
  type: string;
  price: string;
  features: string[];
  forWho: string;
}

const PackageCard: FC<PackageCardProps> = (props) => {
  return (
    <FadeIn className="group w-full rounded-[70px] bg-transparent px-9 pb-12 pt-9 duration-300 ease-in-out hover:bg-text hover:pt-12 lg:w-1/3">
      <div>
        <p className="text-[24px] font-medium leading-[1.25] text-text duration-300 ease-in-out group-hover:text-white">
          {props.type}
        </p>
        <hr className="mt-4 border-[#CFD9DB]" />
        <div className="mt-10 flex gap-2.5 lg:mt-9">
          <p className="text-[18px] font-semibold text-text duration-300 ease-in-out group-hover:text-white">
            CHF <span className="text-[39px]">{props.price}</span>
          </p>
          <p className="text-[17px] text-[#939398] duration-300 ease-in-out group-hover:text-white">
            /pro Monat
          </p>
        </div>
        <p className="mt-4 text-[17px] font-medium leading-[1.6] text-text duration-300 ease-in-out group-hover:text-white">
          {props.forWho}
        </p>
        <ul className="mt-6 space-y-2 text-[#939398] opacity-0 duration-300 ease-in-out group-hover:opacity-100 lg:mt-8">
          {props.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Image src={flame} alt="" className="w-[20px] object-contain" />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
        <div
          className="mt-8 flex justify-center gap-x-1 gap-y-2 opacity-0 transition-opacity
          duration-200 group-hover:opacity-100 max-lg:flex-col max-lg:items-center"
        >
          <Button
            to={"/"}
            variant="primary"
            className="flex !h-[54px] w-full items-center justify-center gap-x-[5px] !px-0.5 font-medium"
          >
            <Image
              src={AppleLogoWhite}
              alt="Apple logo"
              className="h-full max-h-[32px] w-full max-w-[30px] object-contain lg:max-h-[28px] lg:max-w-[25px]"
            />
            <span className="text-center text-[18px] lg:text-[15px]">
              App Store
            </span>
          </Button>
          <Button
            to={"/"}
            variant="primary"
            className="flex !h-[54px] w-full items-center justify-center gap-x-[5px] !px-0.5 font-medium"
          >
            <Image
              src={GooglePlayLogoWhite}
              alt="Google Play logo"
              className="h-full max-h-[32px] w-full max-w-[30px] object-contain lg:max-h-[28px] lg:max-w-[25px]"
            />
            <span className="text-center text-[18px] lg:text-[15px]">
              Google Play
            </span>
          </Button>
        </div>
      </div>
    </FadeIn>
  );
};

export default PackageCard;
