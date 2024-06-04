import { type FC } from "react";
import { FadeIn } from "../fade-in/FadeIn";
import { useTranslations } from "next-intl";

const GENERAL_INFO = [
  {
    label: "Contact phone-number",
    value: "+41 76 573 24 07",
  },
  {
    label: "Contact email",
    value: "office@syn-tech.ch",
  },
  {
    label: "Contact address",
    value: "Rotzbergstrasse 1 6362 Stansstad",
  },
];

export const ContactPageBanner: FC = () => {
  const t = useTranslations("Contact");
  return (
    <FadeIn className="container mt-[210px]">
      <div className="flex flex-col items-center justify-center text-center lg:flex-row lg:items-start lg:justify-between lg:pr-[110px] lg:text-left">
        <div className="mt-[30px] text-[24px] tracking-[20%] text-primary">
          {t("Contact first-text")}
        </div>
        <h1 className="w-full max-w-[650px] text-[30px] leading-[40px] max-lg:mt-5 lg:text-[70px] lg:leading-[80px]">
          {t("Contact first-title")}
        </h1>
      </div>
      <div className="mt-[150px] flex flex-col justify-between gap-y-12 max-lg:text-center lg:flex-row lg:items-center">
        <p className="mx-auto w-full max-w-[320px] text-[14px] leading-[2] lg:mr-10 lg:max-w-[220px]">
          {t("Contact first-list-text")}
        </p>
        <ul className="flex w-full flex-col items-center justify-between lg:flex-row">
          {GENERAL_INFO.map((info) => (
            <li
              key={info.label}
              className="mx-auto max-w-[250px] px-4 max-lg:border-t max-lg:border-t-[#3F3D45] max-lg:py-8 lg:border-l lg:border-l-[#3F3D45] lg:px-8 lg:last-of-type:border-r lg:last-of-type:border-r-[#3F3D45]"
            >
              <div className="mb-2 text-sm font-bold text-[#B0B0B0] lg:mb-6">
                {t(info.label)}
              </div>
              <div className="text-[19px] font-bold">{info.value}</div>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
};
