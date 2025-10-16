import { Title } from "@/assets/atoms";
import { ProfileCard } from "@/assets/molecules";
import { styleConfig } from "./HeroContainer.config";

const HeroContainer = () => {
  return (
    <div className={styleConfig.wrapper}>
      <video
        src="img/hero.mp4"
        loop
        muted
        autoPlay
        playsInline
        className={styleConfig.video}
      />
      <ProfileCard />
      <div className={styleConfig.headline}>
        <Title
          Label="Crafting Beautiful, 
Functional Websites"
          Type="headline"
        />
        <Title
          Label="As a Full-Stack Developer, I design and build scalable, user-focused web applications that seamlessly combine aesthetic design and robust functionality to enhance user experience, boost engagement, and drive digital growth."
          Type="subHeadline"
        />
      </div>
      <div className={styleConfig.subtitle}>
        <span className="fancy-pulse"></span>
        <Title
          Label="Available for full-time position"
          Type="subTitle"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default HeroContainer;
