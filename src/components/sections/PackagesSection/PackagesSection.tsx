import React from "react";
import { Icon, IconType } from "@/components/shared";
import PackageCard from "@/components/sections/PackagesSection/PackageCard";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { useTranslations } from "next-intl";

const packages = [
  {
    type: "PackageCardTitle1",
    features: [
      "PackageCardFeatures1-1",
      "PackageCardFeatures1-2",
      "PackageCardFeatures1-3",
      "PackageCardFeatures1-4",
      "PackageCardFeatures1-5",
    ],
    forWho: "PackageCardWho1",
    price: "0.00",
  },
  {
    type: "PackageCardTitle2",
    features: [
      "PackageCardFeatures2-1",
      "PackageCardFeatures2-2",
      "PackageCardFeatures2-3",
      "PackageCardFeatures2-4",
      "PackageCardFeatures2-5",
    ],
    forWho: "PackageCardWho2",
    price: "4.99",
  },
  {
    type: "PackageCardTitle3",
    features: [
      "PackageCardFeatures3-1",
      "PackageCardFeatures3-2",
      "PackageCardFeatures3-3",
      "PackageCardFeatures3-4",
      "PackageCardFeatures3-5",
    ],
    forWho: "PackageCardWho3",
    price: "29.99",
  },
];

const PackagesSection = () => {
  const t = useTranslations("Home");

  return (
    <div>
      <FadeIn className="mx-auto mt-20 max-w-[650px]">
        <Icon
          icon={IconType.UNLOCK}
          className="mx-auto h-14 w-14 object-contain"
        />
        <h6 className="mt-3 text-center text-[32px] font-semibold leading-[1.2] text-text lg:mt-4 lg:text-[48px]">
          {t("PackageTitle")}
        </h6>
      </FadeIn>
      <div className="mt-14 flex w-full gap-y-6 max-lg:mx-auto max-lg:max-w-[420px] max-lg:flex-col lg:mt-20">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            type={t(pkg.type)}
            features={pkg.features}
            forWho={t(pkg.forWho)}
            price={pkg.price}
          />
        ))}
      </div>
    </div>
  );
};

export default PackagesSection;
