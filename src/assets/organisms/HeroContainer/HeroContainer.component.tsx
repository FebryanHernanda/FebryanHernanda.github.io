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
          Label="As a Front-End Developer with a focus on UI/UX design, I build visually appealing and user-friendly websites and applications that empower businesses to elevate user satisfaction, increase engagement, and drive digital innovation."
          Type="subHeadline"
        />
      </div>
      <div className={styleConfig.subtitle}>
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
