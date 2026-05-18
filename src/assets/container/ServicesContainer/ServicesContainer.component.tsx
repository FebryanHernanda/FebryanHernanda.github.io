import { Title } from "@/assets/atoms";
import { Button } from "@/components/ui/button";
import { servicesData, styleConfig } from "./ServicesContainer.config";
import { DialogContact } from "@/assets/molecules";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".services-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 30, filter: "blur(5px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCTAClick = (message: string) => {
    setSelectedMessage(message);
    setIsContactOpen(true);
  };

  return (
    <div className={styleConfig.container} ref={containerRef}>
      {/* Left Column - Intro */}
      <div className={`${styleConfig.title} services-item`}>
        <Title Label="Build & Collaboration" Type="Bold" />
        <Title
          Label="Building modern websites, scalable systems, and digital products for businesses, startups, and personal brands."
          Type="subTitle"
        />
      </div>

      {/* Right Column - Horizontal Landscape Stack */}
      <div className={styleConfig.content}>
        {servicesData.map((data, index) => (
          <div
            key={index}
            className={`${styleConfig.card} services-item`}
          >
            {/* Left: Content Details */}
            <div className={styleConfig.cardTextWrapper}>
              <Badge variant="outline" className={styleConfig.cardSubtitle}>
                {data.subtitle}
              </Badge>
              <h3 className={styleConfig.cardTitle}>{data.title}</h3>
              <p className={styleConfig.cardDescription}>{data.description}</p>
            </div>

            {/* Right: Actions & Pricing */}
            <div className={styleConfig.cardActionWrapper}>
              <div className={styleConfig.priceWrapper}>
                <p className={styleConfig.priceLabel}>Starting Point</p>
                <p className={styleConfig.priceValue}>{data.price}</p>
              </div>
              <Button
                variant="secondary"
                className={styleConfig.button}
                onClick={() => handleCTAClick(data.initialMessage)}
              >
                {data.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Shared Dialog Contact with Reset Key */}
      <DialogContact
        isOpen={isContactOpen}
        setIsOpen={setIsContactOpen}
        initialMessage={selectedMessage}
      />
    </div>
  );
};

export default ServicesContainer;
