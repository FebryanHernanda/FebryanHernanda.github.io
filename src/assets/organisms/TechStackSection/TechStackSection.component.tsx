import { TechStackContainer } from "@/assets/container";
import { styleConfig } from "./TechStackSection.config";

const TechStackSection = () => {
  return (
    <section className={styleConfig.container}>
      <TechStackContainer />
    </section>
  );
};

export default TechStackSection;
