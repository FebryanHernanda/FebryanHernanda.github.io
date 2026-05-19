import { Title } from "@/assets/atoms";
import { ProfileCard } from "@/assets/molecules";
import { styleConfig } from "./HeroContainer.config";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".hero-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styleConfig.wrapper} ref={containerRef}>
      <video
        src="img/hero.mp4"
        loop
        muted
        autoPlay
        playsInline
        className={styleConfig.video}
      />
      <div className="hero-item">
        <ProfileCard />
      </div>
      <div className={`${styleConfig.headline} hero-item`}>
        <Title
          Label="Building Modern Websites & Digital Systems"
          Type="headline"
        />
        <Title
          Label="Software Engineer focused on building modern websites, scalable platforms, and thoughtful digital experiences with clean architecture and user-focused design."
          Type="subHeadline"
        />
      </div>
      <div className={`${styleConfig.subtitle} hero-item`}>
        <span className="fancy-pulse"></span>
        <Title
          Label="Available for freelance projects & collaboration"
          Type="subTitle"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default HeroContainer;
