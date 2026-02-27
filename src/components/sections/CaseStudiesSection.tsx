import { TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const imgWebPlatform = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop";
const imgDashboard = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop";

const caseStudies = [
  {
    title: "Custom Web Platform",
    client: "E-Commerce Client",
    image: imgWebPlatform,
    results: [
      { metric: "Faster", label: "Order Processing" },
      { metric: "On Time", label: "Delivered" },
    ],
  },
  {
    title: "Business Intelligence Dashboard",
    client: "Services Business",
    image: imgDashboard,
    results: [
      { metric: "Clearer", label: "Data Visibility" },
      { metric: "Stable", label: "Reliable Uptime" },
    ],
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-medium mb-2 block">Our Work</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Real Results, Real Impact
          </h2>
          <p className="text-muted-foreground">
            See how our solutions have helped businesses grow and operate more efficiently.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group glass-card p-0 overflow-hidden hover-card"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-muted-foreground mb-1">{study.client}</p>
                <h3 className="font-display text-lg font-semibold mb-4">
                  {study.title}
                </h3>

                {/* Results */}
                <div className="flex gap-6">
                  {study.results.map((result) => (
                    <div key={result.label}>
                      <div className="font-display text-2xl font-bold text-primary">
                        {result.metric}
                      </div>
                      <div className="text-xs text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
