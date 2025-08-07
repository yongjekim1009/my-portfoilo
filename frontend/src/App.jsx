import "./App.css";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BackgroundSection } from "./components/common/BackgroundSection";
import { HeroSection } from "./components/common/home/HeroSection";
import PortfolioPreviewSection from "./components/common/home/portfolioPreviewSection/portfolioPreviewSection";
import { AboutSection } from "./components/common/home/AboutSection";
import { SkillSection } from "./components/common/home/SkillSection";
import { ContactSection } from "./components/common/home/ContactSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BackgroundSection />
      <PortfolioPreviewSection />
      <BackgroundSection />
      <AboutSection />
      <BackgroundSection />
      <SkillSection />
      <BackgroundSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
