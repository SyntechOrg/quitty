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
        "flex gap-x-[80px]",
        !isChallenge && "flex-row-reverse",
        !isChallenge && !imageUrl && "mt-[-50px]"
      )}
    >
      <div className={classNames(imageUrl && "mt-[100px]")}>
        <div className="text-2xl text-primary mb-[30px]">
          {isChallenge ? "MAIN CHALLENGE" : "OUR SOLUTION"}
        </div>
        <div className="leading-[70px] text-[50px] max-w-[560px] mb-[50px]">
          {title}
        </div>
        <p className="text-[18px] leading-[28px] max-w-[560px]">
          {description}
        </p>
      </div>
      {imageUrl && (
        <Image
          wrapperClassNames="w-[660px] h-[540px] rounded-[40px] overflow-hidden"
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
    <div className="container mt-[80px] flex flex-col gap-y-[200px] pb-[165px]">
      <Item {...challenge} imageUrl={solutionAndChallenge1} type="challenge" />
      <Item {...solution} imageUrl={solutionAndChallenge2} type="solution" />
    </div>
  );
};
