import { useSearchParams } from "react-router-dom";

import PageHero from "../components/common/PageHero.jsx";
import ContactSection from "../components/home/ContactSection.jsx";
import { pageHeroes } from "../data/pageHeroes.js";

export default function ContactPage() {
  const [params] = useSearchParams();
  const isInterview = params.get("type") === "interview";

  return (
    <div className="react-page">
      <PageHero
        key={pageHeroes["/contact"].image}
        {...pageHeroes["/contact"]}
      />
      <ContactSection
        compact={isInterview}
        initialEnquiry={isInterview ? "interview" : ""}
      />
    </div>
  );
}
