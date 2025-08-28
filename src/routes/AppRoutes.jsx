import { Routes, Route } from "react-router-dom";
import Header from "../components/common/Header";
import useDarkMode from "../components/darkmode/UseDarkMode";
import ScrollToTop from "../components/common/ScrollToTop";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import PortfolioDetail from "./../pages/PortfolioDetail";
import About from "../pages/About";
import Contact from "./../pages/Contact";

const AppRoutes = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
