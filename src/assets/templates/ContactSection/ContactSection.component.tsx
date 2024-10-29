import { Title } from "@/assets/atoms";
import { Button } from "@/components/ui/button";
import { styleConfig } from "./ContactSection.config";

const ContactSection = () => {
  return (
    <div className={styleConfig.container}>
      <div className={styleConfig.textWrapper}>
        <Title Label="Let's Connect With Me" Type="Bold" />
        <Title
          Label="Feel free to reach out for consultation or to discuss new projects, creative ideas, or opportunities to bring your vision to life. Whether you're looking for guidance or a brainstorming session, let's connect!"
          Type="subTitle"
        />
      </div>
      <div className={styleConfig.buttonWrapper}>
        <Button variant="secondary">Discuss Our Project</Button>
        <Button variant="secondary">More about me !</Button>
      </div>
    </div>
  );
};

export default ContactSection;
