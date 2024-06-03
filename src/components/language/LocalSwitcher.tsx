"use client";
import React, { useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "use-intl";
import { Icon, IconType } from "@/components/shared";
import Image from "next/image";
import UKFlag from "../../../public/assets/images/uk-flag.png";
import CHFlag from "../../../public/assets/images/ch-flag.png";

const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const [isLanguageSubMenuOpen, setIsLanguageSubMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const pathnameArray = pathname
    .split("/")
    .filter((path) => path !== "de" && path !== "en" && path !== "");

  const localActive = useLocale();

  console.log(pathname);
  const onSelectChange = (value: string) => {
    startTransition(() => {
      router.replace(`/${value}/${pathnameArray.join("/")}`);
    });
  };

  return (
    <div className="relative text-center text-[14px] text-text lg:mr-4 lg:pr-1">
      <div
        onClick={() => setIsLanguageSubMenuOpen(!isLanguageSubMenuOpen)}
        className={`${isLanguageSubMenuOpen ? "opacity-60" : "opacity-100 hover:opacity-70 active:opacity-60"} 
          flex cursor-pointer items-center `}
      >
        <span className="flex items-center justify-center px-2">
          {localActive === "en" ? (
            <Image
              src={UKFlag}
              alt="uk-flag"
              className="h-full max-h-[22px] w-full max-w-[32px] rounded-md object-contain"
            />
          ) : (
            <Image
              src={CHFlag}
              alt="ch-flag"
              className="h-full max-h-[22px] w-full max-w-[32px] rounded-md object-contain"
            />
          )}
        </span>
        <Icon icon={IconType.DROPDOWN} />
      </div>
      {isLanguageSubMenuOpen && (
        <div className="absolute left-[8px] top-10 flex flex-col items-center justify-center rounded-md">
          {localActive === "en" ? (
            <button
              className="hover:opacity-70 active:opacity-60"
              onClick={() => {
                onSelectChange("de");
                setIsLanguageSubMenuOpen(false);
              }}
              disabled={isPending}
            >
              <Image
                src={CHFlag}
                alt="ch-flag"
                className="h-full max-h-[22px] w-full max-w-[32px] rounded-md object-contain"
              />
            </button>
          ) : (
            <button
              className="hover:opacity-70 active:opacity-60"
              onClick={() => {
                onSelectChange("en");
                setIsLanguageSubMenuOpen(false);
              }}
              disabled={isPending}
            >
              <Image
                src={UKFlag}
                alt="uk-flag"
                className="h-full max-h-[22px] w-full max-w-[32px] rounded-md object-contain"
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LocalSwitcher;
