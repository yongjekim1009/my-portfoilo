import MainLayout from "../layout/MainLayout";
import { HeroSection } from "../components/home/HeroSection";
import { BackgroundSection } from "../components/common/BackgroundSection";
import PortfolioPreviewSection from "../components/home/portfolioPreviewSection/PortfolioPreviewSection";
import { AboutSection } from "../components/home/AboutSection";
import { SkillSection } from "../components/home/SkillSection";
import { ContactSection } from "../components/home/ContactSection";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <BackgroundSection />
      <PortfolioPreviewSection />
      <BackgroundSection />
      <AboutSection />
      <BackgroundSection />
      <SkillSection />
      <BackgroundSection />
      <ContactSection />
      <BackgroundSection />
    </MainLayout>
  );
};

export default Home;
