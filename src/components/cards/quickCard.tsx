import React, {FC} from 'react';

interface QuickCardProps {
  statistic: string;
  description: string;
}


const QuickCard: FC<QuickCardProps> = ({statistic, description}) => {
  return (
    <div
      className="w-[150px] border border-[#2A2A2F] rounded-[14px] py-[21px] px-3"
      style={{background: 'linear-gradient(180deg, #111115 0%, #161618 100%)'}}
    >
      <p className="font-bold md:text-[28px] sm:text-[20px] text-[#F2E7FF] leading-[1]">
        {statistic}
      </p>
      <p className="text-[#8C8C9E] text-[12px] md:mt-[21px] mt-[12px] leading-[1]">
        {description}
      </p>
    </div>
  );
};

export default QuickCard;
