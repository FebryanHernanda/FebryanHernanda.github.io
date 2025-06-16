import { FooterContainer } from "@/assets/organisms";
import { styleConfig } from "./FooterSection.config";

const FooterSection = () => {
  return (
    <footer className={styleConfig.container}>
      <div className="mt-10">
        <hr />
        <FooterContainer />
      </div>
    </footer>
  );
};

export default FooterSection;
