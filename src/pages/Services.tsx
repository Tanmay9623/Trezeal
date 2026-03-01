import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, Globe, Code, Database, Cloud, ArrowRight, Check, X, FileText, Layers, Zap, Clock, Users, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
    docs: {
      overview: "Our Web Development service delivers high-performance, scalable digital experiences tailored to your business goals. From customer-facing portals to internal enterprise tools, we architect solutions that grow with you.",
      steps: [
        { icon: FileText, title: "Discovery & Architecture", desc: "We audit your requirements, map user journeys, and design a robust technical architecture before a single line of code is written." },
        { icon: Layers, title: "Design & Prototyping", desc: "Interactive prototypes are reviewed with your stakeholders to validate UX flows and branding alignment early in the process." },
        { icon: Zap, title: "Agile Development", desc: "Two-week sprints with demo checkpoints ensure continuous delivery and rapid course correction based on your feedback." },
        { icon: ShieldCheck, title: "QA, Launch & Support", desc: "Rigorous automated testing, performance audits, and post-launch monitoring backed by an SLA-guaranteed support team." },
      ],
      highlights: ["React / Next.js / Vue", "REST & GraphQL APIs", "SEO-optimized architecture", "WCAG accessibility", "CI/CD pipelines", "99.9% uptime SLA"],
      timeline: "8–16 weeks",
      teamSize: "3–8 engineers",
    },
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
    docs: {
      overview: "We build bespoke software that replaces costly off-the-shelf products, modernises legacy systems, and integrates your entire technology stack into a single, coherent ecosystem.",
      steps: [
        { icon: FileText, title: "Process Mapping", desc: "Deep-dive workshops with your operations teams to map workflows, bottlenecks, and integration touch-points." },
        { icon: Layers, title: "System Design", desc: "Architecture blueprints, data-model definitions, and API contracts reviewed and signed off before development begins." },
        { icon: Zap, title: "Iterative Build", desc: "Modular development approach so individual components ship and go live independently, reducing risk and time-to-value." },
        { icon: ShieldCheck, title: "Handover & Training", desc: "Comprehensive documentation, admin training sessions, and a 90-day hypercare period included in every engagement." },
      ],
      highlights: ["Java / .NET / Python", "Microservices & monoliths", "ERP / SAP integration", "Role-based access control", "Audit trails & compliance", "On-premise or cloud"],
      timeline: "12–24 weeks",
      teamSize: "4–10 engineers",
    },
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
    docs: {
      overview: "From proof-of-concept models to production-grade ML pipelines, our AI practice helps you turn raw data into intelligent automation and predictive insights that drive measurable business outcomes.",
      steps: [
        { icon: FileText, title: "Data Assessment", desc: "We evaluate your existing data assets, labelling quality, and infrastructure readiness to define a realistic AI roadmap." },
        { icon: Layers, title: "Model Development", desc: "Rapid experimentation cycles using AutoML and custom architectures, with full explainability reporting for stakeholders." },
        { icon: Zap, title: "MLOps & Deployment", desc: "Models are packaged into versioned APIs and monitored for drift, ensuring accuracy holds up in production environments." },
        { icon: ShieldCheck, title: "Governance & Ethics", desc: "Bias audits, privacy-preserving techniques, and regulatory compliance reviews are built into every AI engagement." },
      ],
      highlights: ["Python / TensorFlow / PyTorch", "LLM fine-tuning & RAG", "Real-time inference APIs", "Model monitoring & retraining", "Edge AI deployment", "GDPR-compliant pipelines"],
      timeline: "6–20 weeks",
      teamSize: "2–6 ML engineers",
    },
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
    docs: {
      overview: "We partner with your leadership team to design and execute digital transformation programmes — from CRM rollout and BI dashboards to full enterprise process re-engineering.",
      steps: [
        { icon: FileText, title: "Maturity Assessment", desc: "Benchmark your current digital maturity across people, processes, and technology against industry standards." },
        { icon: Layers, title: "Roadmap Design", desc: "Prioritised transformation roadmap with clear ROI milestones and change-management playbooks for each initiative." },
        { icon: Zap, title: "Phased Implementation", desc: "Pilot programmes in one business unit before rolling out globally, minimising disruption and capturing learnings early." },
        { icon: ShieldCheck, title: "Adoption & Optimisation", desc: "Dedicated change-management support, training academies, and quarterly reviews to sustain and grow the transformation." },
      ],
      highlights: ["Salesforce / HubSpot CRM", "Power BI / Tableau dashboards", "RPA with UiPath / Automation Anywhere", "Microsoft 365 & Google Workspace", "KPI-linked reporting", "Multi-region rollout"],
      timeline: "10–30 weeks",
      teamSize: "3–12 consultants",
    },
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
    docs: {
      overview: "We design, migrate, and operate cloud environments optimised for cost, performance, and security — whether you're lifting-and-shifting workloads or re-architecting for cloud-native operation.",
      steps: [
        { icon: FileText, title: "Cloud Readiness Audit", desc: "Assessment of workloads, dependencies, and security posture to produce a migration risk register and cost-savings forecast." },
        { icon: Layers, title: "Architecture Design", desc: "Multi-cloud or single-cloud blueprints using infrastructure-as-code (Terraform / Pulumi) for repeatability and auditability." },
        { icon: Zap, title: "Migration & Cutover", desc: "Zero-downtime migration sprints with automated rollback procedures and real-time traffic monitoring throughout." },
        { icon: ShieldCheck, title: "Managed Operations", desc: "24/7 NOC coverage, automated patching, cost-optimisation reviews, and monthly executive reporting included post-launch." },
      ],
      highlights: ["AWS / Azure / GCP certified", "Kubernetes & Helm charts", "Terraform & Ansible IaC", "SOC 2 & ISO 27001 posture", "FinOps cost governance", "99.95% uptime guarantee"],
      timeline: "6–18 weeks",
      teamSize: "2–8 cloud engineers",
    },
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
    docs: {
      overview: "We digitise factory floors and supply chains with IoT sensor networks, SCADA systems, and intelligent robotics — helping manufacturers achieve higher throughput, lower defect rates, and full OEE visibility.",
      steps: [
        { icon: FileText, title: "Site Survey & OEE Baseline", desc: "On-site assessment of existing machinery, control systems, and data capture gaps to establish current Overall Equipment Effectiveness." },
        { icon: Layers, title: "System Architecture", desc: "Design of sensor networks, edge-compute nodes, PLC/SCADA integration points, and cloud data pipelines tailored to your plant layout." },
        { icon: Zap, title: "Installation & Integration", desc: "Phased hardware installation and software commissioning with minimal production downtime; full factory acceptance testing before go-live." },
        { icon: ShieldCheck, title: "Monitoring & Optimisation", desc: "Continuous OEE monitoring, predictive maintenance alerts, and quarterly optimisation reviews to steadily improve throughput and quality." },
      ],
      highlights: ["Siemens / Allen-Bradley PLCs", "MQTT & OPC-UA protocols", "Edge computing with NVIDIA Jetson", "Digital twin modelling", "Predictive maintenance AI", "IEC 62443 cybersecurity"],
      timeline: "12–28 weeks",
      teamSize: "3–10 engineers",
    },
  },
];

