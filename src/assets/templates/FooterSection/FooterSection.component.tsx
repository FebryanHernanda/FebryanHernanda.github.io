import { FooterContainer } from "@/assets/organisms";
import { styleConfig } from "./FooterSection.config";

const FooterSection = () => {
  return (
    <footer className={styleConfig.container}>
      <hr />
      <FooterContainer />
    </footer>
  );
};

export default FooterSection;
