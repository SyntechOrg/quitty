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

export const ContactPageBanner: FC = () => {
  return (
    <div className="container mt-[210px]">
      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center text-center lg:flex-row lg:items-start lg:justify-between lg:pr-[110px] lg:text-left"
      >
        <div className="mt-[30px] text-[24px] tracking-[20%] text-primary">
          GET IN TOUCH
        </div>
        <h1 className="w-full max-w-[650px] text-[30px] leading-[40px] lg:text-[70px] lg:leading-[80px]">
          Let&apos;s create something special together...
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="mt-[161px] flex flex-col justify-between gap-y-5 lg:flex-row lg:items-center lg:gap-y-0"
      >
        <p className="w-full max-w-[340px] text-sm leading-[30px]">
          Have a project or want to talk?
          <br /> Here you&apos;ll find a few convenient <br />
          ways to reach us.
        </p>
        <ul className="flex w-full flex-col justify-between lg:flex-row">
          {GENERAL_INFO.map((info) => (
            <li
              key={info.label}
              className="border-l border-l-[#3F3D45] py-3 pl-[30px] last-of-type:border-r-[#3F3D45] lg:pl-[60px] lg:last-of-type:border-r lg:last-of-type:pr-[60px]"
            >
              <div className="mb-[30px] text-sm font-bold text-[#B0B0B0]">
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
