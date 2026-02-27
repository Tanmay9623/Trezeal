import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="container-max relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            We are a focused startup committed to delivering real value. Let's work together and build something that actually makes a difference for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-primary hover:bg-white/90"
              onClick={() => window.location.href = "/contact"}
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => window.location.href = "/services"}
            >
              View Our Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
