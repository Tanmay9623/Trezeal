import { useSearchParams } from "react-router-dom";

import PageHero from "../components/common/PageHero.jsx";
import ContentSections from "../components/common/ContentSections.jsx";
import ContactSection from "../components/home/ContactSection.jsx";
import { contactEditorialSections } from "../data/expandedContent.js";
import { pageHeroes } from "../data/pageHeroes.js";

export default function ContactPage() {
  const [params] = useSearchParams();
  const enquiryType = params.get("type") ?? "";
  const isInterview = enquiryType === "interview";

  return (
    <div className="react-page">
      <PageHero
        key={pageHeroes["/contact"].image}
        {...pageHeroes["/contact"]}
      />
      <ContactSection
        key={enquiryType}
        compact={isInterview}
        initialEnquiry={enquiryType}
      />
      <ContentSections sections={contactEditorialSections} />
    </div>
  );
}
