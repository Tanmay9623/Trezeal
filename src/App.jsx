import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import CookieConsent from "./components/common/CookieConsent.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
import SeoMeta from "./components/common/SeoMeta.jsx";
import Home from "./components/home/Home.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import InnerPage from "./pages/InnerPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import ResourceArticlePage from "./pages/ResourceArticlePage.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import StandaloneContentPage from "./pages/StandaloneContentPage.jsx";
import { pageHeroes } from "./data/pageHeroes.js";
import { pageCopy } from "./data/pageCopy.js";

export default function App() {
  return (
    <>
      <SeoMeta />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/blog" element={<ResourcesPage />} />
          <Route path="/blog/:slug" element={<ResourceArticlePage />} />
          <Route
            path="/resources/:slug"
            element={<ResourceArticlePage />}
          />
          <Route
            path="/pricing"
            element={<StandaloneContentPage path="/pricing" />}
          />
          <Route
            path="/careers"
            element={<StandaloneContentPage path="/careers" />}
          />
          {Object.entries(pageCopy).map(([path, copy]) => (
            <Route
              key={path}
              path={path}
              element={
                <InnerPage path={path} copy={copy} hero={pageHeroes[path]} />
              }
            />
          ))}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route
            path="/cookie-policy"
            element={<LegalPage path="/cookie-policy" />}
          />
          <Route
            path="/privacy-policy"
            element={<LegalPage path="/privacy-policy" />}
          />
          <Route
            path="/terms-and-conditions"
            element={<LegalPage path="/terms-and-conditions" />}
          />
          <Route
            path="/refund-policy"
            element={<LegalPage path="/refund-policy" />}
          />
          <Route
            path="/shipping-policy"
            element={<LegalPage path="/shipping-policy" />}
          />
          <Route
            path="/disclaimer"
            element={<LegalPage path="/disclaimer" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
