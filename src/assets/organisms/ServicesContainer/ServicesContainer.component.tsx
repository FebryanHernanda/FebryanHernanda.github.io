import { Card, Title } from "@/assets/atoms";
import { Button } from "@/components/ui/button";
import { styleConfig } from "./ServicesContainer.config";
import { ContactLogoSection } from "@/assets/molecules";

const ServicesContainer = () => {
  return (
    <div className={styleConfig.container}>
      <div className={styleConfig.title}>
        <Title Label="Services" Type="Bold" />
        <Title
          Label="We offer the full spectrum of services to help organisations work better. Everything from creating standards of excellence to training your people to work in more effective ways."
          Type="subTitle"
        />
      </div>
      <div className={styleConfig.content}>
        <Card type="text">
          <div className="flex justify-between">
            <Title Label="Website Development" Type="cardTitle" />
            <ContactLogoSection />
          </div>
          <Title
            Label="Creation of landing pages, website and online stores for small and medium-size businesses"
            Type="cardSubTitle"
          />
          <Button variant="secondary" className={styleConfig.button}>
            Whats you get
          </Button>
        </Card>
        <Card type="text">
          <Title Label="UI/UX Design" Type="cardTitle" />
          <Title
            Label="User interface development for websites and application, design system engineering"
            Type="cardSubTitle"
          />
          <Button variant="secondary" className={styleConfig.button}>
            Whats you get
          </Button>
        </Card>
        <Card type="text">
          <Title Label="Graphic Design" Type="cardTitle" />
          <Title
            Label="User interface development for websites and application, design system engineering"
            Type="cardSubTitle"
          />
          <Button variant="secondary" className={styleConfig.button}>
            Whats you get
          </Button>
        </Card>
        <Card type="text">
          <Title Label="Tech Consul" Type="cardTitle" />
          <Title
            Label="User interface development for websites and application, design system engineering"
            Type="cardSubTitle"
          />
          <Button variant="secondary" className={styleConfig.button}>
            Whats you get
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default ServicesContainer;
