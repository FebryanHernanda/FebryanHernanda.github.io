import { workExperience } from "@/data";
import { Title } from "@/assets/atoms";
import { TechIconMarquee } from "../TechIcon";
import { styleConfig } from "./WorkExperienceRight.config";

const WorkExperienceRight = () => {
  return (
    <div className={styleConfig.container}>
      {workExperience.map((data, index) => (
        <div key={index}>
          <Title Label={data.company} Type="Regular" className="text-xl" />
          <Title Label={data.role} Type="Bold" className="text-2xl" />
          <Title Label={data.year} Type="subTitle" className="text-2xl" />
          <ul>
            {data.responsibilities.map((item, idx) => (
              <li key={idx} className={styleConfig.listItem}>
                {item}
              </li>
            ))}
          </ul>
          {index !== workExperience.length && (
            <hr className={styleConfig.hrStyle} />
          )}
        </div>
      ))}

      <TechIconMarquee />
    </div>
  );
};

export default WorkExperienceRight;
