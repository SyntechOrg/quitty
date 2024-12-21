import React from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";
import DiceIcon from "../../../public/assets/images/dice-icon.png";
import CubeIcon from "../../../public/assets/images/cube-icon.png";
import NetworkIcon from "../../../public/assets/images/network-icon.png";
import Image from "next/image";

const ImpactSection = () => {
  return (
    <div className="mt-20 lg:mt-36 grid grid-cols-1 gap-x-10 gap-y-16 max-lg:mx-auto max-lg:max-w-[600px] lg:grid-cols-3">
      <FadeIn className="lg:row-span-2">
        <p className="text-[16px] font-medium leading-[1.2] text-primary lg:text-[18px]">
          Statistics
        </p>
        <h4 className="mt-3 text-[24px] font-medium leading-[1.333] text-text lg:mt-4 lg:text-[32px]">
          Making a Measurable Impact on the Environment
        </h4>
        <p className="mt-5 text-[16px] leading-[1.5] text-text lg:mt-7">
          Sustainability isn’t just a buzzword for us—it’s central to everything
          we do. Every digital receipt sent through Quitty means less paper
          waste and a cleaner planet. Here’s what we’ve accomplished so far:
        </p>
      </FadeIn>
      <FadeIn className="max-lg:text-center">
        <div className="flex items-center gap-2 max-lg:mx-auto max-lg:w-fit">
          <div className="h-full max-h-[32px] w-full max-w-[32px]">
            <Image
              src={DiceIcon}
              alt="icon"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="flex items-center gap-1 text-[24px] font-bold leading-[1] tracking-[-2px] text-text lg:text-[32px]">
            1 M <span className="text-[20px] lg:text-[22px]">+</span>
          </p>
        </div>
        <p className="mt-6 text-[16px] font-semibold leading-[1.33] text-text lg:mt-7 lg:text-[18px]">
          Over 1 million receipts digitized
        </p>
        <p className="mt-3 text-[15px] leading-[1.5] text-text lg:mt-4 lg:text-[16px]">
          Saving tons of paper from landfills.
        </p>
      </FadeIn>
      <FadeIn className="max-lg:text-center">
        <div className="flex items-center gap-2 max-lg:mx-auto max-lg:w-fit">
          <div className="h-full max-h-[32px] w-full max-w-[32px]">
            <Image
              src={CubeIcon}
              alt="icon"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="flex items-center gap-1 text-[24px] font-bold leading-[1] tracking-[-2px] text-text lg:text-[32px]">
            80 <span className="text-[20px] lg:text-[22px]">%</span>
          </p>
        </div>
        <p className="mt-6 text-[16px] font-semibold leading-[1.33] text-text lg:mt-7 lg:text-[18px]">
          Reduction in retailers&apos; carbon footprint
        </p>
        <p className="mt-3 text-[15px] leading-[1.5] text-text lg:mt-4 lg:text-[16px]">
          Thanks to reduced paper and printing needs.
        </p>
      </FadeIn>
      <FadeIn className="max-lg:text-center lg:col-span-2">
        <div className="flex items-center gap-2 max-lg:mx-auto max-lg:w-fit">
          <div className="h-full max-h-[32px] w-full max-w-[32px]">
            <Image
              src={NetworkIcon}
              alt="icon"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="flex items-center gap-1 text-[24px] font-bold leading-[1] tracking-[-1px] text-text lg:text-[32px]">
            29 <span className="text-[20px] lg:text-[22px]">+</span>
          </p>
        </div>
        <p className="mt-6 text-[16px] font-semibold leading-[1.33] text-text lg:mt-7 lg:text-[18px]">
          Helping retailers meet their sustainability goals
        </p>
        <p className="mt-3 text-[15px] leading-[1.5] text-text lg:mt-4 lg:text-[16px]">
          Quitty partners with businesses to enhance their eco-credentials,
          making a real impact on the environment.
        </p>
      </FadeIn>
    </div>
  );
};

export default ImpactSection;
