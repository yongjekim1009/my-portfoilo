import MainLayout from "./../layout/MainLayout";
import { TopSpace } from "./../components/common/page/TopSpace";
import { BottomSpace } from "./../components/common/page/BottomSpace";
import PortfolioListPage from "./../components/portfolio/PortfolioListPage";

const Portfolio = () => {
  return (
    <MainLayout>
      <TopSpace />
      <PortfolioListPage />
      <BottomSpace />
    </MainLayout>
  );
};

export default Portfolio;
