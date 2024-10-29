import { ContactLogo } from "@/assets/atoms";
import { styleConfig } from "./ContactLogoSection.config";

const ContactLogoSection = () => {
  const whatsapp = "https://wa.me/6281394566303?text=Halo !";
  const email = "mailto:febryanhernandamashudi@gmail.com";
  const linkedin = "https://www.linkedin.com/in/febryan-hernanda-mashudi/";

  return (
    <div className={styleConfig.wrapper}>
      <ContactLogo imgUrl="img/Icon/mail.png" alt="Email" target={email} />
      <ContactLogo
        imgUrl="img/Icon/linkedin.png"
        alt="Linkedin"
        target={linkedin}
      />
      <ContactLogo
        imgUrl="img/Icon/whatsapp.png"
        alt="Whatsapps"
        target={whatsapp}
      />
    </div>
  );
};

export default ContactLogoSection;
