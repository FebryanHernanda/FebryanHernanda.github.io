import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  ContactSection,
  FooterSection,
  HeroSection,
  ServicesSection,
  ShowcaseSection,
} from "./assets/templates";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="max-w-[1600px] mx-auto">
      <HeroSection />
      <ShowcaseSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </div>
  </StrictMode>
);
