import { ContactLogo } from "@/assets/atoms";
import { styleConfig } from "./ContactLogoSection.config";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Props } from "./ContactLogo.type";

const ContactLogoSection = (props: Props) => {
  const { type } = props;

  const whatsapp = "https://wa.me/6281394566303?text=Halo !";
  const email = "mailto:febryanhernandamashudi@gmail.com";
  const linkedin = "https://www.linkedin.com/in/febryan-hernanda-mashudi/";
  const github = "https://github.com/FebryanHernanda";

  return (
    <div className={styleConfig.wrapper}>
      <ContactLogo target={email} type={type}>
        <MdEmail className={styleConfig.icon} />
      </ContactLogo>
      <ContactLogo target={whatsapp} type={type}>
        <IoLogoWhatsapp className={styleConfig.icon} />
      </ContactLogo>
      <ContactLogo target={linkedin} type={type}>
        <FaLinkedinIn className={styleConfig.iconLinkedin} />
      </ContactLogo>
      <ContactLogo target={github} type={type}>
        <FaGithub className={styleConfig.icon} />
      </ContactLogo>
    </div>
  );
};

export default ContactLogoSection;
