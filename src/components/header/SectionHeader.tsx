import React, { FC } from "react";

interface SectionHeaderProps {
  title: string;
  category: string;
}
const SectionHeader: FC<SectionHeaderProps> = ({ title, category }) => {
  return (
    <div data-aos="fade-up" className="mx-auto w-10/12 text-center">
      <p className="category-text">{category}</p>
      <h3 className="mt-[18px] text-[24px] leading-[1.4] tracking-[0.02em] md:mt-[21px] md:text-[32px] lg:mt-[30px] lg:text-[48px]">
        {title}
      </h3>
    </div>
  );
};

export default SectionHeader;
