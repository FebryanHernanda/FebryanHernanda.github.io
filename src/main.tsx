import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HeroSection } from "./assets/templates";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroSection />
  </StrictMode>
);
