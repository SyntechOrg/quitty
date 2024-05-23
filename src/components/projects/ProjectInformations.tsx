import classNames from "classnames";
import { type FC } from "react";

type ProjectInformationsProps = {
  className?: string;
};

export const ProjectInformations: FC<ProjectInformationsProps> = ({
  className,
}) => {
  return (
    <div className={classNames(className)}>
      <ul></ul>
    </div>
  );
};
