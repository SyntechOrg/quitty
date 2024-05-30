import { type FC } from "react";
import { Carousel, Icon, IconType } from "../shared";

const CLIENTS: {
  name: string;
  logo: IconType;
}[] = [
  {
    name: "Spandoekman",
    logo: IconType.SPANDOEKMAN_LOGO,
  },
  {
    name: "Reputy",
    logo: IconType.REPUTY_LOGO,
  },
  { name: "Quitty", logo: IconType.QUITTY_LOGO },
  {
    name: "Soxey",
    logo: IconType.SOXEY_LOGO,
  },
  {
    name: "Qonsultant",
    logo: IconType.QONSULTANT_LOGO,
  },
  { name: "Facedrip", logo: IconType.FACEDRIP_LOGO },
  {
    name: "Ele Uznach",
    logo: IconType.ELE_UZNACH_LOGO,
  },
];

type ClientCardProps = {
  logo: IconType;
};

export const ClientCard: FC<ClientCardProps> = ({ logo }) => {
  return (
    <div className="w-full h-[140px] lg:h-[180px] flex items-center justify-center relative font-medium border-r border-[#35353C] last-of-type:border-l-0 border-y">
      <Icon icon={logo} className="h-[40px]" />
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
        {CLIENTS.map((client) => (
          <ClientCard key={client.name} logo={client.logo} />
        ))}
      </Carousel>
    </div>
  );
};
