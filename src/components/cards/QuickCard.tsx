import React, { FC } from "react";

interface QuickCardProps {
  statistic: string;
  description: string;
}

const QuickCard: FC<QuickCardProps> = ({ statistic, description }) => {
  return (
    <div className="w-[150px] rounded-[14px] border border-[#2A2A2F] bg-dark-gradient px-3 py-[21px]">
      <p className="font-bold leading-[1] text-[#F2E7FF] sm:text-[20px] md:text-[28px]">
        {statistic}
      </p>
      <p className="mt-[12px] text-[12px] text-[#8C8C9E] md:mt-[21px]">
        {description}
      </p>
    </div>
  );
};

export default QuickCard;
