import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { styleConfig } from "./ScrollToTop.config";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={` ${styleConfig.buttonStyle} ${
        isVisible ? styleConfig.isVisible : styleConfig.notVisible
      }`}
      aria-label="Scroll to Top"
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollToTop;
