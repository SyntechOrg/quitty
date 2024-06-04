"use client";
import { type FC } from "react";
import { FadeIn } from "../fade-in/FadeIn";
import { Button, Icon, IconType } from "../shared";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { useLocale } from "use-intl";

const STATISTICS = [
  {
    statistic: "Cards.Card1.Statistic",
    title: "Cards.Card1.Title",
    description: "Cards.Card1.Description",
  },
  {
    statistic: "Cards.Card2.Statistic",
    title: "Cards.Card2.Title",
    description: "Cards.Card2.Description",
  },
  {
    statistic: "Cards.Card3.Statistic",
    title: "Cards.Card3.Title",
    description: "Cards.Card3.Description",
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
  const localActive = useLocale();
  const t = useTranslations("About Us.Statistics");

  return (
    <div
      className={classNames(
        "p-10 pt-12 relative group lg:odd:border-r lg:odd:border-r-[#35353C] border-b border-b-[#35353C] lg:border-b-0 last-of-type:border-b-0",
        index === 2 || index === 3 ? "lg:border-t lg:border-t-[#35353C]" : "",
      )}
    >
      <div className="text-[24px] font-bold leading-[1.4] lg:text-[32px]">
        {statistic}
      </div>
      <div className="mt-2 text-[24px] font-light leading-[1.4] lg:h-[50px] lg:text-[32px]">
        {title}
      </div>
      <p className="mt-6 text-[14px] leading-[1.4] text-[#8F8F8F] max-lg:mx-auto max-lg:max-w-[420px] lg:mt-14 lg:text-[16px]">
        {description}
      </p>
      <div className="absolute right-[10%] top-[10%] hidden items-center group-hover:flex">
        <Button size="sm" to={`/${localActive}/contact`}>
          {t("Button")}
        </Button>
        <Button size="sm" to={`/${localActive}/contact`}>
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
  const t = useTranslations("About Us.Statistics");

  return (
    <FadeIn className="container mt-[90px] flex flex-col gap-y-[44px] max-lg:text-center lg:mt-[180px] lg:flex-row lg:justify-between lg:gap-x-10 lg:gap-y-0">
      <div className="mt-[70px] w-full max-w-[420px] max-lg:mx-auto lg:w-[40%]">
        <h2 className="text-[26px] leading-[1.5] sm:text-[30px] lg:text-[38px]">
          {t("Title")}
        </h2>
        <p className="mt-5 leading-[1.625] max-sm:text-[14px] lg:mt-10">
          {t("Description")}
        </p>
      </div>
      <div className="grid w-full grid-cols-1 max-lg:mx-auto max-lg:max-w-[600px] lg:grid-cols-2">
        {STATISTICS.map((statistic, index) => (
          <StatisticItem
            key={index}
            index={index}
            title={t(statistic.title)}
            statistic={t(statistic.statistic)}
            description={t(statistic.description)}
          />
        ))}
      </div>
    </FadeIn>
  );
};
