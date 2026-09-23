import React from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { legalHref, toLegalLocale } from "@/content/legal";

// Privacy policy link shown on every form that submits personal data.
const FormPrivacyNotice = () => {
  const t = useTranslations("Shared");
  const locale = toLegalLocale(useLocale());

  return (
    <p className="text-[13px] leading-[1.6] text-[#60606B] md:text-[14px]">
      {t.rich("FormPrivacyNotice", {
        link: (chunks) => (
          <Link
            href={legalHref("privacy-policy", locale)}
            target="_blank"
            className="underline underline-offset-2 hover:text-[#111013]"
          >
            {chunks}
          </Link>
        ),
      })}
    </p>
  );
};

export default FormPrivacyNotice;
