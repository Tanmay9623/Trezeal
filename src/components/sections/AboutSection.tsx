import { motion } from "framer-motion";
const aboutImage = "/Gemini_Generated_Image_31dthk31dthk31dt.png";

const milestones = [
  { year: "2023", title: "Company Founded" },
  { year: "2024", title: "First Projects Delivered" },
  { year: "2025", title: "3+ Industries Served" },
  { year: "2026", title: "Growing Strong" },
];

export const AboutSection = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-50" />

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Trezeal team"
                className="w-full h-auto"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 glass-card">
              <div className="font-display text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Commitment</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-primary text-sm font-medium mb-2 block">About TREZEAL</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Passionate Tech Startup
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Trezeal is an early-stage technology company with a clear mission: helping
              businesses grow through smart software, web development, and data-driven solutions.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We have completed 20+ projects across 3+ industries, working closely with 20+
              active clients who value honest collaboration and quality delivery.
            </p>

            {/* Timeline */}
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div>
                    <span className="font-display font-bold text-primary">{milestone.year}</span>
                    <p className="text-xs text-muted-foreground">{milestone.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
