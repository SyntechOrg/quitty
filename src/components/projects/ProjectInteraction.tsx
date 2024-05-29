import { type FC } from "react";
import { IconType } from "../shared";
import { Image } from "../shared/image/Image";
import classNames from "classnames";
import companyLogo from "@/assets/images/interaction-company-logo.png";

type ProjectInteractionProps = {
  className?: string;
  interactions: {
    name: string;
    avatar: string | IconType | null;
    title: string;
    description: string;
    className?: string;
  }[];
};

export const ProjectInteraction: FC<ProjectInteractionProps> = ({
  interactions,
}) => {
  return (
    <div className="container flex flex-col gap-y-5 lg:gap-y-[60px] max-w-[1040px] mx-auto mt-[90px] lg:mt-[180px]">
      {interactions.map((interaction, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={`interaction-${index}-${interaction.name}`}
            className="flex gap-x-[25px] lg:gap-x-[50px]"
          >
            <div
              className={classNames(
                "lg:w-[90px] w-[45px] min-w-[45px] lg:min-w-[90px] h-[45px] lg:h-[90px] rounded-full overflow-hidden",
                isEven ? "bg-white text-[#121217]" : "bg-primary text-white"
              )}
            >
              {interaction.avatar ? (
                <Image src={interaction.avatar} alt="Interaction Avatar" />
              ) : (
                <Image src={companyLogo} alt="Interaction Avatar" />
              )}
            </div>
            <div className="flex-1">
              <p
                className={classNames(
                  "text-lg lg:text-xl font-bold lg:leading-[30px] ml-[30px] lg:ml-[60px] mb-[15px] lg:mb-[30px]",
                  isEven ? "text-white" : "text-primary"
                )}
              >
                {interaction.name}
              </p>
              <div
                className={classNames(
                  "lg:py-[50px] py-[25px] px-[30px] lg:px-[60px] relative text-sm lg:text-base rounded-lg w-full before:w-0 before:h-0 before:border-l-[15px] lg:before:border-l-[30px] before:border-l-transparent lg:before:border-r-[30px] before:border-r-[15px] before:border-r-transparent before:border-b-[35px] lg:before:border-b-[70px] before:absolute lg:before:top-[-30px] before:top-[-15px] before:left-[-15px] lg:before:left-[-30px] before:rotate-[-50deg]",
                  isEven
                    ? "bg-white text-[#121217] before:border-b-white"
                    : "bg-primary text-white before:border-b-primary"
                )}
              >
                {interaction.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
