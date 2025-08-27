import MainLayout from "./../layout/MainLayout";
import { TopSpace } from "./../components/common/page/TopSpace";
import { BottomSpace } from "./../components/common/page/BottomSpace";
import PortfolioDetailPage from "../components/portfolio/PortfolioDetailPage";

const PortfolioDetail = () => {
  return (
    <MainLayout>
      <TopSpace />
      <PortfolioDetailPage />
      <BottomSpace />
    </MainLayout>
  );
};

export default PortfolioDetail;
