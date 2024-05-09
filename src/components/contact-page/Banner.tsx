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
    <div className="mt-[210px]">
      <div className="flex justify-between lg:pr-[110px]">
        <div className="text-primary mt-[30px] text-[24px] tracking-[20%]">
          GET IN TOUCH
        </div>
        <h1 className="text-[70px] leading-[80px] w-full max-w-[650px]">
          Let's create something special together...
        </h1>
      </div>
      <div className="flex items-center justify-between mt-[161px]">
        <p className="w-full max-w-[340px] text-sm leading-[30px]">
          Have a project or want to talk?
          <br /> Here you'll find a few convenient <br />
          ways to reach us.
        </p>
        <ul className="flex w-full justify-between">
          {GENERAL_INFO.map((info) => (
            <li
              key={info.label}
              className="pl-[60px] py-3 border-l border-l-[#3F3D45] last-of-type:border-r-[#3F3D45] last-of-type:border-r last-of-type:pr-[60px]"
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
