import HeroSectionBackground from "@/components/sections/heroSectionBackground";
import HeroSection from "@/components/sections/heroSection";
import ProjectCard from "@/components/cards/projectCard";
import AllProjectsSection from "@/components/sections/allProjectsSection";

const Home = () => {
  return (
    <>
      <HeroSectionBackground/>
      <HeroSection/>
      <div className="">
        <AllProjectsSection />
      </div>
    </>
  );
}

export default Home;
