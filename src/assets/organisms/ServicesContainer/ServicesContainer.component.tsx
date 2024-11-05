import { Card, Title } from "@/assets/atoms";
import { Button } from "@/components/ui/button";
import { servicesData, styleConfig } from "./ServicesContainer.config";
import { DialogServicesInformations } from "@/assets/molecules";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const ServicesContainer = () => {
  return (
    <div className={styleConfig.container}>
      <div className={styleConfig.title}>
        <Title Label="Services" Type="Bold" />
        <Title
          Label="Specializing in web development, UI/UX design, graphic design, and tech consulting to create impactful digital experiences for your brand."
          Type="subTitle"
        />
      </div>
      <div className={styleConfig.content}>
        {servicesData.map((data, index) => (
          <Card type="text" key={index}>
            <Title Label={data.title} Type="cardTitle" />
            <Title Label={data.subtitle} Type="cardSubTitle" />
            <Dialog>
              <DialogTrigger className={styleConfig.dialogTrigger} asChild>
                <Button variant="secondary" className={styleConfig.button}>
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogServicesInformations
                title={data.title}
                benefit={data.benefits}
              />
            </Dialog>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesContainer;
