import React from "react";
import Image from "next/image";
import tinder from 'public/assets/images/tinder-1 1.png';
import { useTranslations } from "next-intl";

const Images = [
    {src: tinder, alt: "tinder logo"},
    {src: tinder, alt: "tinder logo"},
    {src: tinder, alt: "tinder logo"},
    {src: tinder, alt: "tinder logo"},
    {src: tinder, alt: "tinder logo"},
    {src: tinder, alt: "tinder logo"},
    {src: tinder, alt: "tinder logo"},
    {src: tinder, alt: "tinder logo"},
    {src: tinder, alt: "tinder logo"},
    {src: tinder, alt: "tinder logo"},
    {src: tinder, alt: "tinder logo"},
    {src: tinder, alt: "tinder logo"}
];



const Partners = () => {
    const t = useTranslations("Shared");
    
    return (
        <div className="container flex flex-col justify-center items-center gap-[50px] lg:mt-[100px] mt-[60px]">
            <h1>{t('PartnersTitle')}</h1>
            <div className="w-[100%] flex justify-between items-center flex-wrap">
                {Images.map((image, index) => (
                <div className="flex justify-start items-center lg:w-[184px] w-[133px] h-[74px]">
                <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className=""
                    width={100}
                    height={100}
                />
                </div>
            ))}
 
            </div>
        </div>
    )
}

export default Partners;