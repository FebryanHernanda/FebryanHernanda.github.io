import { styleConfig } from "./ContactLogo.config";
import { Props } from "./ContactLogo.types";

const ContactLogo = (props: Props) => {
  const { children, target, type } = props;

  return (
    <div className={styleConfig[type]}>
      <a href={target} target="_blank">
        {children}
      </a>
    </div>
  );
};

export default ContactLogo;
