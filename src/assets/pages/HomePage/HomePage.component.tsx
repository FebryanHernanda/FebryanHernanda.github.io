import {
  ContactSection,
  HeroSection,
  ServicesSection,
  ShowcaseSection,
  TechStackSection,
} from "@/assets/container";

const HomePage = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <HeroSection />
      <TechStackSection />
      <ShowcaseSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
