import { type FC } from "react";
import { FadeIn } from "../fade-in/FadeIn";
import { useTranslations } from "next-intl";

const GENERAL_INFO = [
  {
    label: "Contact phone-number",
    value: "+383 49 799 829",
  },
  {
    label: "Contact email",
    value: "info@syn-tech.ch",
  },
  {
    label: "Contact address",
    value: "Strase Switzerland",
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
        <h1 className="w-full max-w-[650px] text-[30px] leading-[40px] lg:text-[70px] lg:leading-[80px]">
          {t("Contact first-title")}
        </h1>
      </div>
      <div className="mt-[161px] flex flex-col justify-between gap-y-5 lg:flex-row lg:items-center lg:gap-y-0">
        <p className="w-full max-w-[340px] text-sm leading-[30px]">
          {t("Contact first-list-text")}
        </p>
        <ul className="flex w-full flex-col justify-between lg:flex-row">
          {GENERAL_INFO.map((info) => (
            <li
              key={info.label}
              className="border-l border-l-[#3F3D45] py-3 pl-[30px] last-of-type:border-r-[#3F3D45] lg:pl-[60px] lg:last-of-type:border-r lg:last-of-type:pr-[60px]"
            >
              <div className="mb-[30px] text-sm font-bold text-[#B0B0B0]">
                {t(info.label)}
              </div>
              <div className="text-xl font-bold">{info.value}</div>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
};
