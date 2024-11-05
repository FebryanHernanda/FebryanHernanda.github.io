import { styleConfig } from "./Title.config";
import { Props } from "./Title.types";

const Title = (props: Props) => {
  const { Label, Type, className } = props;
  return (
    <>
      <h1 className={`${styleConfig[Type]} ${className}`}>{Label}</h1>
    </>
  );
};

export default Title;
