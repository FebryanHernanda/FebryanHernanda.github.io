import { useState } from "react";

import { DialogContact } from "@/assets/molecules";
import { Button } from "@/components/ui/button";
import { styleConfig } from "./FormContact.config";

const FormContactTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="default"
        onClick={() => setIsOpen(true)}
        className={styleConfig.buttonTrigger}
      >
        Let's Talk
      </Button>
      <DialogContact isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default FormContactTrigger;
