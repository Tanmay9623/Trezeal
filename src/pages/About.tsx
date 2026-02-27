import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Globe, Lightbulb, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
const aboutImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop";
const heroImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop";

const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "20+", label: "Active Clients" },
  { value: "3+", label: "Industries Served" },
  { value: "100%", label: "Commitment" },
];

const values = [
  { icon: Lightbulb, title: "Innovation", description: "Bringing fresh thinking and modern technology to every challenge — even as a new team, we never settle for ordinary." },
  { icon: Users, title: "Partnership", description: "We treat every client relationship as a genuine partnership, staying invested in your success long after delivery." },
  { icon: Award, title: "Excellence", description: "Quality is non-negotiable. We hold ourselves to high standards on every project, no matter the size." },
  { icon: Globe, title: "Growth Mindset", description: "We are an early-stage startup with big ambitions — learning fast, improving constantly, and expanding our reach." },
];

const timeline = [
  { year: "2023", event: "Trezeal founded — a small but passionate team with a clear vision: making powerful technology accessible to businesses of all sizes." },
  { year: "2024", event: "Delivered our first set of client projects across web development, data solutions, and business automation." },
  { year: "2025", event: "Expanded into 3+ industries and built relationships with 5+ active clients who trust us to solve real business problems." },
  { year: "2026", event: "Continuing to grow — refining our services, sharpening our skills, and committing 100% to every client we work with." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="" className="w-full h-full object-cover opacity-[0.06]" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/4 rounded-full blur-[100px] pointer-events-none" />

          <div className="container-max px-4 md:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-border text-sm font-medium text-muted-foreground mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                About Trezeal
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Building Smart Solutions
                <span className="block text-muted-foreground">From the Ground Up</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                We are a passionate early-stage team combining technology and creativity to deliver
                real, measurable results for our clients — one project at a time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-border">
          <div className="container-max px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="font-display text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
                <img
                  src={aboutImage}
                  alt="Trezeal team at work"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sm font-medium text-muted-foreground mb-3 block uppercase tracking-widest">Our Story</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Started Small, Growing with Purpose</h2>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  Trezeal was born from a simple belief: great technology should not be reserved for large
                  corporations. We started as a small team with a big drive to help businesses solve real
                  problems through smart, modern software.
                </p>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  In our early projects, we focused on understanding client needs deeply before writing a
                  single line of code. That approach — listening first, building second — has defined how
                  we work.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Today, we are actively growing: serving 20+ clients across 3+ industries, completing 20+
                  projects, and showing up with 100% commitment to every engagement.
                </p>
                <div className="flex flex-col gap-3">
                  {["Client-First Approach", "Transparent Communication", "Committed to Quality"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-secondary/20">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <span className="text-sm font-medium text-muted-foreground mb-3 block uppercase tracking-widest">Our Values</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Principles That Guide Everything</h2>
              <p className="text-muted-foreground">
                Rooted in integrity and driven by excellence — values that define how we work with every client, every day.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/8 border border-border flex items-center justify-center mb-5">
                    <value.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <span className="text-sm font-medium text-muted-foreground mb-3 block uppercase tracking-widest">Our Journey</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Milestones That Shaped Us</h2>
            </motion.div>
            <div className="max-w-2xl mx-auto">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-3 h-3 rounded-full bg-primary mt-1.5" />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-8 last:pb-0">
                    <span className="font-display font-bold text-primary text-sm">{item.year}</span>
                    <p className="text-muted-foreground mt-1 leading-relaxed">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground">
          <div className="container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">
                Ready to Shape the Future Together?
              </h2>
              <p className="text-background/70 mb-10 max-w-xl mx-auto leading-relaxed">
                Whether you're looking to transform your operations or join our world-class engineering team — we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 group"
                  onClick={() => window.location.href = "/contact"}
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-background/30 text-background hover:bg-background/10"
                  onClick={() => window.location.href = "/contact"}
                >
                  Get in Touch
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
