import { Brain, Cpu, Zap, Settings, ArrowRight, Globe, Code, Database, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Real Unsplash photos
const imgWebDev = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80&auto=format&fit=crop";
const imgSoftware = "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
const imgAi = "https://images.unsplash.com/photo-1713345248737-2698000f143d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFpfGVufDB8fDB8fHww";
const imgBusiness = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&q=80&auto=format&fit=crop";
const imgCloud = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format&fit=crop";
const imgAutomation = "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=900&q=80&auto=format&fit=crop";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description: "Enterprise web applications, portals, and digital platforms built for scale and performance.",
    image: imgWebDev,
  },
  {
    id: "software",
    icon: Code,
    title: "Software Development",
    description: "Custom enterprise software, ERP integrations, and business automation solutions.",
    image: imgSoftware,
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent systems for predictive analytics, automation, and business optimization.",
    image: imgAi,
  },
  {
    id: "business",
    icon: Database,
    title: "Business Solutions",
    description: "End-to-end digital transformation, CRM, and enterprise resource planning.",
    image: imgBusiness,
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud architecture, DevOps, and managed services for enterprises.",
    image: imgCloud,
  },
  {
    id: "automation",
    icon: Cpu,
    title: "Industrial Automation",
    description: "Smart manufacturing, IoT integration, and CNC optimization systems.",
    image: imgAutomation,
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
              What We Do
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Enterprise Technology Services
            </h2>
            <p className="text-muted-foreground text-lg">
              End-to-end solutions from web platforms to data intelligence systems.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={`/services#${service.id}`}
                className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
