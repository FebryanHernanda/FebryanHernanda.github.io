import { Title } from "@/assets/atoms";
import { DialogProfile } from "@/assets/molecules";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { FormContactTrigger } from "@/assets/features";
import { styleConfig } from "./ContactSection.config";

const ContactSection = () => {
  return (
    <section id="Contact" className={styleConfig.container}>
      <div className={styleConfig.textWrapper}>
        <Title Label="Let's Connect With Me" Type="Bold" />
        <Title
          Label="Feel free to reach out for consultation or to discuss new projects, creative ideas, or opportunities to bring your vision to life. Whether you're looking for guidance or a brainstorming session, let's connect!"
          Type="subTitle"
        />
      </div>
      <div className={styleConfig.buttonWrapper}>
        {/* using Trigger for FormContact */}
        <FormContactTrigger />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className={styleConfig.button}>
              About me
            </Button>
          </DialogTrigger>
          <DialogProfile />
        </Dialog>
      </div>
    </section>
  );
};

export default ContactSection;
