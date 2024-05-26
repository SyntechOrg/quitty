import { type FC } from "react";
import { Image } from "../shared/image/Image";
import classNames from "classnames";

type ItemProps = {
  title: string;
  description: string;
  imageUrl: string | null;
  type: "challenge" | "solution";
};

export const Item: FC<ItemProps> = ({ title, description, imageUrl, type }) => {
  const isChallenge = type === "challenge";

  return (
    <div
      className={classNames(
        "flex",
        !isChallenge && "flex-row-reverse",
        !isChallenge && !imageUrl && "mt-[-50px]"
      )}
    >
      <div>
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
      {imageUrl && <Image src={imageUrl} alt={title} />}
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
    <div className="container mt-[80px]">
      <Item {...challenge} type="challenge" />
      <Item {...solution} type="solution" />
    </div>
  );
};
