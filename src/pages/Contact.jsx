import MainLayout from "./../layout/MainLayout";
import { TopSpace } from "./../components/common/page/TopSpace";
import { BottomSpace } from "./../components/common/page/BottomSpace";
import ContactPage from "../components/contact/ContactPage";

const Contact = () => {
  return (
    <MainLayout>
      <TopSpace />
      <ContactPage />
      <BottomSpace />
    </MainLayout>
  );
};

export default Contact;
