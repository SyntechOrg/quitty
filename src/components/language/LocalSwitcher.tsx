"use client";
import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "use-intl";
const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const [isLanguageSubMenuOpen, setIsLanguageSubMenuOpen] = useState(false);
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (value: string) => {
    startTransition(() => {
      router.replace(`/${value}`);
    });
  };

  return (
    <div className="relative text-center text-[14px] text-text lg:mr-4 lg:pr-1">
      <span
        className={`${isLanguageSubMenuOpen ? "bg-primary/50" : ""} 
        flex cursor-pointer items-center justify-center rounded-[30px] border border-primary px-4 py-2 leading-[1] hover:bg-primary/75 active:bg-primary/30`}
        onClick={() => setIsLanguageSubMenuOpen(!isLanguageSubMenuOpen)}
      >
        {localActive}
      </span>
      {isLanguageSubMenuOpen && (
        <div className="absolute top-8 flex flex-col items-center justify-center gap-1 rounded-xl border border-gray bg-background p-1">
          <button
            onClick={() => {
              onSelectChange("en");
              setIsLanguageSubMenuOpen(false);
            }}
            className={`${localActive === "en" ? "bg-primary/90" : ""} cursor-pointer rounded-lg px-4 py-1 duration-150 hover:bg-primary/75 active:bg-primary/50`}
            disabled={isPending}
          >
            en
          </button>
          <button
            onClick={() => {
              onSelectChange("de");
              setIsLanguageSubMenuOpen(false);
            }}
            className={`${localActive === "de" ? "bg-primary/90" : ""} cursor-pointer rounded-lg px-4 py-1 duration-150 hover:bg-primary/75 active:bg-primary/50`}
            disabled={isPending}
          >
            de
          </button>
        </div>
      )}
    </div>
  );
};

export default LocalSwitcher;
