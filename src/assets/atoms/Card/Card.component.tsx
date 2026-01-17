import { styleConfig } from "./Card.config";
import { Props } from "./Card.types";
import { cn } from "@/lib/utils";

const Card = (props: Props) => {
  const { type, children, className } = props;
  return <div className={cn(styleConfig[type], className)}>{children}</div>;
};

export default Card;
