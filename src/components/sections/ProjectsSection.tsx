import { ExternalLink, ArrowRight, Filter, Star, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
// Project images — each project has a unique, contextually relevant photo
// Data Analytics Dashboard
const imgAnalyticsDashboard = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=70";
// Social Media Data Extraction
const imgSocialMedia = "https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D";
// Custom Business Management System
const imgBusinessSystem = "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=70";
// Lead Generation Automation
const imgLeadGen = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=70";
// E-Commerce Store
const imgEcommerce = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=70";
// Competitor Monitoring Dashboard
const imgCompetitorMonitor = "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&auto=format&fit=crop&q=70";

const categories = ["All", "Web Development", "Data Solutions", "Software Development", "Business Solutions"];

const projects = [
  {
    title: "Data Analytics Dashboard",
    client: "Retail Client",
    category: "Web Development",
    description: "Built a clean, real-time analytics dashboard that gives the client a clear view of their sales data and key business metrics.",
    image: imgAnalyticsDashboard,
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    results: "Faster, clearer business decisions",
    featured: true,
    testimonial: "TREZEAL understood exactly what we needed and delivered it on time.",
    clientLogo: "RC",
  },
  {
    title: "Social Media Data Extraction Tool",
    client: "Marketing Agency",
    category: "Data Solutions",
    description: "Developed an automated scraping and reporting tool that pulls business insights from Facebook, Instagram, and LinkedIn.",
    image: imgSocialMedia,
    technologies: ["Python", "API Integration", "Data Parsing", "Cloud"],
    results: "Saves hours of manual research weekly",
    featured: false,
  },
  {
    title: "Custom Business Management System",
    client: "Spare Parts Distributor",
    category: "Software Development",
    description: "Built a custom internal system to manage inventory, orders, and supplier communications — replacing spreadsheets entirely.",
    image: imgBusinessSystem,
    technologies: ["React", ".NET", "SQL Server", "REST API"],
    results: "Streamlined daily operations",
    featured: false,
  },
  {
    title: "Lead Generation Automation",
    client: "B2B Services Business",
    category: "Business Solutions",
    description: "Created a data enrichment pipeline to automatically identify and qualify potential leads from public web sources.",
    image: imgLeadGen,
    technologies: ["Python", "Selenium", "NLP", "CRM Integration"],
    results: "More qualified leads, less manual work",
    featured: true,
    testimonial: "Exactly what our sales team needed to work smarter.",
    clientLogo: "B2B",
  },
  {
    title: "E-Commerce Store Build",
    client: "Fashion Brand",
    category: "Web Development",
    description: "Designed and built a modern e-commerce storefront with smooth checkout flow and mobile-friendly design.",
    image: imgEcommerce,
    technologies: ["Next.js", "Shopify", "Stripe", "CDN"],
    results: "Live and converting from day one",
    featured: false,
  },
  {
    title: "Competitor Monitoring Dashboard",
    client: "Finance Services Client",
    category: "Data Solutions",
    description: "Built a simple dashboard that aggregates competitor pricing, social activity, and market signals from public sources.",
    image: imgCompetitorMonitor,
    technologies: ["Data Scraping", "Python", "Real-time APIs", "Visualization"],
    results: "Always-on market awareness",
    featured: false,
  },
];

const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "20+", label: "Active Clients" },
  { value: "3+", label: "Industries Served" },
  { value: "100%", label: "Commitment" },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-max">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-6 bg-card border border-border rounded-2xl"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="block text-3xl md:text-4xl font-display font-bold text-primary"
              >
                {stat.value}
              </motion.span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
              Our Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Projects That Drive Results
            </h2>
            <p className="text-muted-foreground text-lg">
              From data intelligence to enterprise platforms, we deliver solutions that transform business operations.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <h3 className="font-display text-xl font-semibold">Featured Success Stories</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded">
                        {project.category}
                      </span>
                      <span className="px-2 py-1 text-xs font-semibold bg-accent/10 text-accent-foreground rounded flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                    <h4 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    {project.testimonial && (
                      <blockquote className="border-l-2 border-primary pl-4 mb-4 italic text-sm text-muted-foreground">
                        "{project.testimonial}"
                        <footer className="mt-1 font-semibold text-foreground not-italic">
                          — {project.client}
                        </footer>
                      </blockquote>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        {project.results}
                      </span>
                      <Button variant="ghost" size="sm" className="group/btn" onClick={() => window.location.href = "/contact"}>
                        Discuss Similar Project
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Filter className="w-5 h-5 text-muted-foreground" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wide">
                    {project.client}
                  </p>
                  <h3 className="font-display text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Result */}
                  <div className="pt-4 border-t border-border">
                    <span className="text-sm font-semibold text-primary">
                      {project.results}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20"
        >
          <h3 className="font-display text-2xl font-bold mb-3">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We are actively taking on new projects. Let's talk about what we can build for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" onClick={() => window.location.href = "/contact"}>
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = "/services"}>
              Explore Our Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
