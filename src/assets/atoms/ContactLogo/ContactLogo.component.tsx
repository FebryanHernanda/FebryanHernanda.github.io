import { styleConfig } from "./ContactLogo.config";
import { Props } from "./ContactLogo.types";

const ContactLogo = (props: Props) => {
  const { imgUrl, alt, target } = props;

  return (
    <div className={styleConfig.avatar}>
      <a href={target} target="_blank">
        <img src={imgUrl} alt={alt} className={styleConfig.logo} />
      </a>
    </div>
  );
};

export default ContactLogo;
