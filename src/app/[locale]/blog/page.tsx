import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import blogimage1 from "public/assets/images/blog-image1.png";
import blogimage2 from "public/assets/images/blog-image2.png";
import blogimage3 from "public/assets/images/blog-image3.png";
import blogimage4 from "public/assets/images/blog-image4.png";
import blogimage5 from "public/assets/images/blog-image5.png";
import blogimage6 from "public/assets/images/blog-image6.png";
import blogimage7 from "public/assets/images/blog-image7.png";
import blogimage8 from "public/assets/images/blog-image8.png";
import blogimage9 from "public/assets/images/blog-image9.png";
import blogimage10 from "public/assets/images/blog-image10.png";

const blogPosts = [
  {
    id: 1,
    image: blogimage1,
    text: "BlogP-1-1",
    title: "BlogP-1",
    span: false,
  },
  {
    id: 2,
    image: blogimage2,
    text: "BlogP-2-1",
    title: "BlogP-2",
    span: false,
  },
  {
    id: 3,
    image: blogimage3,
    text: "BlogP-3-1",
    title: "BlogP-3",
    span: false,
  },
  {
    id: 4,
    image: blogimage4,
    text: "BlogP-4-1",
    title: "BlogP-4",
    span: false,
  },
  {
    id: 5,
    image: blogimage5,
    text: "BlogP-5-1",
    title: "BlogP-5",
    span: true,
  },
  {
    id: 6,
    image: blogimage6,
    text: "BlogP-6-1",
    title: "BlogP-7",
    span: false,
  },
  {
    id: 7,
    image: blogimage7,
    text: "BlogP-7-1",
    title: "BlogP-7",
    span: false,
  },
  {
    id: 8,
    image: blogimage8,
    text: "BlogP-8-1",
    title: "BlogP-8",
    span: false,
  },
  {
    id: 9,
    image: blogimage9,
    text: "BlogP-9-1",
    title: "BlogP-9",
    span: false,
  },
  {
    id: 10,
    image: blogimage10,
    text: "BlogP-10-1",
    title: "BlogP-10",
    span: true,
  },
];

const BlogPage = () => {
  const t = useTranslations("Blog");
  return (
    <>
      <div className="container lg:mt-[200px] mt-[150px]">
        <h1 className="font-bold lg:text-[60px] text-[50px]">{t("Title")}</h1>
        <h5 className="lg:text-[18px] text-[16px] lg:mb-[200px] mb-[100px]">
          {t("UnderTitle")}
        </h5>
        <p className="text-[16px] mb-[20px]">
          <span className="font-[600]">{t("Pagination1")}</span>{" "}
          {t("Pagination2")}
        </p>

        <div className="lg:gap-[2%] sm:pb-[150px] pb-[200px] md:gap-[2%] gap-[0.5%] justify-between grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1s">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`relative h-[410px] flex items-end justify-start ${
                post.span ? "lg:col-span-2" : ""
              }`}
            >
              <Image
                src={post.image}
                alt=""
                className="absolute z-[-1] object-cover h-[100%]"
              />
              <div className="pl-[20px] pt-[30px] pb-[20px] w-[100%] bg-gradient-to-t from-[#101018] to-[#101018]/0">
                <p className="lg:leading-[16px] max-w-[90%] text-white opacity-[75%] text-[14px]">
                  {t(post.text)}
                </p>
                <h1 className="leading-[31px] max-w-[90%] text-white font-[600] text-[24px]">
                  {t(post.title)}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
