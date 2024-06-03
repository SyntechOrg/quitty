import { type FC } from "react";
import { FadeIn } from "../fade-in/FadeIn";
import { Button, Icon, IconType } from "../shared";
import classNames from "classnames";

const STATISTICS = [
  {
    statistic: "1,000+",
    title: "Projects Completed",
    description:
      "We have completed over 1,000 projects for clients all over the world.",
  },
  {
    statistic: "1,000+",
    title: "Projects Completed",
    description:
      "We have completed over 1,000 projects for clients all over the world.",
  },
  {
    statistic: "1,000+",
    title: "Projects Completed",
    description:
      "We have completed over 1,000 projects for clients all over the world.",
  },
  {
    statistic: "1,000+",
    title: "Projects Completed",
    description:
      "We have completed over 1,000 projects for clients all over the world.",
  },
];

type StatisticItemProps = {
  statistic: string;
  title: string;
  description: string;
  index: number;
  className?: string;
};

export const StatisticItem: FC<StatisticItemProps> = ({
  statistic,
  title,
  description,
  index,
}) => {
  return (
    <div
      className={classNames(
        "p-[51px] pt-[80px] relative group lg:odd:border-r lg:odd:border-r-[#35353C] border-b border-b-[#35353C] lg:border-b-0 last-of-type:border-b-0",
        index === 2 || index === 3 ? "lg:border-t lg:border-t-[#35353C]" : ""
      )}
    >
      <div className="text-[32px] font-bold leading-[56px]">{statistic}</div>
      <div className="font-light text-[32px] leading-[56px]">{title}</div>
      <p className="mt-[58px] lg:mt-[116px] text-base text-[#8F8F8F]">
        {description}
      </p>
      <div className="absolute top-[50px] right-[50px] items-center hidden group-hover:flex">
        <Button size="sm">Work</Button>
        <Button size="sm">
          <Icon icon={IconType.ARROW} />
        </Button>
      </div>
    </div>
  );
};

type StatisticsProps = {
  className?: string;
};

export const Statistics: FC<StatisticsProps> = () => {
  return (
    <FadeIn className="container flex lg:flex-row flex-col gap-y-[44px] lg:gap-y-0 lg:gap-x-[88px] mt-[90px] lg:mt-[180px]">
      <div className="mt-[70px] max-w-[350px] w-full">
        <h2 className="text-[40px] leading-[60px]">
          Simply put, we dare what others don't
        </h2>
        <p className="mt-[48px] text-base leading-[26x]">
          Strategic process of creating a unique identity for businesses. It
          involves defining a brand's personality, values, and visual elements,
          such as logos and color schemes, to leave a lasting impression on the
          audience
        </p>
      </div>
      <div className="grid lg:grid-cols-2 border border-[#35353C] grid-cols-1">
        {STATISTICS.map((statistic, index) => (
          <StatisticItem key={index} index={index} {...statistic} />
        ))}
      </div>
    </FadeIn>
  );
};
