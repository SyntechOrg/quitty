import { type FC } from "react";
import { Carousel } from "../shared";

type ClientCardProps = {};

export const ClientCard: FC<ClientCardProps> = () => {
  return (
    <div className="w-full h-[180px] flex items-center justify-center relative font-medium border-r border-[#35353C] last-of-type:border-l-0 border-y">
      Logo
    </div>
  );
};

type ClientsProps = {};

export const Clients: FC<ClientsProps> = () => {
  return (
    <div className="py-[200px]">
      <Carousel>
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
      </Carousel>
    </div>
  );
};
