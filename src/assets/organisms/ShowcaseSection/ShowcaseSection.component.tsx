import { Title } from "@/assets/atoms";
import { ShowcaseData, styleConfig } from "./ShowcaseSection.config";
import { CardShowcase } from "@/assets/molecules";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const [displayedItems, setDisplayedItems] = useState(
    ShowcaseData.slice(0, 4)
  );
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nextItems, setNextItems] = useState<typeof ShowcaseData>([]);
  
  const containerRef = useRef<HTMLElement>(null);
  const prevCountRef = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const allItems = gsap.utils.toArray(".showcase-item") as Element[];
      let targetItems: Element[] = [];
      let isExpansion = false;

      // Determine which items to animate
      if (prevCountRef.current === 0) {
        // Initial load: animate all
        targetItems = allItems;
      } else if (allItems.length > prevCountRef.current) {
        // Show More: animate only new items
        targetItems = allItems.slice(prevCountRef.current);
        isExpansion = true;
      }

      if (targetItems.length > 0) {
        if (isExpansion) {
          // Immediate animation for new items (no scroll trigger needed as user is likely looking at them)
          gsap.fromTo(
            targetItems,
            { opacity: 0, y: 50, filter: "blur(10px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
            }
          );
        } else {
          // Initial scroll-triggered animation
          gsap.fromTo(
            targetItems,
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
        }
      }
    }, containerRef);
    
    // Update ref for next run
    prevCountRef.current = displayedItems.length;

    return () => ctx.revert();
  }, [displayedItems]);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setDisplayedItems(nextItems);
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, nextItems]);

  const handleShowMore = () => {
    setIsLoading(true);

    if (expanded) {
      setNextItems(ShowcaseData.slice(0, 4));
      setExpanded(false);
    } else {
      setNextItems(ShowcaseData);
      setExpanded(true);
    }
  };

  return (
    <section id="Showcase" className="items-center" ref={containerRef}>
      <div className={styleConfig.container}>
        <div className={`${styleConfig.textWrapper} showcase-item`}>
          <Title Label="Showcase" Type="Bold" />
          <Title
            Label="A showcase of my latest web projects, combining creativity with responsive, interactive designs to deliver engaging user experiences."
            Type="subTitle"
          />
        </div>
        <div className={styleConfig.mediaWrapper}>
          {displayedItems.map((data, index) => (
            <div key={index} className="showcase-item">
            <CardShowcase
              media={data.media}
              mediaAlt={data.mediaAlt}
              titleContent={data.titleContent}
              category={data.category}
              descContent={data.descContent}
              linkDemo={data.linkDemo}
              tools={data.tools}
            />
            </div>
          ))}
          <div className="flex justify-center w-full mt-8">
            <Button onClick={handleShowMore} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : expanded ? (
                "Show Less"
              ) : (
                "Show More"
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
