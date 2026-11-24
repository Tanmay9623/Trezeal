export default function ContentSections({
  sections,
  className = "",
  startIndex = 0,
}) {
  if (!sections?.length) return null;

  return (
    <div className={`long-content-sections ${className}`}>
      {sections.map((section, index) => (
        <section
          className="long-content-section"
          key={`${section.title}-${index}`}
        >
          <div className="container long-content-layout">
            <div className="long-content-marker" aria-hidden="true">
              <svg
                className="long-content-mark"
                viewBox="0 0 48 48"
                focusable="false"
              >
                <circle cx="24" cy="24" r="20" />
                <path d="M14 28.5 21 21l5 5 8-10" />
                <circle cx="34" cy="16" r="2" />
              </svg>
              <span>
                {String(startIndex + index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="long-content-copy">
              {section.eyebrow && (
                <p className="eyebrow">
                  <span />
                  {section.eyebrow}
                </p>
              )}
              <h2>{section.title}</h2>
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
        </section>
      ))}
    </div>
  );
}
