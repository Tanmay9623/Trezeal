import { useId, useState } from "react";

export default function ContentSections({
  sections,
  className = "",
  startIndex = 0,
}) {
  const idPrefix = useId();
  const [expandedSections, setExpandedSections] = useState(() => new Set());

  if (!sections?.length) return null;

  const toggleSection = (index) => {
    setExpandedSections((expanded) => {
      const nextExpanded = new Set(expanded);

      if (nextExpanded.has(index)) {
        nextExpanded.delete(index);
      } else {
        nextExpanded.add(index);
      }

      return nextExpanded;
    });
  };

  return (
    <div className={`long-content-sections ${className}`}>
      {sections.map((section, index) => {
        const sectionNumber = String(startIndex + index + 1).padStart(2, "0");
        const headingId = `${idPrefix}-heading-${index}`;
        const contentId = `${idPrefix}-content-${index}`;
        const isExpanded = expandedSections.has(index);

        return (
          <section
            className="long-content-section"
            key={`${section.title}-${index}`}
          >
            <div className="container long-content-layout">
              <button
                className="long-content-marker"
                type="button"
                aria-label={`${isExpanded ? "Collapse" : "Expand"} section ${sectionNumber}`}
                aria-expanded={isExpanded}
                aria-controls={contentId}
                onClick={() => toggleSection(index)}
              >
                <svg
                  className="long-content-mark"
                  viewBox="0 0 48 48"
                  focusable="false"
                  aria-hidden="true"
                >
                  <circle cx="24" cy="24" r="20" />
                  <path d="M14 28.5 21 21l5 5 8-10" />
                  <circle cx="34" cy="16" r="2" />
                </svg>
                <span>{sectionNumber}</span>
              </button>
              <div className="long-content-copy">
                {section.eyebrow && (
                  <p className="eyebrow">
                    <span />
                    {section.eyebrow}
                  </p>
                )}
                <h2>
                  <button
                    className="long-content-heading"
                    id={headingId}
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={contentId}
                    onClick={() => toggleSection(index)}
                  >
                    {section.title}
                    <span
                      className="long-content-heading-indicator"
                      aria-hidden="true"
                    >
                      {isExpanded ? "−" : "+"}
                    </span>
                  </button>
                </h2>
                <div
                  className="long-content-body"
                  id={contentId}
                  role="region"
                  aria-labelledby={headingId}
                  hidden={!isExpanded}
                >
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {section.timeline && (
                    <ol className="engagement-timeline">
                      {section.timeline.map((item) => (
                        <li key={item.stage}>
                          <span>{item.stage}</span>
                          <div>
                            <h3>{item.title}</h3>
                            <p>{item.copy}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
