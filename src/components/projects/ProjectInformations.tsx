import classNames from "classnames";
import { type FC } from "react";
import { Icon, IconType } from "../shared";
import Link from "next/link";

const INFORMATIONS = [
  {
    title: "Services",
    items: ["UI UX Design", "Development"],
  },
  {
    title: "Product type",
    items: ["Website", "E-Commerce"],
  },
  {
    title: "Expertise",
    items: ["Frontend", "Shopify"],
  },
  {
    title: "Release",
    items: ["2024", "2024"],
  },
];

type ProjectInformationsProps = {
  className?: string;
};

export const ProjectInformations: FC<ProjectInformationsProps> = ({
  className,
}) => {
  return (
    <div className={classNames("absolute bottom-0 z-[3] inset-x-0", className)}>
      <div className="container grid grid-cols-4 gap-x-[70px]">
        {INFORMATIONS.map((information, index) => (
          <ul
            key={index}
            className="flex flex-col gap-y-5 border-r-[2px] border-r-[#2D2D33] pb-[60px]"
          >
            <li className="flex items-center gap-x-[10px] text-xl text-[#A6A6AE] lg:-mr-5">
              <Icon icon={IconType.DIAMOND} />
              <span>Services</span>
            </li>
            {["UI UX Design", "Development"].map((item) => (
              <li key={item} className="text-base mt-2 text-white font-light">
                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
