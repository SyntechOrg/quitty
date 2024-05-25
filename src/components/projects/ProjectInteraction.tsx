import { type FC } from "react";
import { Icon, IconType } from "../shared";
import { Image } from "../shared/image/Image";
import classNames from "classnames";

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
    <div className="container flex flex-col gap-y-[60px] max-w-[1040px] mx-auto mt-[180px]">
      {interactions.map((interaction, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={`interaction-${index}-${interaction.name}`}
            className="flex gap-x-[50px]"
          >
            <div
              className={classNames(
                "w-[90px] min-w-[90px] h-[90px] rounded-full",
                isEven ? "bg-white text-[#121217]" : "bg-primary text-white"
              )}
            >
              {interaction.avatar &&
                (typeof interaction.avatar === "string" ? (
                  <Image src={interaction.avatar} alt="Interaction Avatar" />
                ) : (
                  <Icon icon={interaction.avatar as IconType} />
                ))}
            </div>
            <div className="flex-1">
              <p
                className={classNames(
                  "text-xl font-bold leading-[30px] ml-[60px] mb-[30px]",
                  isEven ? "text-white" : "text-primary"
                )}
              >
                {interaction.name}
              </p>
              <div
                className={classNames(
                  "py-[50px] px-[60px] relative rounded-lg w-full before:w-0 before:h-0 before:border-l-[30px] before:border-l-transparent before:border-r-[30px] before:border-r-transparent before:border-b-[70px] before:border-b-white before:absolute before:top-[-30px] before:left-[-30px] before:rotate-[-50deg]",
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
