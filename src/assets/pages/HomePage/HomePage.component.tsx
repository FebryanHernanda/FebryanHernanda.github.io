import {
  ContactSection,
  FooterSection,
  HeroSection,
  NavbarSection,
  ServicesSection,
  ShowcaseSection,
  TechStackSection,
} from "@/assets/container";

const HomePage = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <NavbarSection />
      <HeroSection />
      <TechStackSection />
      <ShowcaseSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
