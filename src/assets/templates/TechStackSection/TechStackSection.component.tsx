import { TechStackContainer } from "@/assets/organisms";
import { styleConfig } from "./TechStackSection.config";

const TechStackSection = () => {
  return (
    <section className={styleConfig.container}>
      <TechStackContainer />
    </section>
  );
};

export default TechStackSection;
