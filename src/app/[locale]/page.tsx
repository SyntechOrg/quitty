import HeroSectionBackground from "@/components/sections/HeroSectionBackground";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedWorksSection from "@/components/sections/FeaturedWorksSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import { SocialMedia } from "@/components/shared/social-media/SocialMedia";
import { Clients } from "@/components";

const Home = () => {
  return (
    <>
      <HeroSectionBackground />
      <HeroSection />
      <FeaturedWorksSection />
      <ServicesSection />
      <AboutSection />
      <div className="py-[100px] lg:py-[200px]">
        <Clients />
      </div>
      <SocialMedia />
    </>
  );
};

export default Home;
