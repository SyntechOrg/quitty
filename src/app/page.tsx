import HeroSectionBackground from "@/components/sections/heroSectionBackground";
import HeroSection from "@/components/sections/heroSection";
import FeaturedWorksSection from "@/components/sections/featuredWorksSection";
import ServicesSection from "@/components/sections/servicesSection";

const Home = () => {
  return (
    <>
      <HeroSectionBackground/>
      <HeroSection/>
      <FeaturedWorksSection/>
      <ServicesSection/>
    </>
  );
}

export default Home;
