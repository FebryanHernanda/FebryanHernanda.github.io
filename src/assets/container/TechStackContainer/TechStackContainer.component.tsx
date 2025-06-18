import { Title } from "@/assets/atoms";
import { TechIcon } from "@/assets/molecules";
import { styleConfig } from "./TechStackContainer.config";

const TechStackContainer = () => {
  return (
    <>
      <div className={styleConfig.textWrapper}>
        <Title Label="Tech Stack" Type="Bold" />
      </div>
      <TechIcon />
    </>
  );
};

export default TechStackContainer;
