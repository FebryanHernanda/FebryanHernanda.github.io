import { Title } from "@/assets/atoms";
import { ShowcaseData, styleConfig } from "./ShowcaseSection.config";
import { CardShowcase } from "@/assets/molecules";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const ShowcaseSection = () => {
  const [displayedItems, setDisplayedItems] = useState(
    ShowcaseData.slice(0, 4)
  );
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nextItems, setNextItems] = useState<typeof ShowcaseData>([]);

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
    <section id="Showcase" className="items-center">
      <div className={styleConfig.container}>
        <div className={styleConfig.textWrapper}>
          <Title Label="Showcase" Type="Bold" />
          <Title
            Label="A showcase of my latest frontend projects, combining creativity with responsive, interactive designs to deliver engaging user experiences."
            Type="subTitle"
          />
        </div>
        <div className={styleConfig.mediaWrapper}>
          {displayedItems.map((data, index) => (
            <CardShowcase
              key={index}
              media={data.media}
              mediaAlt={data.mediaAlt}
              titleContent={data.titleContent}
              category={data.category}
              descContent={data.descContent}
              linkDemo={data.linkDemo}
              tools={data.tools}
            />
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
