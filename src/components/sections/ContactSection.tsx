import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

// ✅ Free form endpoint from https://formspree.io
const FORMSPREE_ID = "xjgezjdd";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-sm font-medium mb-2 block">Contact</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Let's Build Together
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to transform your operations? Our team is here to help.
            </p>

            <div className="space-y-4">
              <a href="mailto:info@trezeal.com" className="flex items-center gap-4 p-4 glass-card hover-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium">info@trezeal.com</div>
                </div>
              </a>

              <a href="tel:+919623412734" className="flex items-center gap-4 p-4 glass-card hover-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Phone</div>
                  <div className="font-medium">+91 9623412734</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="font-medium">India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="glass-card space-y-5">
              <h3 className="font-display text-xl font-semibold mb-4">Send a Message</h3>

              {/* Success banner */}
              {status === "success" && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm font-medium">Message sent! We'll get back to you soon.</p>
                </div>
              )}

              {/* Error banner */}
              {status === "error" && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name *</label>
                  <Input
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background"
                    disabled={status === "loading"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email *</label>
                  <Input
                    required
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background"
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Company</label>
                <Input
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-background"
                  disabled={status === "loading"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Message *</label>
                <Textarea
                  required
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background resize-none"
                  disabled={status === "loading"}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group"
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
