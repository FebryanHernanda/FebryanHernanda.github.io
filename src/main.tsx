import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  ContactSection,
  FooterSection,
  HeroSection,
  ServicesSection,
  ShowcaseSection,
  TechStackSection,
} from "./assets/templates";
import App from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <div className="max-w-[1600px] mx-auto">
      <HeroSection />
      <TechStackSection />
      <ShowcaseSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </div>
  </StrictMode>
);
