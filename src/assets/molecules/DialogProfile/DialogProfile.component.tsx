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
        <AvatarImage src="/public/img/ava.png" />
        <AvatarFallback>Profile Picture</AvatarFallback>
      </Avatar>
      <div className={styleConfig.textSize}>
        <h1 className={styleConfig.titleBold}>Febryan Hernanda Mashudi</h1>
        <h4>Front-end Developer</h4>
      </div>
      <DialogDescription className={styleConfig.DialogDescription}>
        My background in design strengthens my ability to craft exceptional user
        experiences. I am actively seeking opportunities to contribute to
        impactful projects within a collaborative team, where I can bring fresh
        ideas, creativity, and a strong work ethic.
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
