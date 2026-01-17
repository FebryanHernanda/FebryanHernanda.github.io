
import { Helmet } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArticlesPage, HomePage, WorkExperiencePage } from "../assets/pages";
import { MainLayout } from "@/assets/templates";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Febryan Hernanda | Fullstack Developer & Software Engineer</title>
                  <meta
                    name="description"
                    content="Welcome to the portfolio of Febryan Hernanda. Explore my projects, skills, and experience as a Fullstack Developer and Software Engineer."
                  />
                  <link rel="canonical" href="https://febryanhernanda.github.io/" />
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
                  <title>Work Experience | Febryan Hernanda</title>
                  <meta
                    name="description"
                    content="Detailed work history and professional experience of Febryan Hernanda as a Fullstack Developer."
                  />
                  <link
                    rel="canonical"
                    href="https://febryanhernanda.github.io/work-experience"
                  />
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
                  <title>Articles | Febryan Hernanda</title>
                  <meta
                    name="description"
                    content="Read articles and insights on web development and technology by Febryan Hernanda."
                  />
                  <link rel="canonical" href="https://febryanhernanda.github.io/article" />
                </Helmet>
                <ArticlesPage />
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
