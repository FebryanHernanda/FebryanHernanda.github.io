import { HeroContainer } from "@/assets/container";
import { styleConfig } from "./HeroSection.config";

const HeroSection = () => {
  return (
    <section id="Hero" className={styleConfig.container}>
      <HeroContainer />
    </section>
  );
};

export default HeroSection;
