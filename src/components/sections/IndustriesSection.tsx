import { ShoppingBag, Globe, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Real Unsplash photos
const imgEcommerce = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop";
const imgSpareParts = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80&auto=format&fit=crop";
const imgFinance = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&q=80&auto=format&fit=crop";
const imgGrowth = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80&auto=format&fit=crop";

const industries = [
  {
    icon: ShoppingBag,
    title: "E-Commerce & Retail",
    description: "Custom platforms & growth tools",
    image: imgEcommerce,
    href: "/industries#ecommerce"
  },
  {
    icon: Globe,
    title: "Spare Parts & Distribution",
    description: "Catalog & procurement systems",
    image: imgSpareParts,
    href: "/industries#spare-parts"
  },
  {
    icon: Zap,
    title: "Finance & Accounting",
    description: "Dashboards & reporting automation",
    image: imgFinance,
    href: "/industries#finance"
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Lead gen, CRM & marketing",
    image: imgGrowth,
    href: "/industries#growth"
  },
];

export const IndustriesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-medium mb-2 block">Industries</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Supporting Every Business Type
          </h2>
          <p className="text-muted-foreground">
            We deliver technology solutions tailored for e-commerce, spare parts, finance, and business growth.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={industry.href}
                className="group relative block h-72 rounded-2xl overflow-hidden"
              >
                {/* Background Image */}
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center mb-3">
                    <industry.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1">
                    {industry.title}
                  </h3>
                  <span className="text-xs text-primary font-medium">
                    {industry.description}
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
