export default function ProcessSection() {
  return (
    <section className="process section-pad" id="process">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">
            <span />
            HOW WE WORK
          </p>
          <h2>
            From idea to <em>outcome.</em>
          </h2>
          <p className="section-intro">
            A straightforward process built on understanding, planning, delivery
            and support.
          </p>
        </div>
        <div className="steps">
          {[
            "Understand your goals",
            "Plan the right approach",
            "Build and practise",
            "Review and improve",
            "Support the next step",
          ].map((step, index) => (
            <article key={step}>
              <span>0{index + 1}</span>
              <div>
                <h3>{step}</h3>
                <p>
                  We clarify priorities, work practically and keep the next
                  action visible.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
