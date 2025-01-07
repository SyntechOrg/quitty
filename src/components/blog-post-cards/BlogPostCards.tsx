"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "use-intl";
import blogimage1 from "../../../public/assets/images/blog-image1.png";
import blogimage2 from "../../../public/assets/images/blog-image2.png";
import blogimage3 from "../../../public/assets/images/blog-image3.png";
import blogimage4 from "../../../public/assets/images/blog-image4.png";
import blogimage5 from "../../../public/assets/images/blog-image5.png";
import blogimage6 from "../../../public/assets/images/blog-image6.png";
import blogimage7 from "../../../public/assets/images/blog-image7.png";
import blogimage8 from "../../../public/assets/images/blog-image8.png";
import blogimage9 from "../../../public/assets/images/blog-image9.png";
import blogimage10 from "../../../public/assets/images/blog-image10.png";
import { FadeIn } from "@/components/fade-in/FadeIn";

const blogPosts = [
  {
    id: 1,
    image: blogimage1,
    text: "BlogP-1-1",
    title: "BlogP-1",
    span: false,
    slug: "how-digital-receipt-data-can-enhance-card-linked-loyalty-programs",
  },
  {
    id: 2,
    image: blogimage2,
    text: "BlogP-2-1",
    title: "BlogP-2",
    span: false,
    slug: "how-digital-receipt-data-can-enhance-card-linked-loyalty-programs",
  },
  {
    id: 3,
    image: blogimage3,
    text: "BlogP-3-1",
    title: "BlogP-3",
    span: false,
    slug: "how-digital-receipt-data-can-enhance-card-linked-loyalty-programs",
  },
  {
    id: 4,
    image: blogimage4,
    text: "BlogP-4-1",
    title: "BlogP-4",
    span: false,
    slug: "how-digital-receipt-data-can-enhance-card-linked-loyalty-programs",
  },
  {
    id: 5,
    image: blogimage5,
    text: "BlogP-5-1",
    title: "BlogP-5",
    span: true,
    slug: "how-digital-receipt-data-can-enhance-card-linked-loyalty-programs",
  },
  {
    id: 6,
    image: blogimage6,
    text: "BlogP-6-1",
    title: "BlogP-7",
    span: false,
    slug: "how-digital-receipt-data-can-enhance-card-linked-loyalty-programs",
  },
  {
    id: 7,
    image: blogimage7,
    text: "BlogP-7-1",
    title: "BlogP-7",
    span: false,
    slug: "how-digital-receipt-data-can-enhance-card-linked-loyalty-programs",
  },
  {
    id: 8,
    image: blogimage8,
    text: "BlogP-8-1",
    title: "BlogP-8",
    span: false,
    slug: "how-digital-receipt-data-can-enhance-card-linked-loyalty-programs",
  },
  {
    id: 9,
    image: blogimage9,
    text: "BlogP-9-1",
    title: "BlogP-9",
    span: false,
    slug: "how-digital-receipt-data-can-enhance-card-linked-loyalty-programs",
  },
  {
    id: 10,
    image: blogimage10,
    text: "BlogP-10-1",
    title: "BlogP-10",
    span: true,
    slug: "how-digital-receipt-data-can-enhance-card-linked-loyalty-programs",
  },
];

const BlogPostCards = () => {
  const t = useTranslations("Blog");
  const localActive = useLocale();

  return (
    <div className="grid-cols-1s grid justify-between gap-[0.5%] pb-[200px] sm:pb-[150px] md:grid-cols-2 md:gap-[2%] lg:grid-cols-3 lg:gap-[2%]">
      {blogPosts.map((post) => (
        <Link
          key={post.id}
          className={`relative flex h-[410px] items-end justify-start duration-200 hover:opacity-90 active:opacity-95 ${
            post.span ? "lg:col-span-2" : ""
          }`}
          href={`/${localActive}/blogs/${post.slug}`}
        >
          <FadeIn className="absolute inset-0 z-[-1]">
            <Image
              src={post.image}
              alt="image"
              className="relative h-full w-full object-cover"
            />
          </FadeIn>
          <FadeIn className="w-[100%] bg-gradient-to-t from-[#101018] to-[#101018]/0 pb-[20px] pl-[20px] pt-[30px]">
            <p className="max-w-[90%] text-[14px] text-white opacity-[75%] lg:leading-[16px]">
              {t(post.text)}
            </p>
            <h1 className="max-w-[90%] text-[24px] font-[600] leading-[31px] text-white">
              {t(post.title)}
            </h1>
          </FadeIn>
        </Link>
      ))}
    </div>
  );
};

export default BlogPostCards;
