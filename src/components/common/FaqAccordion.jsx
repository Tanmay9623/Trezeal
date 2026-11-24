import { useState } from "react";

export default function FaqAccordion({ items, idPrefix = "faq" }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-list">
      {items.map(({ question, answer }, index) => {
        const questionId = `${idPrefix}-question-${index}`;
        const answerId = `${idPrefix}-answer-${index}`;
        const isOpen = openIndex === index;

        return (
          <article className="faq-item" key={question}>
            <h3>
              <button
                id={questionId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {question}
                <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            {isOpen && (
              <div
                id={answerId}
                className="faq-answer"
                role="region"
                aria-labelledby={questionId}
              >
                <p>{answer}</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
