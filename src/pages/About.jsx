import MainLayout from "./../layout/MainLayout";
import { TopSpace } from "./../components/common/page/TopSpace";
import { BottomSpace } from "./../components/common/page/BottomSpace";
import AboutPage from "./../components/about/AboutPage";

const About = () => {
  return (
    <MainLayout>
      <TopSpace />
      <AboutPage />
      <BottomSpace />
    </MainLayout>
  );
};

export default About;
