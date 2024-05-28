import React, {FC} from 'react';

interface SecondaryHeroSectionProps {
  title: string;
  text: string;
}

export const SecondaryHeroSection: FC<SecondaryHeroSectionProps> = ({title, text}) => {
  return (
    <div
      className={`container min-h-[calc(100vh-106px)] md:min-h-[calc(100vh-114px)]
       mx-auto w-10/12 grid items-center`}
    >
      <div className={`relative flex lg:flex-row flex-col justify-between max-lg:items-center max-lg:text-center gap-x-5 
      gap-y-8 md:translate-y-[-57px] translate-y-[-53px]`}
      >
        <h1
          className="lg:text-[52px] md:text-[42px] sm:text-[36px] text-[24px] leading-[1.4] lg:max-w-[420px] max-w-[450px]
          flex-shrink-0"
        >
          {title}
        </h1>
        <p className="lg:text-[24px] md:text-[18px] leading-[1.9] max-w-[630px] lg:mt-3">
          {text}
        </p>
      </div>
    </div>
  );
};

