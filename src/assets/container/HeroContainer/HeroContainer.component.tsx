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
          delay: 0.2, // Small delay for hero to allow video to start maybe
        }
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
          Label="Crafting Beautiful, 
Functional Websites"
          Type="headline"
        />
        <Title
          Label="As a Full-Stack Developer, I design and build scalable, user-focused web applications that seamlessly combine aesthetic design and robust functionality to enhance user experience, boost engagement, and drive digital growth."
          Type="subHeadline"
        />
      </div>
      <div className={`${styleConfig.subtitle} hero-item`}>
        <span className="fancy-pulse"></span>
        <Title
          Label="Available for full-time position"
          Type="subTitle"
          className="font-bold"
        />
      </div>
    </div>
  );
};

export default HeroContainer;
