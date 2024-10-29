import { Card, Title } from "@/assets/atoms";
import { Button } from "@/components/ui/button";
import { TechLogo } from "@/assets/atoms/TechLogo";
import { Props } from "./CardShowcase.type";
import { styleConfig } from "./CardShowcase.config";

const CardShowcase = (props: Props) => {
  const { media, mediaAlt, titleContent, descContent, tools, linkDemo } = props;

  return (
    <div className={styleConfig.container}>
      <Card type="image">
        <img src={media} alt={mediaAlt} className={styleConfig.imageStyle} />
      </Card>
      <div className={styleConfig.titleSize}>
        <Title Label={titleContent} Type="Bold" />
      </div>
      <div className={styleConfig.subTitileSize}>
        <Title Label={descContent} Type="Regular" />
      </div>
      <div className={styleConfig.toolsWrapper}>
        {tools.map((data, index) => (
          <TechLogo
            key={index}
            src={data.src}
            description={data.description}
            label={data.label}
          />
        ))}
      </div>
      <Button variant="secondary">
        <a href={linkDemo} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      </Button>
    </div>
  );
};

export default CardShowcase;
