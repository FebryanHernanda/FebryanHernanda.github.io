import { useEffect, useState } from "react";
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
import { styleConfig } from "./DialogContact.config";

const DialogContact = (props: TriggerProps) => {
  const { isOpen, setIsOpen, initialMessage } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");

  const handleSubmit = (formData: formDataType) => {
    if (!showMessage) {
      setIsLoading(true);

      const phone = "6281394566303";

      // Formatting dynamic WhatsApp message for premium presentation
      const formattedMessage = `Hi Febryan, I would like to discuss a project with you!

*Contact Details:*
- *Name:* ${formData.from_name}
- *Email:* ${formData.email}
- *WhatsApp Number:* ${formData.phone_number}

*Message:*
${formData.message}

---
Sent from febryanhernanda.github.io`;

      const encodedText = encodeURIComponent(formattedMessage);
      const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;

      // Simulate minor loading animation for smooth visual feedback before redirecting
      setTimeout(() => {
        setIsLoading(false);
        setShowMessage(true);
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }, 600);
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
        <DialogHeader className="space-y-1">
          <DialogTitle className={styleConfig.title}>
            Discuss Your Project Needs
          </DialogTitle>
          {!isLoading && !showMessage && !errorMessages && (
            <DialogDescription className={styleConfig.description}>
              Share any questions or insights in the form below, and I’ll
              respond within a day.
            </DialogDescription>
          )}
        </DialogHeader>
        <hr className="border-neutral-100 dark:border-neutral-800 my-1" />
        {isLoading ? (
          <Skeleton className={styleConfig.loading} />
        ) : showMessage ? (
          <div className={styleConfig.showMessage}>
            Redirecting you to WhatsApp... Thank you for reaching out!
          </div>
        ) : errorMessages ? (
          <div className={styleConfig.errorMessages}>{errorMessages}</div>
        ) : (
          <FormContact
            key={isOpen ? initialMessage : "closed"}
            OnSave={handleSubmit}
            initialMessage={initialMessage}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DialogContact;
