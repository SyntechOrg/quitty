import React from "react";
import { Button, Icon, IconType } from "../shared";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full text-white pb-[26px] lg:pb-[71px]">
      <div className="border-b-[#35353C] border-b">
        <div className="container flex justify-center lg:flex-row flex-col">
          <div className="lg:border-r lg:border-r-[#35353C] lg:py-[90px] py-[46px] lg:px-0">
            <p className="lg:text-[36px] text-[30px] leading-[45px] lg:leading-[56px] max-w-[410px]">
              Let’s talk about your Digital Experience
            </p>
            <div className="flex mt-8">
              <Button>Work with us</Button>
              <Button>
                <Icon icon={IconType.ARROW} />
              </Button>
            </div>
          </div>
          <div className="lg:px-[100px] flex justify-between flex-1 lg:border-r lg:border-r-[#35353C] py-[50px] lg:py-[90px] border-y border-y-[#35353C]">
            <ul className="flex flex-col gap-y-5">
              <li className="flex items-center gap-x-[10px] text-sm lg:-mr-5">
                <Icon icon={IconType.DIAMOND} />
                <span>SITEMAP</span>
              </li>
              {["About", "Portfolio", "Services", "Contact"].map((item) => (
                <li key={item} className="text-sm mt-2 text-text font-light">
                  <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-y-5">
              <li className="flex items-center gap-x-[10px] text-sm lg:-mr-5">
                <Icon icon={IconType.DIAMOND} />
                <span>GET IN TOUCH</span>
              </li>
              {["Instagram", "Facebook", "LinkedIn", "Tiktok"].map((item) => (
                <li key={item} className="text-sm mt-2 text-text font-light">
                  <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-[90px] lg:pl-[34px]">
            <p className="flex items-center gap-x-[10px] text-sm lg:-mr-5">
              <Icon icon={IconType.DIAMOND} />
              <span>STAY IN THE LOOP</span>
            </p>
            <p className="text-text text-sm font-light leading-[70px]">
              Subscribe to our newsletter
            </p>
            <div className="flex items-center border-b border-b-[#35353C] p-1 pl-4 w-full">
              <input
                type="text"
                className="bg-transparent focus:outline-none text-text"
                placeholder="Enter your e-mail"
              />
              <Button className="ml-auto">
                <Icon icon={IconType.ARROW} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-center pt-5 lg:pt-[50px] pb-[30px] lg:px-[30px] lg:flex-row flex-col">
        <Icon
          icon={IconType.LOGO_BACKGROUND}
          className="w-full h-[41px] lg:h-auto"
        />
      </div>
      <div className="container flex items-center gap-x-[30px] flex-col lg:flex-row">
        <div className="flex items-center justify-center gap-x-7">
          <Icon icon={IconType.LOGO} />
          <span className="text-sm leading-[59px] hidden lg:inline-block">
            © {new Date().getFullYear()}
          </span>
        </div>
        <div className="bg-[#0000FF] h-[1px] flex-1 hidden lg:block"></div>
        <ul className="text-sm leading-[30px] gap-x-[40px] hidden lg:flex">
          <li>Terms and Conditions</li>
          <li>Impressum</li>
        </ul>
        <div className="flex items-center text-[10px] lg:hidden justify-between w-full gap-x-[10px]">
          <span className="">© {new Date().getFullYear()}</span>
          <div className="bg-[#0000FF] h-[1px] flex-1"></div>
          <ul className="gap-x-[16px] flex">
            <li>Terms and Conditions</li>
            <li>Impressum</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
