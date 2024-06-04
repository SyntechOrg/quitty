import { FC } from "react";
import { useTranslations } from "next-intl";

interface TestimonialCardProps {
  title: string;
  description: string;
}

const StepCard: FC<TestimonialCardProps> = ({ title, description }) => {
  const t = useTranslations("StepCards");

  return (
    <div
      className="relative min-w-[70vw] rounded-[30px] border border-[#2C2A2E] bg-dark-gradient p-6 transition-transform duration-300 hover:scale-105
      max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-4 max-sm:text-center sm:min-w-[400px] md:min-w-[560px] md:px-12 md:py-14"
    >
      <p className="text-[15px] font-bold leading-[1.5] tracking-[0.02em] md:text-[18px]">
        {t(title)}
      </p>
      <p className="mt-4 text-[14px] leading-[1.666] md:mt-7 md:text-[16px]">
        {t(description)}
      </p>
    </div>
  );
};

export default StepCard;
