import { type FC } from "react";
import { Image } from "../shared/image/Image";
import classNames from "classnames";
import solutionAndChallenge1 from "@/assets/images/projects/project-1/solutionAndChallenge-1.png";
import solutionAndChallenge2 from "@/assets/images/projects/project-1/solutionAndChallenge-2.png";
import { StaticImageData } from "next/image";

type ItemProps = {
  title: string;
  description: string;
  imageUrl: string | StaticImageData | null;
  type: "challenge" | "solution";
};

export const Item: FC<ItemProps> = ({ title, description, imageUrl, type }) => {
  const isChallenge = type === "challenge";

  return (
    <div
      className={classNames(
        "flex lg:flex-row flex-col gap-y-[40px] lg:gap-x-[80px]",
        !isChallenge && "flex-row-reverse",
        !isChallenge && !imageUrl && "lg:mt-[-50px] mt-[-25px]"
      )}
    >
      <div className={classNames(imageUrl && "mt-[50px] lg:mt-[100px]")}>
        <div className="text-lg lg:text-2xl text-primary mb-[15px] lg:mb-[30px]">
          {isChallenge ? "MAIN CHALLENGE" : "OUR SOLUTION"}
        </div>
        <div className="lg:leading-[70px] text-[25px] lg:text-[50px] max-w-[560px] mb-[25px] lg:mb-[50px]">
          {title}
        </div>
        <p className="lg:text-[18px] lg:leading-[28px] max-w-[560px] w-full text-base">
          {description}
        </p>
      </div>
      {imageUrl && (
        <Image
          wrapperClassNames="w-full max-w-[660px] h-[270px] lg:h-[540px] rounded-[40px] overflow-hidden"
          src={imageUrl}
          alt={title}
        />
      )}
    </div>
  );
};

type ChallengeAndSolutionProps = {
  challenge: {
    title: string;
    description: string;
    imageUrl: string | null;
  };
  solution: {
    title: string;
    description: string;
    imageUrl: string | null;
  };
};

export const ChallengeAndSolution: FC<ChallengeAndSolutionProps> = ({
  challenge,
  solution,
}) => {
  return (
    <div className="container mt-[40px] lg:mt-[80px] flex flex-col gap-y-[100px] pb-[80px] lg:gap-y-[200px] lg:pb-[165px]">
      <Item {...challenge} imageUrl={solutionAndChallenge1} type="challenge" />
      <Item {...solution} imageUrl={solutionAndChallenge2} type="solution" />
    </div>
  );
};
