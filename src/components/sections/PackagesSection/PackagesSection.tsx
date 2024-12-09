import React from "react";
import { Icon, IconType } from "@/components/shared";
import PackageCard from "@/components/sections/PackagesSection/PackageCard";
import {FadeIn} from "@/components/fade-in/FadeIn";

const packages = [
  {
    type: "Basic Package",
    features: [
      "Unlimited receipt storage",
      "Advanced spending insights and analytics",
      "Priority access to partnered brand discounts",
      "Priority customer support",
      "Customizable receipt categories",
    ],
    forWho: "(For Individuals)",
    price: "0.00",
  },
  {
    type: "Pro Package",
    features: [
      "Unlimited receipt storage",
      "Advanced spending insights and analytics",
      "Priority access to partnered brand discounts",
      "Priority customer support",
      "Customizable receipt categories",
    ],
    forWho: "(For Power Users)",
    price: "4.99",
  },
  {
    type: "Business Package",
    features: [
      "Unlimited receipt storage",
      "Advanced spending insights and analytics",
      "Priority access to partnered brand discounts",
      "Priority customer support",
      "Customizable receipt categories",
    ],
    forWho: "(For Retailers and Companies)",
    price: "29.99",
  },
];

const PackagesSection = () => {
  return (
    <div>
      <FadeIn className="mx-auto mt-20 max-w-[500px]">
        <Icon
          icon={IconType.UNLOCK}
          className="mx-auto h-14 w-14 object-contain"
        />
        <h6 className="mt-3 text-center text-[32px] font-semibold leading-[1.2] text-text lg:mt-4 lg:text-[52px]">
          Unlock all benefits
        </h6>
      </FadeIn>
      <div className="mt-14 flex w-full gap-y-6 max-lg:mx-auto max-lg:max-w-[420px] max-lg:flex-col lg:mt-20">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            type={pkg.type}
            features={pkg.features}
            forWho={pkg.forWho}
            price={pkg.price}
          />
        ))}
      </div>
    </div>
  );
};

export default PackagesSection;
