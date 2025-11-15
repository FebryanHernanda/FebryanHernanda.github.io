import { Title } from "@/assets/atoms";
import { TechIcon } from "@/assets/molecules";
import { styleConfig } from "./TechStackContainer.config";
import { TooltipProvider } from "@/components/ui/tooltip";

const TechStackContainer = () => {
  return (
    <>
      <div className={styleConfig.textWrapper}>
        <Title Label="Tech Stack" Type="Bold" />
      </div>
      <TooltipProvider>
        <TechIcon />
      </TooltipProvider>
    </>
  );
};

export default TechStackContainer;
