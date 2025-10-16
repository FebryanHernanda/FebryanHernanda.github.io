import { Title } from "@/assets/atoms";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { styleConfig } from "./ProfileCard.config";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { IoFolderOpenSharp } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-scroll";
import { ContactLogoSection } from "@/assets/organisms";

const ProfileCard = () => {
  return (
    <div className="z-10">
      <div className={styleConfig.wrapper}>
        <div className={styleConfig.avatar}>
          <Avatar>
            <AvatarImage src="img/ava.png" alt="profile picture" />
            <AvatarFallback>Profile Picture</AvatarFallback>
          </Avatar>
        </div>
        <div className={styleConfig.profileInfo}>
          <Title Label="Febryan Hernanda Mashudi" Type="Bold" />
          <Title Label="Fullstack Developer" Type="Regular" />
        </div>
        <div className={styleConfig.humbergerMenu}>
          <Sheet>
            <SheetTrigger>
              <Badge variant="secondary" className="text-2xl">
                ☰
              </Badge>
            </SheetTrigger>
            <SheetContent className={styleConfig.sheetWrapper}>
              <SheetHeader>
                <div className={styleConfig.avatarSide}>
                  <Avatar>
                    <AvatarImage src="img/ava.png" alt="profile picture" />
                    <AvatarFallback>Profile Picture</AvatarFallback>
                  </Avatar>
                </div>
                <SheetTitle>Febryan Hernanda Mashudi</SheetTitle>
                <SheetDescription>Fullstack Developer</SheetDescription>
              </SheetHeader>
              <hr />
              <SheetFooter>
                <SheetClose asChild className={styleConfig.sheetItem}>
                  <Link activeClass="active" smooth spy to="Contact">
                    <MdContactMail className={styleConfig.icon} />
                    Contact
                  </Link>
                </SheetClose>
                <SheetClose asChild className={styleConfig.sheetItem}>
                  <Link activeClass="active" smooth spy to="Services">
                    <RiCustomerService2Fill className={styleConfig.icon} />
                    Services
                  </Link>
                </SheetClose>
                <SheetClose asChild className={styleConfig.sheetItem}>
                  <Link activeClass="active" smooth spy to="Showcase">
                    <IoFolderOpenSharp className={styleConfig.icon} />
                    Showcase
                  </Link>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className={styleConfig.contactLogo}>
          <ContactLogoSection type="avatarNav" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
