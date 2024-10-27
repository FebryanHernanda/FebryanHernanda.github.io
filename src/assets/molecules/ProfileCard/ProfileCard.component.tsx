import { Title } from "@/assets/atoms";
import { ContactLogoSection } from "@/assets/molecules";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { styleConfig } from "./ProfileCard.config";

const ProfileCard = () => {
  return (
    <div className={styleConfig.wrapper}>
      <div className={styleConfig.avatar}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>Profile Picture</AvatarFallback>
        </Avatar>
      </div>
      <div className={styleConfig.profileInfo}>
        <Title Label="Febryan Hernanda Mashudi" Type="Bold" />
        <Title Label="Front-end Developer" Type="Regular" />
      </div>
      <div className={styleConfig.humbergerMenu}>
        <button>☰</button>
      </div>
      <div className={styleConfig.contactLogo}>
        <ContactLogoSection />
      </div>
    </div>
  );
};

export default ProfileCard;
