import React, {FC} from 'react';

interface SectionHeaderProps {
  title: string;
  category: string;
}
const SectionHeader: FC<SectionHeaderProps> = ({title, category}) => {
  return (
    <div className="w-10/12 mx-auto text-center">
      <p className="category-text">
        {category}
      </p>
      <h3 className="lg:text-[48px] md:text-[32px] text-[24px] leading-[1.4] tracking-[0.02em] lg:mt-[30px] md:mt-[21px] mt-[18px]">
        {title}
      </h3>
    </div>
  );
};

export default SectionHeader;
