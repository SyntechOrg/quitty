import React from "react";
import Image from "next/image";
import phone from "public/assets/images/TransformPhone.png";
import flame from "public/assets/images/flameIcon.png";
import apple from "public/assets/images/apple-logo.png"
import play from "public/assets/images/google-play-logo.png";
import { useTranslations } from "next-intl";
import bgBlur from "public/assets/images/bgBlur.png";


const Transform = () => {
    const t = useTranslations("Shared");
    return(
        <>
        <div className="relative pb-[0px] border-l-2 border-t-2 border-l-[#b6d0f8] border-t-[#b6d0f8] p-4 lg:mt-[120px] mt-[80px] container flex lg:flex-row flex-col lg:justify-center justify-end lg:items-end items-center lg:gap-[5%] bg-[#E6F2F4] rounded-[80px] lg:pt-[100px] h-[auto] pt-[50px]">
            <Image 
                src={bgBlur}
                alt=""
                className="absolute lg:w-[88%] w-[100%] h-[100%] top-0 right-0"
            />

            <div className="z-10 flex flex-col lg:gap-[30px] gap-[17px] mb-[10%] lg:items-start items-center ">
                <h1 className="lg:max-w-[550px] text-[36px] font-medium lg:leading-[64px] leading-[50px] lg:text-left text-center">{t('TransformTitle')}</h1>
                <div className="flex flex-col lg:gap-[25px] gap-[20px] w-fit">
                    <div className="flex lg:justify-start justify-center items-start gap-[10px] w-fit">
                        <Image 
                        src={flame}
                        alt=""
                        className="w-[22px] mt-[5px]"
                        />
                        <p className="text-[16px]">{t('TransformP1')}</p>
                    </div>
                    <div className="flex lg:justify-start justify-center items-start gap-[10px] w-fit">
                        <Image 
                        src={flame}
                        alt=""
                        className="w-[22px] mt-[5px]"
                        />
                        <p className="text-[16px]">{t('TransformP2')}</p>
                    </div>
                    <div className="flex lg:justify-start justify-center items-start gap-[10px] w-fit">
                        <Image 
                        src={flame}
                        alt=""
                        className="w-[22px] mt-[5px]"
                        />
                        <p className="text-[16px]">{t('TransformP3')}</p>
                    </div>
                </div>

                <div className="flex lg:justify-start lg:flex-row flex-col justify-center items-center gap-[20px] w-fit">
                    <button className="border border-primary hover:bg-primary duration-150 w-[200px] h-[60px] border border-color-[#00C9A5] rounded-full flex justify-center items-center gap-[10px]">
                    <Image 
                        src={apple}
                        alt=""
                        className="w-[30px]"
                        />
                        App Store
                    </button>
                    <button className="border border-primary hover:bg-primary duration-150 w-[200px] h-[60px] border border-color-[#00C9A5] rounded-full flex justify-center items-center gap-[10px]">
                    <Image 
                        src={play}
                        alt=""
                        className="w-[30px]"
                        />
                        Google Play
                    </button>
                </div>
                
            </div>
            <Image 
            src={phone}
            alt="Tranform Phone"
            className="lg:w-[39%] w-[300px] z-10" 
            />
        </div>
        </>
    )
};

export default Transform;