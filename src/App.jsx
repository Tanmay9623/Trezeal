import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import SeoMeta from "./components/common/SeoMeta.jsx";
import Home from "./components/home/Home.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import InnerPage from "./pages/InnerPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import { pageHeroes } from "./data/pageHeroes.js";
import { pageCopy } from "./data/pageCopy.js";

export default function App() {
  return (
    <>
      <SeoMeta />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {Object.entries(pageCopy).map(([path, copy]) => (
            <Route
              key={path}
              path={path}
              element={<InnerPage copy={copy} hero={pageHeroes[path]} />}
            />
          ))}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route
            path="/privacy-policy"
            element={
              <InnerPage
                copy={[
                  "PRIVACY POLICY",
                  "Privacy policy draft.",
                  "Draft for review. Replace company-specific legal details before publishing.",
                ]}
              />
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <InnerPage
                copy={[
                  "TERMS",
                  "Terms and conditions draft.",
                  "Draft for review. Replace company-specific legal details before publishing.",
                ]}
              />
            }
          />
          <Route
            path="/refund-policy"
            element={
              <InnerPage
                copy={[
                  "REFUNDS",
                  "Refund policy draft.",
                  "Draft for review. Replace company-specific refund terms before publishing.",
                ]}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
