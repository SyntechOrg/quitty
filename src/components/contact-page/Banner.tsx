import { type FC } from "react";

const GENERAL_INFO = [
  {
    label: "PHONE NUMBER",
    value: "+383 49 799 829",
  },
  {
    label: "EMAIL ADDRESS",
    value: "info@syn-tech.ch",
  },
  {
    label: "STUDIO ADDRESS",
    value: "Strase Switzerland",
  },
];

type ContactPageBannerProps = {};

export const ContactPageBanner: FC<ContactPageBannerProps> = () => {
  return (
    <div className="mt-[210px] container">
      <div className="flex lg:justify-between lg:pr-[110px] flex-col lg:flex-row items-center justify-center lg:items-start text-center lg:text-left">
        <div className="text-primary mt-[30px] text-[24px] tracking-[20%]">
          GET IN TOUCH
        </div>
        <h1 className="lg:text-[70px] text-[30px] leading-[40px] lg:leading-[80px] w-full max-w-[650px]">
          Let's create something special together...
        </h1>
      </div>
      <div className="flex lg:items-center justify-between mt-[161px] flex-col lg:flex-row gap-y-5 lg:gap-y-0">
        <p className="w-full max-w-[340px] text-sm leading-[30px]">
          Have a project or want to talk?
          <br /> Here you'll find a few convenient <br />
          ways to reach us.
        </p>
        <ul className="flex lg:flex-row w-full justify-between flex-col">
          {GENERAL_INFO.map((info) => (
            <li
              key={info.label}
              className="pl-[30px] lg:pl-[60px] py-3 border-l border-l-[#3F3D45] last-of-type:border-r-[#3F3D45] lg:last-of-type:border-r lg:last-of-type:pr-[60px]"
            >
              <div className="text-sm text-[#B0B0B0] font-bold mb-[30px]">
                {info.label}
              </div>
              <div className="text-xl font-bold">{info.value}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
