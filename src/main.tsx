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
    <HeroSection />
    <ShowcaseSection />
    <ServicesSection />
    <ContactSection />
    <FooterSection />
  </StrictMode>
);
