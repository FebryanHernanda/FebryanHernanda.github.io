import { FooterSection, NavbarSection } from "@/assets/organisms";
import { ScrollToTop } from "@/assets/molecules";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <NavbarSection />
      <main>
        <Outlet />
      </main>
      <FooterSection />
      <ScrollToTop />
    </>
  );
};

export default MainLayout;
