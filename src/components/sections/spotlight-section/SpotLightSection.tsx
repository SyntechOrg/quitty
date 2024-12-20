"use client";
import React from "react";
import { FadeIn } from "@/components/fade-in/FadeIn";
import Image from "next/image";
import Avatar1 from "../../../../public/assets/images/avatar-1.png";
import Avatar2 from "../../../../public/assets/images/avatar-2.png";
import ChatSupport from "../../../../public/assets/images/chat-support.png";
import ChatSupportDE from "../../../../public/assets/images/chat-support-de.png";
import OrderMockup from "../../../../public/assets/images/order-mockup.png";
import FiveStars from "../../../../public/assets/images/5-stars.png";
import SpotlightIphoneMockup from "../../../../public/assets/images/spotlight-iphone-mockup.png";
import { Button } from "@/components/shared";
import { useTranslations } from "next-intl";
import { useLocale } from "use-intl";

const SpotLightSection = () => {
  const t = useTranslations("Home");

  const localActive = useLocale();

  return (
    <div className="mt-[150px] lg:mt-[200px]">
      <FadeIn className="mx-auto max-w-[700px] text-center text-text">
        <h6 className="text-[32px] font-medium leading-[1.4] lg:text-[48px]">
          {t("SpotlightTitle")}
        </h6>
      </FadeIn>
      <FadeIn className="mt-[60px] grid grid-cols-1 gap-8 max-lg:mx-auto max-lg:max-w-[500px] lg:mt-[100px] lg:grid-cols-3">
        <div
          className="flex h-full min-h-[420px] w-full flex-col justify-between rounded-[60px] bg-[#3F7CF3]
         duration-200 ease-in-out hover:-rotate-3"
        >
          <div className="ml-auto mr-9 mt-6">
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-[60px] font-semibold leading-[1.3] text-primary">
                  {">"}
                </p>
                <p className="text-[54px] font-semibold leading-[1.3] text-white">
                  12K
                </p>
              </div>
            </div>
            <p className="text-right text-[16px] leading-[1.5] text-white">
              {t("SpotCard1Users")}
            </p>
          </div>
          <div className="px-8 pb-8">
            <div>
              <div className="flex w-fit items-center space-x-[-10%]">
                <Image
                  src={Avatar1}
                  alt="avatar"
                  className="h-[50px] w-[50px] object-contain"
                />
                <Image
                  src={Avatar2}
                  alt="avatar"
                  className="h-[50px] w-[50px] object-contain"
                />
                <Image
                  src={Avatar1}
                  alt="avatar"
                  className="h-[50px] w-[50px] object-contain"
                />
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white">
                  <p className="text-[38px] leading-[0] text-[#111]">+</p>
                </div>
              </div>
              <p className="mt-1 text-[16px] leading-[1.4] text-white">
                {t("SpotCard1Text")}
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full min-h-[420px] w-full flex-col justify-between rounded-[60px] bg-[#F4F4F4] duration-200 ease-in-out hover:-rotate-3">
          <div className="px-7 py-7">
            <p className="text-[52px] font-semibold leading-[1.4] text-[#111]">
              24 <span className="text-[#3f7cf3]"> / </span> 7
            </p>
            <p className="text-[16px] font-medium leading-[24px] text-[#111]">
              {t("SpotCard2Support")}
            </p>
          </div>
          <div>
            {localActive === "en" ? (
              <Image
                src={ChatSupport}
                alt="chat-support"
                className="h-full w-full object-contain"
              />
            ) : (
              <Image
                src={ChatSupportDE}
                alt="chat-support"
                className="h-full w-full object-contain"
              />
            )}
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 201, 165, 0.00) 0%, rgba(63, 124, 243, 0.90) 65%)",
            boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.07)",
          }}
          className="row-span-1 flex h-full min-h-[420px] w-full flex-col justify-between gap-6 rounded-[60px] py-8 duration-200
          ease-in-out hover:rotate-3 lg:row-span-2 lg:py-16"
        >
          <div className="px-7">
            <p className="text-[24px] font-semibold leading-[1.4] text-[#111] lg:text-[26px]">
              {t("SpotCard3ReceiptTitle")}
            </p>
            <p className="mt-4 text-[16px] leading-[1.45] text-[#4f4f4f]">
              {t("SpotCard3ReceiptText")}
            </p>
          </div>
          <div>
            <Image src={SpotlightIphoneMockup} alt="spotlight-iphone-mockup" />
          </div>
          <div className="px-7">
            <Button
              to={"/"}
              className="mx-auto h-[58px] w-full bg-primary !px-3 text-[20px] leading-[1.5] text-white hover:bg-primary/80
              active:bg-primary/90 lg:text-[24px]"
            >
              {t("SpotCard3ReceiptButton")}
            </Button>
          </div>
        </div>
        <div
          className="relative col-span-1 h-full min-h-[420px] w-full overflow-hidden rounded-[60px] bg-white duration-200
         ease-in-out hover:-rotate-3 lg:col-span-2"
        >
          <div className="flex h-full w-full flex-col justify-between py-8 max-lg:px-9 lg:w-[56%] lg:py-14 lg:pl-[47px]">
            <div>
              <p className="text-[24px] font-semibold leading-[1.3] text-[#111] lg:text-[28px] lg:leading-[1.5]">
                {t("SpotCard4ReceiptTitle")}
              </p>
              <p className="mt-3 text-[16px] leading-[1.4] text-[#4f4f4f] lg:mt-4 lg:leading-[1.5]">
                {t("SpotCard4ReceiptText")}
              </p>
            </div>
            <div>
              <p className="text-[21px] font-bold leading-[1.5] text-[#111]">
                4.5 / 5.0
              </p>
              <div className="mt-1">
                <Image
                  src={FiveStars}
                  alt="five-stars"
                  className="h-full max-h-[18px] w-fit object-contain"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 lg:bottom-[-10px] lg:right-[-10px] lg:w-[43%]">
            <Image
              src={OrderMockup}
              alt="order-mockup"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default SpotLightSection;
