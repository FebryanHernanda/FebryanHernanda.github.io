import { Title } from "../Title";
import { styleConfig } from "./TechLogo.config";
import { Props } from "./TechLogo.types";

const TechLogo = (props: Props) => {
  const { src, description, label } = props;
  return (
    <div className={styleConfig.container}>
      <img src={src} alt={description} className={styleConfig.logo} />
      <Title Label={label} Type="Bold" />
    </div>
  );
};

export default TechLogo;
