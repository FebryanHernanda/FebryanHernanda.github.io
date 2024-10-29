import { styleConfig } from "./Card.config";
import { Props } from "./Card.types";

const Card = (props: Props) => {
  const { type, children } = props;
  return <div className={styleConfig[type]}>{children}</div>;
};

export default Card;
