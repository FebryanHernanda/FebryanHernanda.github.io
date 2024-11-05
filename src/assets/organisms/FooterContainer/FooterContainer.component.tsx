import { Title } from "@/assets/atoms";
import { ContactLogoSection } from "@/assets/molecules";
import { styleConfig } from "./FooterContainer.config";
import { ResumeDownload } from "@/assets/features";

const FooterContainer = () => {
  return (
    <div className={styleConfig.container}>
      <div className={styleConfig.leftWrapper}>
        <img src="../FH-Logo.svg" alt="" className={styleConfig.imgStyle} />
        <div className={styleConfig.fullNameStyle}>
          <Title Label="Febryan" Type="Regular" />
          <Title Label="Hernanda" Type="Regular" />
          <Title Label="Mashudi" Type="Regular" />
        </div>
        <span className={styleConfig.fullNameSmallDevice}>
          <Title Label="Febryan Hernanda Mashudi" Type="semiBold" />
        </span>
        <span className={styleConfig.jobTitle}>
          <Title Label="Front-end Developer" Type="semiBold" />
        </span>
      </div>
      <div className={styleConfig.rightWrapper}>
        <ContactLogoSection type="avatarFooter" />
        <ResumeDownload variant="link" />
      </div>
    </div>
  );
};

export default FooterContainer;
