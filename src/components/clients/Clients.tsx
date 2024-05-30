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
  backgroundPrimary?: boolean;
};

export const ClientCard: FC<ClientCardProps> = ({
  logo,
  backgroundPrimary,
}) => {
  return (
    <div
      className={`${backgroundPrimary ? "bg-primary" : "bg-transparent"} relative flex h-[140px] w-full items-center justify-center
       border-y border-r border-[#35353C] font-medium last-of-type:border-l-0 lg:h-[180px]`}
    >
      <Icon icon={logo} className="h-[40px]" />
    </div>
  );
};

type ClientsProps = {
  backgroundPrimary?: boolean;
};

export const Clients: FC<ClientsProps> = ({ backgroundPrimary }) => {
  return (
    <div data-aos="fade-up" className="mx-auto max-w-[2100px]">
      <Carousel
        options={{
          slideClassName:
            "flex-0 flex-shrink-0 flex-grow-0 min-w-0 w-2/3 md:w-1/2 lg:w-1/5",
        }}
      >
        {CLIENTS.map((client) => (
          <ClientCard
            backgroundPrimary={backgroundPrimary}
            key={client.name}
            logo={client.logo}
          />
        ))}
      </Carousel>
    </div>
  );
};
