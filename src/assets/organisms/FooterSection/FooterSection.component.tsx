import { FooterContainer } from "@/assets/container";
import { styleConfig } from "./FooterSection.config";

const FooterSection = () => {
  return (
    <footer className={styleConfig.container}>
      <hr />
      <div className="p-5">
        <FooterContainer />
      </div>
    </footer>
  );
};

export default FooterSection;
