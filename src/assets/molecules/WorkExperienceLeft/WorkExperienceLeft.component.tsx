import { ResumeDownload } from "@/assets/features";
import { Title } from "@/assets/atoms";
import { ContactLogoSection } from "../../organisms/ContactLogoSection";
import { styleConfig } from "./WorkExperienceLeft.config";

const WorkExperienceLeft = () => {
  return (
    <div className={styleConfig.container}>
      <div className={styleConfig.imageContainer}>
        <img
          src="img/profileme.jpg"
          alt="Profile Picture"
          className={styleConfig.imageStyle}
        />
      </div>

      <div className={styleConfig.textContainer}>
        <div>
          <Title
            Label="Febryan Hernanda Mashudi"
            Type="Bold"
            className="text-2xl"
          />
          <Title
            Label="Fullstack Developer"
            Type="Regular"
            className="text-2xl"
          />
        </div>

        <div className={styleConfig.footerTextContainer}>
          <div className="space-y-3">
            <div className="ml-5">
              <ContactLogoSection type="avatarFooter" />
            </div>
            <ResumeDownload variant="default" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceLeft;
