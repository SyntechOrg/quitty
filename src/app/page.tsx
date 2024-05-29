import HeroSectionBackground from "@/components/sections/HeroSectionBackground";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedWorksSection from "@/components/sections/FeaturedWorksSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import {SocialMedia} from "@/components/shared/social-media/SocialMedia";
import {Clients} from "@/components";

const Home = () => {
  return (
    <>
      <HeroSectionBackground/>
      <HeroSection/>
      <FeaturedWorksSection/>
      <ServicesSection/>
      <AboutSection/>
      <Clients/>
      <SocialMedia/>
    </>
  );
}

export default Home;
