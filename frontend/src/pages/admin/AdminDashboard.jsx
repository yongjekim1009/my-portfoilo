import { AdminDashboardForm } from "../../components/admin/AdminDashboardForm";
import MainLayout from "./../../layout/MainLayout";
import { TopSpace } from "./../../components/common/page/TopSpace";
import { BottomSpace } from "../../components/common/page/BottomSpace";

const AdminDashboard = () => {
  return (
    <MainLayout>
      <TopSpace />
      <AdminDashboardForm />
      <BottomSpace />
    </MainLayout>
  );
};

export default AdminDashboard;
