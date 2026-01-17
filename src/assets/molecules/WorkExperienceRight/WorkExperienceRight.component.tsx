import { useEffect, useRef } from "react";
import { workExperience } from "@/data";
import { TechIconMarquee } from "../TechIcon";
import { styleConfig } from "./WorkExperienceRight.config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkExperienceRight = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".timeline-item");
      gsap.fromTo(
        items,
        { opacity: 0, x: -30, filter: "blur(10px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.2,
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
      {workExperience.map((data, index) => (
        <div key={index} className={`${styleConfig.timelineItem} group timeline-item`}>
          <div className={styleConfig.timelineDot} />
          
          <div className={styleConfig.card}>
            <div className={styleConfig.header}>
              <div className="flex flex-col gap-1">
                <h3 className={styleConfig.roleTitle}>{data.role}</h3>
                <div className={styleConfig.companyTitle}>
                  {data.company}
                </div>
              </div>
              <div className="flex items-start">
                  <span className={styleConfig.yearBadges}>{data.year}</span>
              </div>
            </div>

            <ul className={styleConfig.listContainer}>
              {data.responsibilities.map((item, idx) => (
                <li key={idx} className={styleConfig.listItem}>
                  <div className={styleConfig.bullet} />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div className="mt-8 timeline-item">
        <TechIconMarquee />
      </div>
    </div>
  );
};

export default WorkExperienceRight;
