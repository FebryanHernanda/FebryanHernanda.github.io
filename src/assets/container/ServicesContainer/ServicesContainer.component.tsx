import { Card, Title } from "@/assets/atoms";
import { Button } from "@/components/ui/button";
import { servicesData, styleConfig } from "./ServicesContainer.config";
import { DialogServicesInformations } from "@/assets/molecules";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesContainer = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(".services-item");
            gsap.fromTo(
                items,
                { opacity: 0, y: 50, filter: "blur(10px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

  return (
    <div className={styleConfig.container} ref={containerRef}>
      <div className={`${styleConfig.title} services-item`}>
        <Title Label="Services" Type="Bold" />
        <Title
          Label="Specializing in web development, UI/UX design, graphic design, and tech consulting to create impactful digital experiences for your brand."
          Type="subTitle"
        />
      </div>
      <div className={styleConfig.content}>
        {servicesData.map((data, index) => (
          <Card type="text" key={index} className="services-item">
            <div className="space-y-2">
              <Title Label={data.title} Type="cardTitle" />
              <Title Label={data.subtitle} Type="cardSubTitle" />
            </div>
            <Dialog>
              <div className="flex ">
                <DialogTrigger className={styleConfig.dialogTrigger} asChild>
                  <Button variant="secondary" className={styleConfig.button}>
                    Learn More
                  </Button>
                </DialogTrigger>
                <DialogServicesInformations
                  title={data.title}
                  benefit={data.benefits}
                />
              </div>
            </Dialog>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesContainer;
