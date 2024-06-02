import { FC } from "react";

interface InformativeCardProps {
  increment: string;
  title: string;
  description: string;
}

const InformativeCard: FC<InformativeCardProps> = ({
  increment,
  title,
  description,
}) => {
  return (
    <div
      key={increment}
      className="relative min-w-[80vw] rounded-[30px] border border-[#2C2A2E] bg-dark-gradient p-6 transition-transform duration-300 hover:scale-105
      max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-center sm:min-w-[400px] md:min-w-[630px] md:px-12 md:py-14"
    >
      <p className="category-text">{increment}</p>
      <h2 className="mt-5 text-[24px] leading-[1.666] tracking-[0.02em] md:mt-10 md:text-[30px]">
        {title}
      </h2>
      <p className="mt-6 text-[14px] leading-[1.666] md:mt-12 md:text-[16px]">
        {description}
      </p>
    </div>
  );
};

export default InformativeCard;
