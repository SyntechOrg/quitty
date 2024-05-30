import classNames from 'classnames';
import { type FC } from 'react';
import { Icon, IconType } from '../shared';
import Link from 'next/link';

type ProjectInformationsProps = {
  expertise: string[];
  productType: string[];
  release: string[];
  services: string[];
  className?: string;
};

export const ProjectInformations: FC<ProjectInformationsProps> = ({
  expertise,
  productType,
  release,
  services,
  className,
}) => {
  const data = [
    {
      title: 'Services',
      items: services,
    },
    {
      title: 'Product type',
      items: productType,
    },
    {
      title: 'Expertise',
      items: expertise,
    },
    {
      title: 'Release',
      items: release,
    },
  ];

  return (
    <div
      className={classNames(
        'relative bottom-0 z-[3] inset-x-0 w-full mt-[25px] lg:mt-[50px]',
        className,
      )}
    >
      <div className="container grid w-full grid-cols-2 place-items-center gap-x-[70px] gap-y-4 lg:grid-cols-4 lg:place-items-start">
        {data.map((information, index) => (
          <ul
            key={index}
            className="flex h-full w-full flex-col gap-y-5 pb-[60px] max-lg:mx-auto max-lg:w-fit lg:border-r-[2px] lg:border-r-[#2D2D33]"
          >
            <li className="flex w-full items-center gap-x-[10px] text-xl text-[#A6A6AE] lg:-mr-5">
              <Icon icon={IconType.DIAMOND} />
              <span>{information.title}</span>
            </li>
            {information.items.map((item, i) => (
              <li
                key={`${item}-${i}`}
                className="mt-2 text-base font-light text-white"
              >
                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
