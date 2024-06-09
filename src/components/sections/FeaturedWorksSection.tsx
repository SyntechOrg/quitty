"use client";
import React from "react";
import { Button, Icon, IconType } from "@/components/shared";
import AllProjects, {
  AllProjectsHeader,
} from "@/components/sections/AllProjects";
import { FadeIn } from "../fade-in/FadeIn";
import { useTranslations } from "next-intl";

const FeaturedWorksSection = () => {
  const t = useTranslations("Shared");

  return (
    <FadeIn>
      <AllProjectsHeader />
      <AllProjects itemsToShow={6} />
      <div className="group mt-[40px] flex items-center justify-center md:hidden">
        <Button to="/portfolio">{t("All Cases")}</Button>
        <Button to="/portfolio" className="btn2">
          <Icon icon={IconType.ARROW} />
        </Button>
      </div>
    </FadeIn>
  );
};

export default FeaturedWorksSection;
