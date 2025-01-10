import { blogsEnglish, blogsDeutsch } from "../../../../../blogs";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/fade-in/FadeIn";
import { Metadata } from "next";
import Image from "next/image";
import "./page.css";
import Partners from "@/components/shared/partners/Partners";

interface Props {
  params: { slug: string; locale: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const isEnglish = params.locale === "en";

  const product = isEnglish
    ? blogsEnglish.find((post) => post.slug === slug)
    : blogsDeutsch.find((post) => post.slug === slug);

  return {
    title: `Syntech Solutions AG | ${product?.heroTitle}`,
    openGraph: {
      // images: product?.heroImage ? [product.heroImage] : [],
    },
  };
}

type PostPageProps = {
  params: {
    locale: string;
    slug: string;
  };
};

const PostPage = async ({ params }: PostPageProps) => {
  const { locale, slug } = params;
  const blogs = locale === "en" ? blogsEnglish : blogsDeutsch;

  const blog = blogs.find((proj) => proj.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="container">
      <FadeIn className="mt-[150px] w-full md:w-[70%] lg:mt-[200px]">
        <h1 className="text-[32px] font-medium leading-[1.2] text-[#111013] lg:text-[52px]">
          {blog.heroTitle}
        </h1>
        <p className="mt-3 text-[16px] leading-[1.5] text-[#161519] lg:mt-5 lg:text-[18px]">
          {blog.heroText}
        </p>
      </FadeIn>
      <FadeIn>
        {blogs.map((blog, index) => (
          <FadeIn key={index} className="blog-content">
            {blog.content.map((item, idx) => {
              if (item.type === "h2") {
                return <h2 key={idx}>{item.text}</h2>;
              }
              if (item.type === "h3") {
                return <h3 key={idx}>{item.text}</h3>;
              }
              if (item.type === "p") {
                return <p key={idx}>{item.text}</p>;
              }
              if (item.type === "image") {
                return (
                  <div className="image-wrapper" key={idx}>
                    <Image src={item.src} alt={item.alt} />
                  </div>
                );
              }
              return null;
            })}
          </FadeIn>
        ))}
      </FadeIn>
      <Partners />
    </div>
  );
};

export default PostPage;
