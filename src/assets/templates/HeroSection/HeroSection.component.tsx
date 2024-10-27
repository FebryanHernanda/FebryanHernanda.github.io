import { HeroContainer } from "@/assets/organisms";
import { styleConfig } from "./HeroSection.config";

const HeroSection = () => {
  return (
    <div className={styleConfig.container}>
      <HeroContainer />
    </div>
  );
};

export default HeroSection;
