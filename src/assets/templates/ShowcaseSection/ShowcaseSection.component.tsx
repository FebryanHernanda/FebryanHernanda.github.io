import { Title } from "@/assets/atoms";
import { ShowcaseData, styleConfig } from "./ShowcaseSection.config";
import { CardShowcase } from "@/assets/molecules";

const ShowcaseSection = () => {
  return (
    <div className={styleConfig.container}>
      <div className={styleConfig.textWrapper}>
        <Title Label="Showcase" Type="Bold" />
        <Title
          Label="A Collection of My Latest Frontend Creations and Projects"
          Type="subTitle"
        />
      </div>
      <div className={styleConfig.mediaWrapper}>
        {ShowcaseData.map((data, index) => (
          <CardShowcase
            key={index}
            media={data.media}
            mediaAlt={data.mediaAlt}
            titleContent={data.titleContent}
            descContent={data.descContent}
            linkDemo={data.linkDemo}
            tools={data.tools}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseSection;
