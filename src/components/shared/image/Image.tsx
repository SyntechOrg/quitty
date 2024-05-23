import { type FC } from "react";
import { default as NextImage, ImageProps as NextImageProps } from "next/image";
import classNames from "classnames";

type ImageProps = {
  wrapperClassNames?: string;
} & NextImageProps;

export const Image: FC<ImageProps> = ({ wrapperClassNames, ...props }) => {
  return (
    <div className={classNames("relative w-full h-full", wrapperClassNames)}>
      <NextImage className="w-full h-full object-cover" {...props} />
    </div>
  );
};
