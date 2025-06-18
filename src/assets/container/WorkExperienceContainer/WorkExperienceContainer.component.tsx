import { WorkExperienceLeft, WorkExperienceRight } from "@/assets/molecules";
import { styleConfig } from "./WorkExperienceContainer.config";

const WorkExperienceContainer = () => {
  return (
    <div className={styleConfig.container}>
      <WorkExperienceLeft />
      <WorkExperienceRight />
    </div>
  );
};

export default WorkExperienceContainer;
