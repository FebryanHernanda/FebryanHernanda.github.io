import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styleConfig } from "./TechIcon.config";
import { techStackIcon } from "@/data";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TechIcon = () => {
  const leftRowRef = useRef<HTMLDivElement>(null);
  const rightRowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftRow = leftRowRef.current;
    const rightRow = rightRowRef.current;
    const container = containerRef.current;

    if (!leftRow || !rightRow || !container) return;

    // Create animation for left row (moving left)
    gsap.fromTo(
      leftRow,
      { x: 0 }, // Start from center
      {
        x: -300, // Move left
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smooth scrubbing, follows scroll 1:1
        },
      }
    );

    // Create animation for right row (moving right)
    gsap.fromTo(
      rightRow,
      { x: 0 }, // Start from center
      {
        x: 300, // Move right
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smooth scrubbing, follows scroll 1:1
        },
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={styleConfig.wrapper}>
      <div ref={leftRowRef} className={styleConfig.leftContainer}>
        {techStackIcon.slice(0, 14).map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div className={styleConfig.iconWrapper}>
                <img
                  src={item.imgSrc}
                  alt={item.altImg}
                  className={styleConfig.iconStyle}
                />
              </div>
            </TooltipTrigger>

            <TooltipContent>{item.tooltip}</TooltipContent>
          </Tooltip>
        ))}
      </div>

      <div ref={rightRowRef} className={styleConfig.rightContainer}>
        {techStackIcon.slice(15, 28).map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div className={styleConfig.iconWrapper}>
                <img
                  src={item.imgSrc}
                  alt={item.altImg}
                  className={styleConfig.iconStyle}
                />
              </div>
            </TooltipTrigger>

            <TooltipContent>{item.tooltip}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default TechIcon;
