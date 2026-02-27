import {
  Database,
  BarChart3,
  Users,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Database,
    title: "Data Scraping & Extraction",
    description: "Automated data collection from websites, social platforms, and public databases. Extract valuable insights from Facebook, LinkedIn, Instagram, and more.",
    features: [
      "Social media data mining",
      "Competitor price monitoring",
      "Lead generation automation",
      "Market research data collection"
    ]
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights with custom dashboards, reporting systems, and predictive analytics.",
    features: [
      "Real-time analytics dashboards",
      "Custom KPI tracking",
      "Automated reporting",
      "Predictive modeling"
    ]
  },
  {
    icon: Users,
    title: "CRM & Lead Management",
    description: "Streamline customer relationships with integrated CRM solutions, automated workflows, and intelligent lead scoring.",
    features: [
      "360° customer view",
      "Sales pipeline automation",
      "Email marketing integration",
      "Customer journey mapping"
    ]
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description: "End-to-end digital strategy implementation, from legacy system modernization to cloud-native solutions.",
    features: [
      "Legacy system migration",
      "Process digitization",
      "Cloud adoption strategy",
      "Change management support"
    ]
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Reduce manual work with intelligent automation. RPA, workflow automation, and AI-powered process optimization.",
    features: [
      "Robotic process automation",
      "Workflow optimization",
      "Document processing",
      "Integration automation"
    ]
  },
  {
    icon: Shield,
    title: "Data Security & Compliance",
    description: "Protect your business data with enterprise-grade security solutions and regulatory compliance frameworks.",
    features: [
      "Data encryption & protection",
      "GDPR/CCPA compliance",
      "Security audits",
      "Access control systems"
    ]
  }
];

const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "20+", label: "Active Clients" },
  { value: "3+", label: "Industries Served" },
  { value: "100%", label: "Commitment" },
];

export const BusinessSolutionsSection = () => {
  return (
    <section id="solutions" className="section-padding">
      <div className="container-max">
        {/* Header with Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
              Business Solutions
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Data-Driven Solutions for Modern Enterprises
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              TREZEAL Tech specializes in comprehensive data solutions. From social media scraping and analysis to enterprise automation, we help businesses harness the power of their data.
            </p>
            <Button size="lg" className="group" onClick={() => window.location.href = "/contact"}>
              Schedule Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <solution.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="font-display text-xl font-bold mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {solution.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Data Capabilities Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Social Media Data Intelligence
              </h3>
              <p className="text-muted-foreground mb-6">
                Extract valuable business insights from social platforms. Our data scraping solutions cover Facebook, Instagram, LinkedIn, Twitter, and more—helping you understand markets, track competitors, and identify opportunities.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Facebook", "Instagram", "LinkedIn", "Twitter", "TikTok", "YouTube"].map((platform) => (
                  <span
                    key={platform}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="font-display text-2xl font-bold text-primary">Multi</div>
                <div className="text-xs text-muted-foreground">Platform Support</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="font-display text-2xl font-bold text-primary">Fast</div>
                <div className="text-xs text-muted-foreground">Data Processing</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="font-display text-2xl font-bold text-primary">Real-time</div>
                <div className="text-xs text-muted-foreground">Analytics</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="font-display text-2xl font-bold text-primary">API</div>
                <div className="text-xs text-muted-foreground">Integration Ready</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