type Service = typeof services[0];

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState<Service | null>(null);

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

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeService ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeService]);

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

                  <Button size="lg" className="group" onClick={() => setActiveService(service)}>
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

      {/* Service Documentation Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
            onClick={() => setActiveService(null)}
          >
            <motion.div
              key="modal-panel"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl bg-background border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header image strip */}
              <div className="relative h-44 overflow-hidden rounded-t-2xl">
                <img src={activeService.image} alt={activeService.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <activeService.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-white font-display text-2xl font-bold">{activeService.title}</h2>
                </div>
                <button
                  onClick={() => setActiveService(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal body */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Overview */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">{activeService.docs.overview}</p>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-secondary/30 p-4 flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Typical Timeline</p>
                      <p className="font-semibold text-sm">{activeService.docs.timeline}</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/30 p-4 flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Dedicated Team</p>
                      <p className="font-semibold text-sm">{activeService.docs.teamSize}</p>
                    </div>
                  </div>
                </div>

                {/* Engagement process */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Engagement Process</h3>
                  <div className="space-y-4">
                    {activeService.docs.steps.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-0.5">
                            <span className="text-primary mr-1">{String(i + 1).padStart(2, '0')}.</span>{step.title}
                          </p>
                          <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech highlights */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Technologies & Standards</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeService.docs.highlights.map((h) => (
                      <span key={h} className="inline-flex items-center gap-1.5 text-xs bg-secondary border border-border rounded-full px-3 py-1">
                        <Check className="w-3 h-3 text-primary" />{h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button className="flex-1 group" size="lg" onClick={() => { setActiveService(null); navigate('/contact'); }}>
                    Book a Free Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1" onClick={() => setActiveService(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
