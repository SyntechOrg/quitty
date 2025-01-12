"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Partners from "@/components/shared/partners/Partners";
import { FadeIn } from "@/components/fade-in/FadeIn";
import BlogPostCards from "@/components/blog-post-cards/BlogPostCards";
import withAuth from "@/components/hocs/withAuth";

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
