"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Partners from "@/components/shared/partners/Partners";
import { FadeIn } from "@/components/fade-in/FadeIn";
import BlogPostCards from "@/components/blog-post-cards/BlogPostCards";
import withAuth from "@/components/hocs/withAuth";

// export async function generateMetadata({
//   params,
// }: {
//   params: { locale: string };
// }): Promise<Metadata> {
//   const lang = params.locale || "de";
//
//   const metadataMap = {
//     en: {
//       title: "Quitty Blog – Insights and Trends in Retail",
//       description: "Explore the latest insights, trends, and innovations in retail sustainability, digital transformation, and customer engagement.",
//     },
//     de: {
//       title: "Quitty Blog – Einblicke und Trends im Einzelhandel",
//       description: "Entdecken Sie die neuesten Einblicke, Trends und Innovationen in den Bereichen Einzelhandelsnachhaltigkeit, digitale Transformation und Kundenbindung.",
//     },
//   };
//
//   return metadataMap[lang] || metadataMap.de;
// }

const BlogPage = () => {
  const t = useTranslations("Blog");

  return (
    <div className="container">
      <div className="mt-[150px] lg:mt-[200px]">
        <FadeIn>
          <h1 className="text-[50px] font-medium lg:text-[60px]">
            {t("Title")}
          </h1>
          <h5 className="mb-[100px] text-[16px] lg:mb-[200px] lg:text-[18px]">
            {t("UnderTitle")}
          </h5>
        </FadeIn>
      </div>
      <BlogPostCards />
      <Partners />
    </div>
  );
};

export default withAuth(BlogPage);
