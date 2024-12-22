"use client";
import React, { useState } from "react";
import Image from "next/image";
import QamilLika from "../.././../public/assets/images/Qamil-Lika.png";
import LeoSahitaj from "../.././../public/assets/images/Leo-Sahitaj.png";
import LabiSahitaj from "../.././../public/assets/images/Labi-Sahitaj.png";
import FacebookIcon from "../../../public/assets/images/team-member-facebook-icon.png";
import YoutubeIcon from "../../../public/assets/images/team-member-youtube-icon.png";
import BeIcon from "../../../public/assets/images/team-member-be-icon.png";
import { useTranslations } from "next-intl";

const teamMembers = [
  {
    id: 1,
    name: "Leo Sahitaj",
    position: "Geschaftsfuhrer · IMAS Abbruch",
    description:
      "Leo is an architect and founding partner, providing flexible digital services.",
    socialMediaLink1: "https://www.google.com",
    socialMediaLink2: "https://www.google.com",
    socialMediaLink3: "https://www.google.com",
    src: LeoSahitaj,
    alt: "Team Member 1",
  },
  {
    id: 2,
    name: "Labi Sahitaj",
    position: "Geschaftsfuhrer · IMAS Abbruch",
    description:
      "Labi is an architect and founding partner, providing flexible digital services.",
    socialMediaLink1: "https://www.google.com",
    socialMediaLink2: "https://www.google.com",
    socialMediaLink3: "https://www.google.com",
    src: LabiSahitaj,
    alt: "Team Member 2",
  },
  {
    id: 3,
    name: "Qamil Lika",
    position: "Geschaftsfuhrer · IMAS Abbruch",
    description:
      "Qamil is an architect and founding partner, providing flexible digital services.",
    socialMediaLink1: "https://www.google.com",
    socialMediaLink2: "https://www.google.com",
    socialMediaLink3: "https://www.google.com",
    src: QamilLika,
    alt: "Team Member 3",
  },
];

const TeamSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const t = useTranslations("About");

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] mt-20 w-screen lg:mt-32">
      <div className="mx-auto w-[90%] max-w-[600px] lg:max-w-[1280px]">
        <p className="text-[16px] font-medium leading-[1.2] text-primary lg:text-[18px]">
          {t("ourTeam")}
        </p>
        <h4 className="mt-2 text-[24px] font-medium leading-[1.333] text-text lg:text-[32px]">
          {t("ourTeamText")}
        </h4>
      </div>
      <div className="mx-auto mt-9 flex w-[95%] max-w-[1660px] flex-col items-center gap-x-1.5 gap-y-6 lg:w-[99%] lg:flex-row">
        {teamMembers.map((item, index) => (
          <div
            key={item.id}
            className={`group flex h-full w-full flex-[1] flex-col overflow-hidden rounded-[60px]
            bg-text duration-500 ease-in-out max-lg:mx-auto max-lg:max-w-[400px] lg:flex-row
            ${
              hoveredIndex === index || (hoveredIndex === null && index === 0)
                ? "flex-[2]"
                : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`mt-auto flex flex-col justify-end duration-500 ease-in-out
              ${
                hoveredIndex === index || (hoveredIndex === null && index === 0)
                  ? "h-[210px] w-full px-8 pb-6 pt-8 opacity-100 lg:h-[240px] lg:p-6"
                  : "h-0 w-0 px-0 pb-0 pt-0 opacity-0"
              }`}
            >
              <div
                className={`transition-opacity delay-[400ms] ease-in-out
               ${
                 hoveredIndex === index ||
                 (hoveredIndex === null && index === 0)
                   ? "opacity-100 duration-200"
                   : "opacity-0 transition-none"
               }
              `}
              >
                <p className="text-[19px] font-bold leading-[1.2] text-white delay-200">
                  {item.name}
                </p>
                <p className="mt-0.5 text-[15px] leading-[1.4] text-white delay-200">
                  {item.position}
                </p>
                <p className="mt-2 text-[15px] leading-[1.4] text-white delay-200">
                  {item.description}
                </p>
                <div className="mt-3 flex gap-2">
                  <a
                    href={item.socialMediaLink1}
                    target="_blank"
                    rel="noreferrer"
                    className="max-h-[42px] max-w-[42px]"
                  >
                    <Image
                      src={FacebookIcon}
                      alt="social media icon"
                      className="h-full w-full object-contain"
                    />
                  </a>
                  <a
                    href={item.socialMediaLink2}
                    target="_blank"
                    rel="noreferrer"
                    className="max-h-[42px] max-w-[42px]"
                  >
                    <Image
                      src={YoutubeIcon}
                      alt="social media icon"
                      className="h-full w-full object-contain"
                    />
                  </a>
                  <a
                    href={item.socialMediaLink3}
                    target="_blank"
                    rel="noreferrer"
                    className="max-h-[42px] max-w-[42px]"
                  >
                    <Image
                      src={BeIcon}
                      alt="social media icon"
                      className="h-full w-full object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="h-full w-full max-lg:max-h-[350px]">
              <Image
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
