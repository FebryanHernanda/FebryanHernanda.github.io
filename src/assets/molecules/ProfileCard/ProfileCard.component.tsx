import { Title } from "@/assets/atoms";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { styleConfig } from "./ProfileCard.config";
import { ContactLogoSection } from "@/assets/organisms";

const ProfileCard = () => {
  return (
    <div className="z-10">
      <div className={styleConfig.wrapper}>
        <div className={styleConfig.avatar}>
          <Avatar>
            <AvatarImage
              src="img/ava.png"
              alt="profile picture"
              className="object-cover"
            />
            <AvatarFallback>Profile Picture</AvatarFallback>
          </Avatar>
        </div>
        <div className={styleConfig.profileInfo}>
          <Title Label="Febryan Hernanda Mashudi" Type="Bold" />
          <Title Label="Software Engineer" Type="Regular" />
        </div>
        <div className={styleConfig.contactLogo}>
          <ContactLogoSection type="avatarNav" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
