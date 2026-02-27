import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, Globe, Code, Database, Cloud, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Real Unsplash photos
const imgWebDev = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80&auto=format&fit=crop";
const imgSoftware = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80&auto=format&fit=crop";
const imgAI = "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format&fit=crop";
const imgBusiness = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&q=80&auto=format&fit=crop";
const imgCloud = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format&fit=crop";
const imgAutomation = "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=900&q=80&auto=format&fit=crop";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description: "Enterprise-grade web applications, customer portals, and digital platforms built for global scale and performance.",
    image: imgWebDev,
    features: [
      "Enterprise Portals",
      "E-commerce Platforms",
      "Progressive Web Apps",
      "API Development",
    ],
  },
  {
    id: "software",
    icon: Code,
    title: "Software Development",
    description: "Custom enterprise software solutions, ERP integrations, and business process automation for Fortune 500 companies.",
    image: imgSoftware,
    features: [
      "Custom ERP Systems",
      "Legacy Modernization",
      "System Integration",
      "Desktop Applications",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Deploy cutting-edge AI systems that predict, optimize, and automate your business and industrial processes.",
    image: imgAI,
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Process Automation",
    ],
  },
  {
    id: "business",
    icon: Database,
    title: "Business Solutions",
    description: "End-to-end digital transformation, CRM implementation, and enterprise resource planning for global operations.",
    image: imgBusiness,
    features: [
      "Digital Transformation",
      "CRM Implementation",
      "Business Intelligence",
      "Workflow Automation",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud architecture, DevOps practices, and managed services for enterprise-level deployments.",
    image: imgCloud,
    features: [
      "Cloud Migration",
      "DevOps & CI/CD",
      "Kubernetes & Docker",
      "24/7 Managed Services",
    ],
  },
  {
    id: "automation",
    icon: Cpu,
    title: "Industrial Automation",
    description: "Smart manufacturing, IoT integration, and CNC optimization systems for modern factories.",
    image: imgAutomation,
    features: [
      "IoT Integration",
      "PLC Programming",
      "SCADA Systems",
      "Robotics Integration",
    ],
  },
];

const Services = () => {
  const location = useLocation();

  // Scroll to section on hash change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 bg-dots opacity-30" />
          <div className="container-max px-4 md:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <span className="text-primary text-sm font-medium mb-2 block">Our Services</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Enterprise Solutions at Scale
              </h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive technology solutions powering Fortune 500 companies and global enterprises.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding scroll-mt-20 ${index % 2 === 1 ? 'bg-secondary/30' : ''}`}
          >
            <div className="container-max">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="font-display text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" className="group">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Services;
