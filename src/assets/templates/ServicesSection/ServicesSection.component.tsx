import { ServicesContainer } from "@/assets/organisms";
import { styleConfig } from "./ServicesSection.config";

const ServicesSection = () => {
  return (
    <section id="Services" className={styleConfig.container}>
      <ServicesContainer />
    </section>
  );
};

export default ServicesSection;
