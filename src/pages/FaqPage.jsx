import { useState } from "react";

import PageHero from "../components/common/PageHero.jsx";
import { pageHeroes } from "../data/pageHeroes.js";

export default function FaqPage() {
  const [open, setOpen] = useState(null);
  return (
    <div className="react-page">
      <PageHero key={pageHeroes.faq.image} {...pageHeroes.faq} />
      <section className="page-body">
        <div className="container">
          <div className="faq-list">
            {[
              [
                "What does Trezeal offer?",
                "Software development, AI and automation, digital services, student mentoring and interview preparation.",
              ],
              [
                "How is pricing decided?",
                "Quotes are scoped per project after understanding the requirements.",
              ],
              [
                "Do you guarantee placement?",
                "No. We provide mentoring and preparation without promising employment outcomes.",
              ],
              [
                "Can you guide a final-year project?",
                "Yes. We can discuss project planning, implementation guidance and presentation preparation.",
              ],
            ].map(([question, answer], index) => (
              <article className="faq-item" key={question}>
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  aria-expanded={open === index}
                >
                  {question}
                  <span>{open === index ? "×" : "+"}</span>
                </button>
                {open === index && <p>{answer}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
