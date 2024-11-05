import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Props } from "./DialogServices.type";
import { Button } from "@/components/ui/button";
import { FormContactTrigger } from "@/assets/features";
import { styleConfig } from "./DialogServices.config";

const DialogServiceInformations = (props: Props) => {
  const { title, benefit } = props;
  const listBenefit = benefit;

  return (
    <DialogContent className={styleConfig.wrapper}>
      <DialogHeader>
        <DialogTitle className={styleConfig.title}>{title}</DialogTitle>
      </DialogHeader>
      <hr />
      <DialogDescription asChild>
        <ul className={styleConfig.list}>
          {listBenefit.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </DialogDescription>
      <DialogFooter className={styleConfig.footer}>
        <FormContactTrigger />
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default DialogServiceInformations;
