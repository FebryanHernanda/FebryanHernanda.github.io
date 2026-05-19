import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import {
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { dataBadge, styleConfig } from "./DialogProfile.config";
import { ResumeDownload } from "@/assets/features";

const DialogProfile = () => {
  return (
    <DialogContent className={styleConfig.dialogContent}>
      <DialogHeader>
        <DialogTitle className={styleConfig.dialogTitle}>About Me</DialogTitle>
      </DialogHeader>
      <span className={styleConfig.hrElement}>
        <hr />
      </span>
      <Avatar className={styleConfig.avatarSize}>
        <AvatarImage src="img/ava.png" className="object-cover" />
        <AvatarFallback>Profile Picture</AvatarFallback>
      </Avatar>
      <div className={styleConfig.textSize}>
        <h1 className={styleConfig.titleBold}>Febryan Hernanda Mashudi</h1>
        <h4>Software Engineer</h4>
      </div>
      <DialogDescription className={styleConfig.DialogDescription}>
        Software Engineer focused on building modern websites, scalable systems,
        and thoughtful digital experiences. I enjoy combining clean engineering
        with user-focused design to create products that are both functional and
        visually refined.
      </DialogDescription>
      <div className={styleConfig.badgeLayout}>
        {dataBadge.map((data, index) => (
          <Badge key={index} variant="outline">
            {data.name}
          </Badge>
        ))}
      </div>
      <DialogFooter className="mt-3">
        <ResumeDownload />
      </DialogFooter>
    </DialogContent>
  );
};

export default DialogProfile;
