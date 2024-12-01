import HomeHero from "@/components/sections/home-hero/HomeHero";
import { FadeIn } from "@/components/fade-in/FadeIn";
import InsightsSection from "@/components/sections/insights-section/InsightsSection";
import PromoSection from "@/components/sections/promo-section/PromoSection";

const Home = () => {
  return (
    <div className="container relative">
      <HomeHero />
      <FadeIn className="mx-auto max-w-[780px] text-center text-text">
        <h2 className="text-[24px] font-medium leading-[1.4] lg:text-[58px]">
          Changing the way you Easily Manage your Receipts
        </h2>
        <p className="mt-4 text-[17px] font-medium leading-[1.4] lg:mt-8 lg:text-[22px]">
          Build loyalty, save money, and go green with ease.
        </p>
      </FadeIn>
      <InsightsSection />
      <FadeIn className="mx-auto max-w-[650px] text-center text-text">
        <h3 className="text-[24px] font-medium leading-[1.4] lg:text-[58px]">
          Sustainable, Efficient, and Engaging.
        </h3>
      </FadeIn>
      <PromoSection />
    </div>
  );
};

export default Home;
