import React, {FC} from 'react';

interface SecondaryHeroSectionProps {
  title: string;
  text: string;
}

export const SecondaryHeroSection: FC<SecondaryHeroSectionProps> = ({title, text}) => {
  return (
    <div
      className="container flex lg:flex-row flex-col justify-between mx-auto w-10/12 gap-x-5 gap-y-8
      max-lg:text-center max-lg:items-center"
    >
      <h1
        className="lg:text-[52px] md:text-[42px] sm:text-[36px] text-[24px] leading-[1.4] lg:max-w-[420px] max-w-[450px] flex-shrink-0"
      >
        {title}
      </h1>
      <p className="lg:text-[24px] md:text-[18px] leading-[1.9] max-w-[630px]">
        {text}
      </p>
    </div>
  );
};

