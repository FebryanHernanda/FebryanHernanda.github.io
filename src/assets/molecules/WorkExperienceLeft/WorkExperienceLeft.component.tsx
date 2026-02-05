import { ResumeDownload } from "@/assets/features";
import { ContactLogoSection } from "../../organisms/ContactLogoSection";
import { styleConfig } from "./WorkExperienceLeft.config";

const WorkExperienceLeft = () => {
  return (
    <div className={styleConfig.container}>
      <div className={styleConfig.imageContainer}>
        <img
          src="img/ava.png"
          alt="Profile Picture"
          className={styleConfig.imageStyle}
        />
        <div className="absolute inset-0  pointer-events-none" />
      </div>

      <div className={styleConfig.textContainer}>
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
            Febryan Hernanda Mashudi
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-zinc-500 dark:text-zinc-400">
            Fullstack Developer
          </h2>
        </div>

        <div className={styleConfig.footerTextContainer}>
          <div className="scale-90 transform origin-center">
            <ContactLogoSection type="avatarFooter" />
          </div>
          <div className="w-full flex justify-center">
            <ResumeDownload variant="default" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceLeft;
