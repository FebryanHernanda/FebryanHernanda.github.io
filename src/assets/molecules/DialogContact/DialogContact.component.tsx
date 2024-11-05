import { useEffect, useState } from "react";

import emailjs from "@emailjs/browser";
import FormContact from "@/assets/features/FormContact/FormContact.component";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

import { formDataType, TriggerProps } from "./DialogContact.type";
import {
  PUBLIC_KEY,
  SERVICE_ID,
  styleConfig,
  TEMPLATE_ID,
} from "./DialogContact.config";

const DialogContact = (props: TriggerProps) => {
  const { isOpen, setIsOpen } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");

  const handleSubmit = (formData: formDataType) => {
    if (!showMessage) {
      setIsLoading(true);

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
        .then((response) => {
          setIsLoading(false);
          setShowMessage(true);
          console.log("Email has been sent! ", response);
        })
        .catch((error: Error) => {
          setIsLoading(false);
          setErrorMessages(
            "Failed to send email. Please try again later, or you can contact the available support on the website."
          );
          console.error("Email Failed to send : ", error);
        });
    }
  };

  useEffect(() => {
    setIsLoading(false);
    setShowMessage(false);
    setErrorMessages("");
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className={styleConfig.wrapper}>
        <DialogHeader>
          <DialogTitle className={styleConfig.title}>
            Discuss Your Project Needs
          </DialogTitle>
        </DialogHeader>
        <hr />
        {!isLoading && !showMessage && !errorMessages && (
          <DialogDescription className={styleConfig.description}>
            Share any questions or insights in the form below, and I’ll respond
            within a day.
          </DialogDescription>
        )}
        {isLoading ? (
          <Skeleton className={styleConfig.showMessage} />
        ) : showMessage ? (
          <div className={styleConfig.showMessage}>
            Thank you! I’ve received your message and will get back to you soon.
          </div>
        ) : errorMessages ? (
          <div className={styleConfig.errorMessages}>{errorMessages}</div>
        ) : (
          <FormContact OnSave={handleSubmit} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DialogContact;
