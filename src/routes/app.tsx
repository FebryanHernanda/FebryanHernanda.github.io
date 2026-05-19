import { Helmet } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "@/assets/templates";
import { lazy, Suspense } from "react";

// Lazy load pages
const HomePage = lazy(() =>
  import("../assets/pages").then((module) => ({ default: module.HomePage }))
);
const WorkExperiencePage = lazy(() =>
  import("../assets/pages").then((module) => ({
    default: module.WorkExperiencePage,
  }))
);
const ArticlesPage = lazy(() =>
  import("../assets/pages").then((module) => ({ default: module.ArticlesPage }))
);

const SITE_URL = "https://febryanhernanda.github.io";
const OG_IMAGE = `${SITE_URL}/img/og-preview.png`;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>
                      Febryan Hernanda — Software Engineer | Web & System
                      Development Indonesia
                    </title>
                    <meta
                      name="description"
                      content="Software Engineer based in Jakarta, Indonesia. Building modern websites, scalable backend systems, and end-to-end digital platforms with React, Go, TypeScript, and PostgreSQL."
                    />
                    <link rel="canonical" href={`${SITE_URL}/`} />

                    {/* Open Graph */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={`${SITE_URL}/`} />
                    <meta
                      property="og:title"
                      content="Febryan Hernanda — Software Engineer"
                    />
                    <meta
                      property="og:description"
                      content="Building modern websites, scalable backend systems, and end-to-end digital platforms. React, Go, TypeScript, PostgreSQL."
                    />
                    <meta property="og:image" content={OG_IMAGE} />

                    {/* Twitter */}
                    <meta
                      name="twitter:card"
                      content="summary_large_image"
                    />
                    <meta
                      name="twitter:title"
                      content="Febryan Hernanda — Software Engineer"
                    />
                    <meta
                      name="twitter:description"
                      content="Building modern websites, scalable backend systems, and end-to-end digital platforms. React, Go, TypeScript, PostgreSQL."
                    />
                    <meta name="twitter:image" content={OG_IMAGE} />
                  </Helmet>
                  <HomePage />
                </>
              }
            />
            <Route
              path="/work-experience"
              element={
                <>
                  <Helmet>
                    <title>
                      Work Experience — Febryan Hernanda | Software Engineer
                      Portfolio
                    </title>
                    <meta
                      name="description"
                      content="Professional experience of Febryan Hernanda — Software Engineer building enterprise web platforms, backend services, dashboards, and scalable system architecture."
                    />
                    <link
                      rel="canonical"
                      href={`${SITE_URL}/work-experience`}
                    />

                    {/* Open Graph */}
                    <meta property="og:type" content="website" />
                    <meta
                      property="og:url"
                      content={`${SITE_URL}/work-experience`}
                    />
                    <meta
                      property="og:title"
                      content="Work Experience — Febryan Hernanda"
                    />
                    <meta
                      property="og:description"
                      content="Professional experience building enterprise web platforms, backend services, dashboards, and scalable systems."
                    />
                    <meta property="og:image" content={OG_IMAGE} />

                    {/* Twitter */}
                    <meta
                      name="twitter:card"
                      content="summary_large_image"
                    />
                    <meta
                      name="twitter:title"
                      content="Work Experience — Febryan Hernanda"
                    />
                    <meta
                      name="twitter:description"
                      content="Professional experience building enterprise web platforms, backend services, dashboards, and scalable systems."
                    />
                    <meta name="twitter:image" content={OG_IMAGE} />
                  </Helmet>
                  <WorkExperiencePage />
                </>
              }
            />
            <Route
              path="/article"
              element={
                <>
                  <Helmet>
                    <title>
                      Articles — Software Engineering & Web Architecture |
                      Febryan Hernanda
                    </title>
                    <meta
                      name="description"
                      content="Technical articles on software engineering, system design, scalable web architecture, and modern development practices by Febryan Hernanda."
                    />
                    <link rel="canonical" href={`${SITE_URL}/article`} />

                    {/* Open Graph */}
                    <meta property="og:type" content="website" />
                    <meta
                      property="og:url"
                      content={`${SITE_URL}/article`}
                    />
                    <meta
                      property="og:title"
                      content="Articles — Febryan Hernanda"
                    />
                    <meta
                      property="og:description"
                      content="Technical articles on software engineering, system design, scalable architecture, and modern development practices."
                    />
                    <meta property="og:image" content={OG_IMAGE} />

                    {/* Twitter */}
                    <meta
                      name="twitter:card"
                      content="summary_large_image"
                    />
                    <meta
                      name="twitter:title"
                      content="Articles — Febryan Hernanda"
                    />
                    <meta
                      name="twitter:description"
                      content="Technical articles on software engineering, system design, scalable architecture, and modern development practices."
                    />
                    <meta name="twitter:image" content={OG_IMAGE} />
                  </Helmet>
                  <ArticlesPage />
                </>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
