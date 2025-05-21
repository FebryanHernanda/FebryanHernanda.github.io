import { Card, Title } from "@/assets/atoms";
import { Button } from "@/components/ui/button";
import { TechLogo } from "@/assets/atoms/TechLogo";
import { Props } from "./CardShowcase.type";
import { styleConfig } from "./CardShowcase.config";
import { Badge } from "@/components/ui/badge";

import Tilt from "react-parallax-tilt";

const CardShowcase = (props: Props) => {
  const {
    media,
    mediaAlt,
    titleContent,
    descContent,
    tools,
    category,
    linkDemo,
  } = props;

  return (
    <div className={styleConfig.container}>
      <Tilt
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="20px"
      >
        <Card type="image">
          <img src={media} alt={mediaAlt} className={styleConfig.imageStyle} />
        </Card>
      </Tilt>
      <div className={styleConfig.titleSize}>
        <Title Label={titleContent} Type="Bold" />
        <div className="flex flex-wrap gap-3 items-center mt-3">
          <Badge variant="outline" className="text-[10px] sm:text-none">
            {category}
          </Badge>
          <span className="text-[20px]">/</span>
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
        </div>
      </div>
      <div className={styleConfig.subTitileSize}>
        <Title Label={descContent} Type="Regular" />
      </div>

      <Button variant="secondary" className="w-28">
        <a href={linkDemo} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      </Button>
    </div>
  );
};

export default CardShowcase;
