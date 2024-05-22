import { type FC } from "react";
import { Carousel } from "../shared";

type ClientCardProps = {};

export const ClientCard: FC<ClientCardProps> = () => {
  return (
    <div className="w-full h-[140px] lg:h-[180px] flex items-center justify-center relative font-medium border-r border-[#35353C] last-of-type:border-l-0 border-y">
      Logo
    </div>
  );
};

type ClientsProps = {};

export const Clients: FC<ClientsProps> = () => {
  return (
    <div className="lg:py-[200px] py-[100px]">
      <Carousel
        options={{
          slideClassName:
            "flex-0 flex-shrink-0 flex-grow-0 min-w-0 w-2/3 md:w-1/2 lg:w-1/5",
        }}
      >
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
