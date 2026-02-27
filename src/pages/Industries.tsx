import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Globe, Zap, TrendingUp, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
// Real Unsplash photos
const imgEcommerce = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop";
const imgSpareParts = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80&auto=format&fit=crop";
const imgFinance = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&q=80&auto=format&fit=crop";
const imgGrowth = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80&auto=format&fit=crop";

const industries = [
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-Commerce & Retail",
    description: "Custom web platforms, inventory management, and data-driven solutions to grow your online business.",
    image: imgEcommerce,
    solutions: ["Custom e-commerce platforms", "Inventory & order management", "Customer analytics", "Payment integration"],
  },
  {
    id: "spare-parts",
    icon: Globe,
    title: "Spare Parts & Distribution",
    description: "Smart catalog systems, supplier portals, and procurement automation for spare parts businesses.",
    image: imgSpareParts,
    solutions: ["Parts catalog management", "Supplier & vendor portals", "Procurement automation", "Stock & demand forecasting"],
  },
  {
    id: "finance",
    icon: Zap,
    title: "Finance & Accounting",
    description: "Business intelligence dashboards, automated reporting, and financial data solutions.",
    image: imgFinance,
    solutions: ["Financial dashboards", "Automated reporting", "Invoice & billing automation", "Data integration"],
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "Business Growth & Marketing",
    description: "Lead generation, CRM integration, and digital marketing solutions that help your business grow.",
    image: imgGrowth,
    solutions: ["Lead generation automation", "CRM & pipeline management", "Social media intelligence", "Marketing analytics"],
  },
];

const Industries = () => {
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
              <span className="text-primary text-sm font-medium mb-2 block">Industries</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Supporting Business Growth
              </h1>
              <p className="text-lg text-muted-foreground">
                We deliver technology solutions across e-commerce, spare parts, finance, and business growth sectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries */}
        {industries.map((industry, index) => (
          <section
            key={industry.id}
            id={industry.id}
            className={`section-padding ${index % 2 === 1 ? 'bg-secondary/30' : ''}`}
          >
            <div className="container-max">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <industry.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-3xl font-bold">{industry.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{industry.description}</p>

                  <div className="space-y-3 mb-8">
                    {industry.solutions.map((solution) => (
                      <div key={solution} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" className="group" onClick={() => window.location.href = "/contact"}>
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Don't See Your Business Type?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              We work with a wide range of businesses. Let's talk about your specific needs.
            </p>
            <Button variant="secondary" size="lg" className="group" onClick={() => window.location.href = "/contact"}>
              Contact Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
