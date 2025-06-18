import { useEffect, useRef } from "react";
import gsap from "gsap";
import { techStackIcon } from "@/data";
import { Title } from "@/assets/atoms";

const TechIconMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeItem = marqueeItemRef.current;

    if (!marqueeItem) return;

    const ctx = gsap.context(() => {
      gsap.delayedCall(0.1, () => {
        const singleSetWidth = marqueeItem.scrollWidth / 2;

        gsap.to(marqueeItem, {
          x: -singleSetWidth,
          duration: 50,
          ease: "none",
          repeat: -1,
        });
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const duplicatedIcons = [...techStackIcon, ...techStackIcon];

  return (
    <div className="space-y-5 overflow-hidden" ref={marqueeRef}>
      <Title Label="Tech Stack" Type="Bold" className="text-2xl" />
      <div className="flex gap-5 " ref={marqueeItemRef}>
        {duplicatedIcons.map((data, index) => (
          <img
            key={index}
            src={data.imgSrc}
            alt={data.altImg}
            className="w-15"
          />
        ))}
      </div>
    </div>
  );
};

export default TechIconMarquee;
