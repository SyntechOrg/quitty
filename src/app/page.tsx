import HeroSectionBackground from "@/components/sections/heroSectionBackground";
import HeroSection from "@/components/sections/heroSection";
import FeaturedWorksSection from "@/components/sections/featuredWorksSection";
import ServicesSection from "@/components/sections/servicesSection";
import AboutSection from "@/components/sections/aboutSection";

const Home = () => {
  return (
    <>
      <HeroSectionBackground/>
      <HeroSection/>
      <FeaturedWorksSection/>
      <ServicesSection/>
      <AboutSection />
    </>
  );
}

export default Home;
