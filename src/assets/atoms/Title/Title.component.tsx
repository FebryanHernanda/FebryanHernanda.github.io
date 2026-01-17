import { styleConfig } from "./Title.config";
import { Props } from "./Title.types";

const Title = (props: Props) => {
  const { Label, Type, className } = props;

  const getTag = () => {
    switch (Type) {
      case "headline":
        return "h1";
      case "subHeadline":
        return "p";
      case "cardTitle":
        return "h3";
      case "cardSubTitle":
        return "h4";
      case "subTitle":
        return "h2";
      case "Bold":
      case "semiBold":
      case "Regular":
        return "span";
      default:
        return "p";
    }
  };

  const Tag = getTag() as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${styleConfig[Type]} ${className}`}>
      {Label}
    </Tag>
  );
};

export default Title;
