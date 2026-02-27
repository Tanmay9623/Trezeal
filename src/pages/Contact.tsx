import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-8 relative">
          <div className="absolute inset-0 bg-dots opacity-30" />
          <div className="container-max px-4 md:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <span className="text-primary text-sm font-medium mb-2 block">Contact</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Let's Start a Conversation
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to transform your operations? We're here to help.
              </p>
            </motion.div>
          </div>
        </section>
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
