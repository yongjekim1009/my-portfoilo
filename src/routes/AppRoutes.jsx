import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/portfolio";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
