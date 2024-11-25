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

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      image: blogimage1,
      text: "Sep 26, 2023 · 9 min read",
      title:
        "How Retailers Can Leverage Existing Tech to Offer Digital Receipts to Customers",
      span: false,
    },
    {
      id: 2,
      image: blogimage2,
      text: "Sep 26, 2023 · 9 min read",
      title:
        "How Digital Receipts Can Transform Stadium Operations and Fan Loyalty",
      span: false,
    },
    {
      id: 3,
      image: blogimage3,
      text: "Sep 26, 2023 · 9 min read",
      title:
        "Enabling a Paperless Experience at Checkout with a Multi-Touch Solution",
      span: false,
    },
    {
      id: 4,
      image: blogimage4,
      text: "Sep 26, 2023 · 9 min read",
      title: "The Role of Digital Receipts and Tech in Retail Adaptation",
      span: false,
    },
    {
      id: 5,
      image: blogimage5,
      text: "Sep 26, 2023 · 9 min read",
      title: "Paperless Potential: Why Kiosks Are Yet to Go Fully Digital",
      span: true,
    },
    {
      id: 6,
      image: blogimage6,
      text: "Sep 26, 2023 · 9 min read",
      title: "A Step-by-Step Guide to Getting Started with Quitty",
      span: false,
    },
    {
      id: 7,
      image: blogimage7,
      text: "Sep 26, 2023 · 9 min read",
      title: "Digital Receipts: A Greener, More Convenient Way to Shop",
      span: false,
    },
    {
      id: 8,
      image: blogimage8,
      text: "Sep 26, 2023 · 9 min read",
      title: "Four Ways Merchants Can Fully Transition to Digital Receipts",
      span: false,
    },
    {
      id: 9,
      image: blogimage9,
      text: "Sep 26, 2023 · 9 min read",
      title: "Switzerland Is Ready to Kill the Paper Receipt",
      span: false,
    },
    {
      id: 10,
      image: blogimage10,
      text: "Sep 26, 2023 · 9 min read",
      title:
        "How Digital Receipt Data Can Enhance Card-Linked Loyalty Programs",
      span: true,
    },
  ];

  const t = useTranslations("Blog");
  return (
    <>
      <div className="container lg:mt-[200px] mt-[150px]">
        <h1 className="font-bold lg:text-[60px] text-[50px]">Blog</h1>
        <h5 className="lg:text-[18px] text-[16px] mb-[50px]">
          Discover insights and ideas—dive in and get inspired!
        </h5>

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
                <p className="max-w-[90%] text-white opacity-[75%] text-[14px]">
                  {post.text}
                </p>
                <h1 className="max-w-[90%] text-white font-[600] text-[24px]">
                  {post.title}
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
