import { styleConfig } from "./Title.config";
import { Props } from "./Title.types";

const Title = (props: Props) => {
  const { Label, Type } = props;
  return (
    <>
      <h1 className={styleConfig[Type]}>{Label}</h1>
    </>
  );
};

export default Title;
