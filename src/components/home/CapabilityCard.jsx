import CapabilityIcon from "./CapabilityIcon.jsx";

export default function CapabilityCard({ capability, index }) {
  const { bullets, description, icon, title } = capability;
  const titleId = `capability-title-${index}`;
  const descriptionId = `capability-description-${index}`;

  return (
    <article
      className="capability-card"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div className="capability-icon">
        <CapabilityIcon name={icon} />
      </div>
      <h3 id={titleId}>{title}</h3>
      <p className="capability-description" id={descriptionId}>
        {description}
      </p>
      <ul className="capability-list" aria-label={`${title} includes`}>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}
