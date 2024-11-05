import { Title } from "@/assets/atoms";
import { ShowcaseData, styleConfig } from "./ShowcaseSection.config";
import { CardShowcase } from "@/assets/molecules";

const ShowcaseSection = () => {
  return (
    <section id="Showcase" className="items-center">
      <div className={styleConfig.container}>
        <div className={styleConfig.textWrapper}>
          <Title Label="Showcase" Type="Bold" />
          <Title
            Label="A showcase of my latest frontend projects, combining creativity with responsive, interactive designs to deliver engaging user experiences."
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
              category={data.category}
              descContent={data.descContent}
              linkDemo={data.linkDemo}
              tools={data.tools}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
